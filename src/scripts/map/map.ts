import L, { LatLngBounds } from "leaflet";

import Map from "../../assets/mapa-dorbigny-min.png";
import "../../styles/map.css";
import { addMapMarkers } from "./markers";

const map = L.map("map", {
  minZoom: -2,
  crs: L.CRS.Simple,
  center: [250, 300],
  zoom: -1,
  maxZoom: 1,
});

const imgUrl = Map;
const imageBounds: LatLngBounds = L.latLngBounds(
  L.latLng(0, 0),
  L.latLng(500, 800)
);

L.imageOverlay(imgUrl, imageBounds, {
  attribution:
    'Ilustración <a href="https://www.instagram.com/che_churka/">Che Churka</a>',
}).addTo(map);

addMapMarkers(map);
