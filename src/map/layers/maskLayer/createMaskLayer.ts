import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";
import { LAYERS } from "../../core/constants";

function createMaskLayer() {
  const maskSource = new VectorSource();
  const maskLayer = new VectorLayer({
    source: maskSource,
    style: new Style({
      fill: new Fill({
        color: "rgba(255, 255, 255, 1)",
      }),
    }),
    properties: LAYERS.mask,
  });

  return maskLayer;
}

export { createMaskLayer };
