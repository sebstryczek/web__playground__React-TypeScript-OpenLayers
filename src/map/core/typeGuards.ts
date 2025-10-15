import { Geometry } from "ol/geom";
import type { MultiPolygon, Polygon } from "ol/geom";

function isGeometry(geometry: unknown): geometry is Geometry {
  if (geometry === null || typeof geometry !== "object") {
    return false;
  }

  return geometry instanceof Geometry;
}

function isPolygon(geometry: Geometry): geometry is Polygon {
  return geometry.getType() === "Polygon";
}

function isMultiPolygon(geometry: Geometry): geometry is MultiPolygon {
  return geometry.getType() === "MultiPolygon";
}

export { isGeometry, isPolygon, isMultiPolygon };
