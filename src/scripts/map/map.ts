import L, { LatLngBounds } from "leaflet";

import DummyMap from "../../assets/dummy-map.svg";
import "../../styles/map.css";
import { addMarker } from "./markers";

const map = L.map("map", {
  minZoom: -5,
  crs: L.CRS.Simple,
});

const imgUrl = DummyMap;
const imageBounds: LatLngBounds = L.latLngBounds(
  L.latLng(0, 0),
  L.latLng(210, 297)
);

map.fitBounds(imageBounds);
L.imageOverlay(imgUrl, imageBounds).addTo(map);

addMarker(map, 100, 100);
addMarker(map, 100, 200);
addMarker(map, 150, 150);
