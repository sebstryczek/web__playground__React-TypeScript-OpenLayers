import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";

function createMaskLayer() {
  const maskSource = new VectorSource();
  const maskLayer = new VectorLayer({
    source: maskSource,
    style: new Style({
      fill: new Fill({
        color: "rgba(255, 255, 255, 0.8)",
      }),
    }),
  });

  // const voivodeshipsSource = voivodeshipsLayer.getSource();

  // if (voivodeshipsSource) {
  //   voivodeshipsSource.once("change", () => {
  //     if (voivodeshipsSource.getState() === "ready") {
  //       const features = voivodeshipsSource.getFeatures();

  //       if (features.length > 0) {
  //         const allCoordinates: number[][][] = [];

  //         features.forEach((feature) => {
  //           const geometry = feature.getGeometry();
  //           if (geometry) {
  //             if (geometry.getType() === "Polygon") {
  //               const coords = (geometry as Polygon).getCoordinates();
  //               allCoordinates.push(...coords);
  //             } else if (geometry.getType() === "MultiPolygon") {
  //               const coords = (geometry as MultiPolygon).getCoordinates();
  //               coords.forEach((polygonCoords) => {
  //                 allCoordinates.push(...polygonCoords);
  //               });
  //             }
  //           }
  //         });

  //         const projection = get("EPSG:3857");
  //         if (!projection) {
  //           throw new Error("Projection EPSG:3857 not found");
  //         }

  //         const extent = projection.getExtent();
  //         const outerRing = [
  //           [extent[0], extent[1]],
  //           [extent[2], extent[1]],
  //           [extent[2], extent[3]],
  //           [extent[0], extent[3]],
  //           [extent[0], extent[1]],
  //         ];

  //         const polygonCoords = [outerRing, ...allCoordinates];
  //         const maskPolygon = new Polygon(polygonCoords);
  //         const maskFeature = new Feature({ geometry: maskPolygon });

  //         maskSource.addFeature(maskFeature);
  //       }
  //     }
  //   });
  // }

  return maskLayer;
}

export { createMaskLayer };
