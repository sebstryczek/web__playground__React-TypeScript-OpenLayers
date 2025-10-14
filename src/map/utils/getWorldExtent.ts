import { getProjection } from "./getProjection";

function getWorldExtent() {
  const projection = getProjection("EPSG:3857");
  const extent = projection.getExtent();
  return extent;
}

export { getWorldExtent };
