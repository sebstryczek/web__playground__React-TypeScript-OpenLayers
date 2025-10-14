import { useContext } from "react";
import { MapContext } from "../context/MapContext";

const useMapInitializer = () => {
  const ctx = useContext(MapContext);

  if (ctx === undefined) {
    throw new Error("useMap must be used within <MapProvider />");
  }

  const { initializeMap, disposeMap } = ctx;

  return { initializeMap, disposeMap };
};

export { useMapInitializer };
