const COORDINATES_EPSG_4326 = {
  POLAND_CENTER: [19.5, 52.0],
  POLAND_BBOX: [14.07, 49.0, 24.15, 54.84],
};

const LAYERS = {
  osm: {
    id: "osm",
    title: "OpenStreetMap",
  },
  voivodeships: {
    id: "voivodeships",
    title: "Voivodeships",
  },
  mask: {
    id: "mask",
    title: "Mask",
  },
} as const;

export { COORDINATES_EPSG_4326, LAYERS };
