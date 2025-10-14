import proj4 from "proj4";
import { register } from "ol/proj/proj4";

function setupProj4() {
  proj4.defs("EPSG:4258", "+proj=longlat +ellps=GRS80 +no_defs +type=crs");
  register(proj4);
}

export { setupProj4 };
