const modalDropback = <HTMLDivElement>(
  document.querySelector(".modal__dropback")
);
// const modal = <HTMLDivElement>document.querySelector(".modal__main");
const openModalImg = <HTMLImageElement>document.querySelector(".navbar__info");

const closeModal = () => modalDropback.classList.add("hidden");
const openModal = () => modalDropback.classList.remove("hidden");

modalDropback.addEventListener("click", closeModal);
openModalImg.addEventListener("click", openModal);
