import type BaseLayer from "ol/layer/Base";
import { LAYERS } from "../core/constants";

const layerIds = Object.values(LAYERS).map((layer) => layer.id);
type LayerId = (typeof layerIds)[number];

function getLayerId({ layer }: { layer: BaseLayer }): LayerId | undefined {
  return layerIds.find((id) => id === layer.get("id"));
}

export { getLayerId };
