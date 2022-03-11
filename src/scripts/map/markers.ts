import L from "leaflet";

import { svgIcon } from "./icon";

export const addMarker = (map: L.Map, x: number, y: number) => {
  L.marker([x, y], { icon: svgIcon }).addTo(map);
};
