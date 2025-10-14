import { get } from "ol/proj";

function getProjection(projectionCode: "EPSG:3857") {
  const projection = get(projectionCode);

  if (projection === null) {
    throw new Error(`Projection ${projectionCode} not found`);
  }

  return projection;
}

export { getProjection };
