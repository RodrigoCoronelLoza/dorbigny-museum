import L from "leaflet";

import { svgIcon } from "./icon";
import { makePopup } from "./popup";

// const lorem = "Culpa aut aut natus quia hic esse quidem. Error saepe tempore deleniti deserunt porro ut. Dolorem tenetur consequatur sed ea molestiae quo suscipit architecto. ";
const treesText =
  "El Museo está ubicado en un terreno de casi 10’000 m2. Alberga más de un centenar de árboles de más de veinte especies diferentes.";
const frogsText =
  "El Centro K’ayra se dedica a la conservación de especies de anfibios amenazadas de extinción. Su habitante más famoso es #RomeotheFrog, ¡hasta hace poco considerado el último de su especie!";
const birdsText =
  "Al visitar el Museo, ¡te sorprenderá el canto de los pájaros! Muchas aves anidan en los árboles de los predios del museo o lo visitan durante sus rutas migratorias.";
const batsText =
  "Durante las noches, varios murciélagos sobrevuelan los predios del Museo. Estos vigilantes nocturnos se alimentan de los muchos insectos de la zona.";
const museumText =
  "Las salas de exposición se encuentran en una antigua y magnífica casona. Aquí encontrarás fósiles y ejemplares de aves, mamíferos, peces e insectos de Bolivia.";

const addMarker = (map: L.Map, x: number, y: number, popup: L.Popup) =>
  L.marker([x, y], { icon: svgIcon }).addTo(map).bindPopup(popup);

const addTreeMarker = (map: L.Map, x: number, y: number) => {
  const popup = makePopup("árboles", treesText, "trees-section", "trees-popup");
  addMarker(map, x, y, popup);
};

const addFrogMarker = (map: L.Map, x: number, y: number) => {
  const popup = makePopup(
    "anfibios",
    frogsText,
    "frogs-section",
    "frogs-popup"
  );
  addMarker(map, x, y, popup);
};

const addBirdMarker = (map: L.Map, x: number, y: number) => {
  const popup = makePopup("aves", birdsText, "birds-section", "birds-popup");
  addMarker(map, x, y, popup);
};

const addBatMarker = (map: L.Map, x: number, y: number) => {
  const popup = makePopup(
    "murciélagos",
    batsText,
    "bats-section",
    "bats-popup"
  );
  addMarker(map, x, y, popup);
};

const addMuseumMarker = (map: L.Map, x: number, y: number) => {
  const popup = makePopup(
    "museo",
    museumText,
    "museum-section",
    "museum-popup"
  );
  addMarker(map, x, y, popup);
};

export const addMapMarkers = (map: L.Map) => {
  addTreeMarker(map, 220, 200);
  addFrogMarker(map, 70, 535);
  addBirdMarker(map, 220, 730);
  addBatMarker(map, 350, 500);
  addMuseumMarker(map, 50, 380);
};
