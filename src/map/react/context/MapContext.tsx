import React, { createContext, useCallback, useMemo, useRef, useState } from "react";
import { Map as OLMap } from "ol";
import type BaseLayer from "ol/layer/Base";

import { createMap } from "../../core/createMap";

type MapApi = {
  mapInstance: OLMap | null;
  mapLayers: Array<BaseLayer>;
};

type MapInitializerApi = {
  initializeMap: (el: HTMLDivElement) => void;
  disposeMap: () => void;
};

type MapContextValue = MapApi & MapInitializerApi;

const MapContext = createContext<MapContextValue | undefined>(undefined);

const MapProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const mapRef = useRef<OLMap | null>(null);
  const [mapLayers, setMapLayers] = useState<Array<BaseLayer>>([]);

  const mapInstance = mapRef.current;

  const initializeMap = useCallback((mapElement: HTMLDivElement) => {
    if (mapRef.current !== null) {
      return;
    }

    mapRef.current = createMap({ element: mapElement });

    setMapLayers(mapRef.current.getLayers().getArray().toReversed());
  }, []);

  const disposeMap = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setTarget(undefined);
      mapRef.current = null;
    }
  }, []);

  const value = useMemo(
    () => ({ mapInstance, mapLayers, initializeMap, disposeMap }),
    [mapInstance, mapLayers, initializeMap, disposeMap]
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export { MapContext, MapProvider };
