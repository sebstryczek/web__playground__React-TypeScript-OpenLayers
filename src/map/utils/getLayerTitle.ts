import type BaseLayer from "ol/layer/Base";

import { LAYERS } from "../core/constants";

const layerTitles = Object.values(LAYERS).map((layer) => layer.title);
type LayerTitle = (typeof layerTitles)[number];

function getLayerTitle({ layer }: { layer: BaseLayer }): LayerTitle | undefined {
  return layerTitles.find((title) => title === layer.get("title"));
}

export { getLayerTitle };
