import VectorSource from "ol/source/Vector";
import VectorImage from "ol/layer/VectorImage";
import GeoJSON from "ol/format/GeoJSON";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import { LAYERS } from "@/map/core/constants";

const LINES_GEOJSON_URL = "/linie.geojson";

function createLinesLayer() {
  const source = new VectorSource({
    url: LINES_GEOJSON_URL,
    format: new GeoJSON({
      dataProjection: "EPSG:2180",
      featureProjection: "EPSG:3857",
    }),
    wrapX: false,
  });

  const lineStyle = new Style({
    stroke: new Stroke({
      color: "#ff0000",
      width: 1,
      lineCap: "round",
      lineJoin: "round",
    }),
  });

  const layer = new VectorImage({
    source,
    style: lineStyle,
    renderBuffer: 64,
    opacity: 0.95,
    properties: LAYERS.lines,
  });

  return layer;
}

export { createLinesLayer };
