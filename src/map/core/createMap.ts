import { Feature, Map as OpenLayersMap, View } from "ol";
import { Polygon } from "ol/geom";
import { fromLonLat, transformExtent } from "ol/proj";

import { createMaskLayer, createOsmLayer, createVoivodeshipsLayer } from "../layers";
import { setupProj4 } from "../utils/setupProj4";
import { createWorldPolygon } from "../utils/createWorldPolygon";
import { mergeFeatureGeometries } from "../utils/mergeFeatureGeometries";
import { COORDINATES_EPSG_4326 } from "./constants";
import { createLinesLayer } from "../layers/linesLayer";

setupProj4();

const MAP_EXTENT = transformExtent(COORDINATES_EPSG_4326.POLAND_BBOX, "EPSG:4326", "EPSG:3857");

function createMap({ element }: { element: HTMLDivElement }) {
  const osmLayer = createOsmLayer();
  const voivodeshipsLayer = createVoivodeshipsLayer();
  const maskLayer = createMaskLayer();
  const linesLayer = createLinesLayer();

  const view = new View({
    center: fromLonLat(COORDINATES_EPSG_4326.POLAND_CENTER),
    extent: MAP_EXTENT,
    zoom: 2,
    showFullExtent: true,
    padding: [100, 0, 0, 0],
    smoothExtentConstraint: false,
    smoothResolutionConstraint: false,
  });

  const map = new OpenLayersMap({
    target: element,
    layers: [
      osmLayer,
      maskLayer,
      voivodeshipsLayer, // Voivodeships over mask to display country borders stroke
      linesLayer,
    ],
    view,
    controls: [],
  });

  const voivodeshipsSource = voivodeshipsLayer.getSource();

  if (voivodeshipsSource === null) {
    throw new Error("Voivodeships source is null");
  }

  const maskSource = maskLayer.getSource();

  if (maskSource === null) {
    throw new Error("Mask source is null");
  }

  voivodeshipsSource.once("change", () => {
    if (voivodeshipsSource.getState() === "ready") {
      const features = voivodeshipsSource.getFeatures();

      if (features.length === 0) {
        throw new Error("No features found in voivodeships source");
      }

      // Create a polygon covering the entire world
      const worldPolygon = createWorldPolygon();

      // Extract and merge all voivodeship geometries into coordinate arrays
      const innerCoordinates = mergeFeatureGeometries(features);

      // [0] is used because Polygon.getCoordinates() returns an array of rings,
      // where the first element [0] is always the outer boundary ring
      const outerRing = worldPolygon.getCoordinates()[0];

      // Create a polygon with holes using the OpenLayers/GeoJSON structure:
      // [outerRing, ...innerCoordinates]
      // - First element: outer boundary (world extent)
      // - Rest elements: inner rings that become holes (voivodeships)
      const maskPolygon = new Polygon([outerRing, ...innerCoordinates]);

      const maskFeature = new Feature({ geometry: maskPolygon });
      maskSource.addFeature(maskFeature);
    }
  });

  return map;
}

export { createMap };
