import L from "leaflet";

export const svgIcon = L.divIcon({
  html: `<svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" stroke="white" stroke-width="4"/>
  <circle cx="50" cy="50" r="33" fill="white" stroke="#CAC238" stroke-width="4"/>
  </svg>`,
  className: "",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});
