import { useContext } from "react";
import { MapContext } from "./MapContext";

const useMap = () => {
  const ctx = useContext(MapContext);

  if (ctx === undefined) {
    throw new Error("useMap must be used within <MapProvider />");
  }

  const { getMap } = ctx;

  return { getMap };
};

export { useMap };
