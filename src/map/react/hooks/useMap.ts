import { useContext } from "react";
import { MapContext } from "../context/MapContext";

const useMap = () => {
  const ctx = useContext(MapContext);

  if (ctx === undefined) {
    throw new Error("useMap must be used within <MapProvider />");
  }

  const { mapInstance, mapLayers } = ctx;

  return { mapInstance, mapLayers };
};

export { useMap };
