import React, { createContext, useCallback, useMemo, useRef } from "react";
import { Map as OLMap } from "ol";
import { createMap } from "../../core/createMap";

type MapApi = {
  getMap: () => OLMap;
};

type MapInitializerApi = {
  initializeMap: (el: HTMLDivElement) => void;
  disposeMap: () => void;
};

type MapContextValue = MapApi & MapInitializerApi;

const MapContext = createContext<MapContextValue | undefined>(undefined);

const MapProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const mapRef = useRef<OLMap | null>(null);

  const getMap = useCallback(() => {
    if (!mapRef.current) {
      throw new Error("Map is not initialized");
    }

    return mapRef.current;
  }, []);

  const initializeMap = useCallback((mapElement: HTMLDivElement) => {
    if (mapRef.current !== null) {
      return;
    }

    mapRef.current = createMap({ element: mapElement });
  }, []);

  const disposeMap = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setTarget(undefined);
      mapRef.current = null;
    }
  }, []);

  const value = useMemo(
    () => ({ getMap, initializeMap, disposeMap }),
    [getMap, initializeMap, disposeMap]
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export { MapContext, MapProvider };
