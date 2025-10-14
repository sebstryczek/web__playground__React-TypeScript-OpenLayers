import type { Feature } from "ol";

import { extractCoordinates } from "./extractCoordinates";

function mergeFeatureGeometries(features: Feature[]): number[][][] {
  return features
    .map((feature) => feature.getGeometry())
    .filter((geometry) => geometry !== null && geometry !== undefined)
    .flatMap(extractCoordinates);
}

export { mergeFeatureGeometries };
