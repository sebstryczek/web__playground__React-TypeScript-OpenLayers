import {
  createMaskLayer,
  createOsmLayer,
  createVoivodeshipsLayer,
} from "../layers";
import { fromLonLat } from "ol/proj";
import { Feature, Map as OpenLayersMap, View } from "ol";
import { MultiPolygon, Polygon } from "ol/geom";
import { setupProj4 } from "../utils/setupProj4";
import { getWorldExtent } from "../utils/getWorldExtent";

setupProj4();

function createMap({ element }: { element: HTMLDivElement }) {
  const osmLayer = createOsmLayer();
  const voivodeshipsLayer = createVoivodeshipsLayer();
  const maskLayer = createMaskLayer();

  const map = new OpenLayersMap({
    target: element,
    layers: [osmLayer, maskLayer, voivodeshipsLayer],
    view: new View({
      center: fromLonLat([19.5, 52.0]),
      zoom: 6,
    }),
  });

  const maskSource = maskLayer.getSource();
  if (maskSource === null) {
    throw new Error("Mask source is null");
  }
  const voivodeshipsSource = voivodeshipsLayer.getSource();

  if (voivodeshipsSource === null) {
    throw new Error("Voivodeships source is null");
  }

  voivodeshipsSource.once("change", () => {
    if (voivodeshipsSource.getState() === "ready") {
      const features = voivodeshipsSource.getFeatures();

      if (features.length > 0) {
        const allCoordinates: number[][][] = [];

        features.forEach((feature) => {
          const geometry = feature.getGeometry();
          if (geometry) {
            if (geometry.getType() === "Polygon") {
              const coords = (geometry as Polygon).getCoordinates();
              allCoordinates.push(...coords);
            } else if (geometry.getType() === "MultiPolygon") {
              const coords = (geometry as MultiPolygon).getCoordinates();
              coords.forEach((polygonCoords) => {
                allCoordinates.push(...polygonCoords);
              });
            }
          }
        });

        const worldExtent = getWorldExtent();
        const outerRing = [
          [worldExtent[0], worldExtent[1]],
          [worldExtent[2], worldExtent[1]],
          [worldExtent[2], worldExtent[3]],
          [worldExtent[0], worldExtent[3]],
          [worldExtent[0], worldExtent[1]],
        ];

        const polygonCoords = [outerRing, ...allCoordinates];
        const maskPolygon = new Polygon(polygonCoords);
        const maskFeature = new Feature({
          geometry: maskPolygon,
        });

        maskSource.addFeature(maskFeature);
      }
    }
  });

  return map;
}

export { createMap };
