import L from "leaflet";

import { showSectionFuncs } from "../subsections";

const popupOptions: L.PopupOptions = {
  maxWidth: 250,
  maxHeight: 200,
  className: "museum-map-popup",
};

export const makePopup = (
  title: string,
  content: string,
  secId: string
): L.Popup => {
  const titleElem = document.createElement("h4");
  titleElem.textContent = title;
  const popupTitle = document.createElement("div");
  popupTitle.classList.add("popup-title"), popupTitle.appendChild(titleElem);

  const popupButton = document.createElement("button");
  popupButton.textContent = "ver más >";
  popupButton.classList.add("popup-button");
  const openSectionFunc = showSectionFuncs[secId];
  popupButton.addEventListener("click", openSectionFunc);

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.textContent = content;
  popupContent.appendChild(popupButton);

  const container = document.createElement("div");
  container.classList.add("museum-map-popup-content");
  container.appendChild(popupTitle);
  container.appendChild(popupContent);

  return L.popup(popupOptions).setContent(container);
};
