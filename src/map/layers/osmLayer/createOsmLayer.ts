import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { LAYERS } from "../../core/constants";

function createOsmLayer() {
  return new TileLayer({
    source: new OSM({ wrapX: false }),
    properties: LAYERS.osm,
  });
}

export { createOsmLayer };
