import L from "leaflet";

const popupOptions: L.PopupOptions = {
  maxWidth: 250,
  maxHeight: 200,
  className: "museum-map-popup",
};

export const makePopup = (
  title: string,
  content: string,
  refId: string
): L.Popup => {
  const popupContent = `
  <div class="museum-map-popup-content">
    <div class="popup-title"><h4>${title}</h4></div>
    <div class="popup-content">${content}
      <button id="${refId}" class="popup-button">ver más ></button>
    </div>
  </div>`;
  return L.popup(popupOptions).setContent(popupContent);
};
