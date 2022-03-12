const modalDropback = <HTMLDivElement>(
  document.querySelector(".modal__dropback")
);
const openModalImg = <HTMLImageElement>document.querySelector(".navbar__info");
const closeModalButtton = <HTMLSpanElement>(
  document.querySelector(".modal__close")
);

const closeModal = () => modalDropback.classList.add("hidden");
const openModal = () => modalDropback.classList.remove("hidden");

export const addModalEventListeners = () => {
  modalDropback.addEventListener("click", (e) => {
    if (e.target === modalDropback) closeModal();
  });
  openModalImg.addEventListener("click", openModal);
  closeModalButtton.addEventListener("click", closeModal);
};
