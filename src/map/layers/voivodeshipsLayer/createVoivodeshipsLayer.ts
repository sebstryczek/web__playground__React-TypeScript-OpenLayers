import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";

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
    style: new Style({
      stroke: new Stroke({
        color: "#3388ff",
        width: 2,
      }),
      fill: new Fill({
        color: "rgba(51, 136, 255, 0.1)",
      }),
    }),
  });
}

export { createVoivodeshipsLayer };
