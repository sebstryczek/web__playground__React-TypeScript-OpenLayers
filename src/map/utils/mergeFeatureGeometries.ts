import type { Feature } from "ol";

import type { PolygonCoordinates } from "../core/types";
import { extractCoordinates } from "./extractCoordinates";

function mergeFeatureGeometries(features: Array<Feature>): PolygonCoordinates {
  return features
    .map((feature) => feature.getGeometry())
    .filter((geometry) => geometry !== null && geometry !== undefined)
    .flatMap(extractCoordinates);
}

export { mergeFeatureGeometries };
