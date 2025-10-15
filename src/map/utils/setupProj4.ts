import proj4 from "proj4";
import { register } from "ol/proj/proj4";

function setupProj4() {
  proj4.defs("EPSG:4258", "+proj=longlat +ellps=GRS80 +no_defs +type=crs");
  proj4.defs(
    "EPSG:2180",
    "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"
  );

  register(proj4);
}

export { setupProj4 };
