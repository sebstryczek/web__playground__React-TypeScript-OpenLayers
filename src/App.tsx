import React from "react";
import { MapProvider, MapComponent } from "@/map/react";
import { Sidebar } from "@/ui/layout/Sidebar";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapProvider>
        <MapComponent />
        <Sidebar />
      </MapProvider>
    </div>
  );
};

export { App };
