import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

function createOsmLayer() {
  return new TileLayer({
    source: new OSM({ wrapX: false }),
  });
}

export { createOsmLayer };
