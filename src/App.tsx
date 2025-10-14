import React from "react";
import { MapProvider, MapComponent } from "./map/react";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </div>
  );
};

export { App };
