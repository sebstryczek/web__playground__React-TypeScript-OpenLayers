import Style, { type StyleFunction } from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import type { FeatureLike } from "ol/Feature";
import Chart from "ol-ext/style/Chart";

import { isGeometry, isMultiPolygon, isPolygon } from "@/map/core/typeGuards";

const POLYGON_STYLE = new Style({
  fill: new Fill({ color: "rgba(51, 136, 255, 0.1)" }),
  stroke: new Stroke({ color: "#3388ff", width: 2 }),
});

const CHART_COLORS = ["#66C2A5", "#FC8D62", "#8DA0CB", "#E78AC3"];

const DATA_LABELS = ["dane1", "dane2", "dane3", "dane4"];

function createStyles(): StyleFunction {
  const chartCreator = (voivodeshipData: FeatureLike): Array<Style> => {
    const data = DATA_LABELS.map((k) => Number(voivodeshipData.get(k)) || 0);

    const chartCenter = (() => {
      const geometry = voivodeshipData.getGeometry();

      if (isGeometry(geometry)) {
        if (isPolygon(geometry)) {
          return geometry.getInteriorPoint();
        }

        if (isMultiPolygon(geometry)) {
          return geometry.getInteriorPoints().getPoint(0);
        }
      }

      return null;
    })();

    if (chartCenter === null) {
      throw new Error("Chart center could not be determined");
    }

    const chart = new Chart({
      type: "donut",
      data,
      colors: CHART_COLORS,
      radius: 16,
      stroke: new Stroke({ color: "#222", width: 1 }),
    });

    const chartStyle = new Style({
      image: chart,
      geometry: chartCenter,
    });

    return [POLYGON_STYLE, chartStyle];
  };

  return chartCreator;
}

export { createStyles };
