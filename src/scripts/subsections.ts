const section = <HTMLDivElement>(
  document.querySelector(".section__cards_container")
);

const hideSection = () => section.classList.toggle("hidden");

export const addSectionsEventListeners = () => {
  document
    .querySelector(".section__container .section__header button")
    ?.addEventListener("click", hideSection);
  document
    .querySelectorAll(
      ".section__container .section__cards_container .card__container .card__content_container .card__content button"
    )
    .forEach((button) => button.addEventListener("click", hideSection));
};
