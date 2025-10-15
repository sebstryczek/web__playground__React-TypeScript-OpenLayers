import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { LAYERS } from "@/map/core/constants";
import { createStyles } from "./createStyles";

const VOIVODESHIPS_GEOJSON_URL = "/wojewodztwa.geojson";

function createVoivodeshipsLayer() {
  const source = new VectorSource({
    url: VOIVODESHIPS_GEOJSON_URL,
    format: new GeoJSON({
      dataProjection: "EPSG:4258",
      featureProjection: "EPSG:3857",
    }),
  });

  return new VectorLayer({
    source,
    properties: LAYERS.voivodeships,
    style: createStyles(),
  });
}

export { createVoivodeshipsLayer };
