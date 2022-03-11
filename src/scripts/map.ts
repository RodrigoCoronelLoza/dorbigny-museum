import L, { LatLngBounds } from "leaflet";

import DummyMap from "../assets/dummy-map.svg";
import "../styles/map.css";

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
