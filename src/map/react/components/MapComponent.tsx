import React from "react";
import { useMapInitializer } from "../hooks/useMapInitializer";

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
        width: "calc(100% + 300px)",
        height: "100%",
        marginLeft: "-300px",
      }}
    />
  );
};

export { MapComponent };
