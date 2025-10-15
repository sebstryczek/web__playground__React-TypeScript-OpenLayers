import { useReducer } from "react";
import { useMap } from "../../../map/react";
import { getLayerId } from "../../../map/utils/getLayerId";
import { getLayerTitle } from "../../../map/utils/getLayerTitle";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { mapLayers } = useMap();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>Layers</p>

      {mapLayers
        .filter((layer) => getLayerId({ layer }) !== "mask")
        .map((layer) => (
          <div className={styles.item} key={getLayerId({ layer })}>
            <input
              type="checkbox"
              checked={layer.getVisible()}
              onChange={() => {
                layer.setVisible(!layer.getVisible());
                forceUpdate();
              }}
            />
            <label>{getLayerTitle({ layer }) ?? "Untitled layer"}</label>
          </div>
        ))}
    </div>
  );
};

export { Sidebar };
