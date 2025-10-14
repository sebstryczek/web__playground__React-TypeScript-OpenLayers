import React from "react";

import "ol/ol.css";

import { useMapInitializer } from "./useMapInitializer";

const MapComponent: React.FC = () => {
  const { initializeMap, disposeMap } = useMapInitializer();
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      initializeMap(ref.current);
    }

    return () => {
      disposeMap();
    };
  }, [initializeMap, disposeMap]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export { MapComponent };
