import L from "leaflet";

import { svgIcon } from "./icon";
import { makePopup } from "./popup";

// const lorem = "Culpa aut aut natus quia hic esse quidem. Error saepe tempore deleniti deserunt porro ut. Dolorem tenetur consequatur sed ea molestiae quo suscipit architecto. ";
const treesText =
  "El Museo está ubicado en un terreno de casi 10’000 m2. Alberga más de un centenar de árboles de más de veinte especies diferentes.";

const addMarker = (map: L.Map, x: number, y: number, popup: L.Popup) =>
  L.marker([x, y], { icon: svgIcon }).addTo(map).bindPopup(popup);

const addTreeMarker = (map: L.Map, x: number, y: number) => {
  const popup = makePopup("árboles", treesText, "trees-section");
  addMarker(map, x, y, popup);
};

export const addMapMarkers = (map: L.Map) => {
  addTreeMarker(map, 100, 100);
};
