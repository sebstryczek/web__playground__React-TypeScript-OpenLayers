import { Polygon } from "ol/geom";
import { getProjection } from "./getProjection";

function createWorldPolygon(): Polygon {
  const projection = getProjection("EPSG:3857");
  const worldExtent = projection.getExtent();

  const coordinates = [
    [worldExtent[0], worldExtent[1]],
    [worldExtent[2], worldExtent[1]],
    [worldExtent[2], worldExtent[3]],
    [worldExtent[0], worldExtent[3]],
    [worldExtent[0], worldExtent[1]],
  ];

  return new Polygon([coordinates]);
}

export { createWorldPolygon };
