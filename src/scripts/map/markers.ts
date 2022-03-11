import L from "leaflet";

import { svgIcon } from "./icon";
import { makePopup } from "./popup";

const lorem =
  "Culpa aut aut natus quia hic esse quidem. Error saepe tempore deleniti deserunt porro ut. Dolorem tenetur consequatur sed ea molestiae quo suscipit architecto. ";

export const addMarker = (map: L.Map, x: number, y: number) => {
  const popup = makePopup("árboles", lorem, "árboles");
  L.marker([x, y], { icon: svgIcon }).addTo(map).bindPopup(popup);
};
