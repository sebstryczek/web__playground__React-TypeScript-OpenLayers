import type { Geometry, MultiPolygon, Polygon } from "ol/geom";
import type { PolygonCoordinates } from "../core/types";

function isPolygon(geometry: Geometry): geometry is Polygon {
  return geometry.getType() === "Polygon";
}

function isMultiPolygon(geometry: Geometry): geometry is MultiPolygon {
  return geometry.getType() === "MultiPolygon";
}

/**
 * Extracts coordinates as a flat list of linear rings.
 *
 * Return type: PolygonCoordinates -> number[][][]
 *   - Level 1: Array<LinearRing> - a list of rings.
 *   - Level 2: Array<Coordinate> - the vertices of a single ring.
 *   - Level 3: Array<number> - a single coordinate tuple
 */
function extractCoordinates(geometry: Geometry): PolygonCoordinates {
  const coordinates: PolygonCoordinates = [];

  if (isPolygon(geometry)) {
    coordinates.push(...geometry.getCoordinates());
    return coordinates;
  }

  if (isMultiPolygon(geometry)) {
    geometry.getCoordinates().forEach((polygonCoords) => {
      coordinates.push(...polygonCoords);
    });
    return coordinates;
  }

  console.warn(`Unsupported geometry type: ${geometry.getType()}`);

  return coordinates;
}

export { extractCoordinates };
