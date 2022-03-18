const sections = [
  "frogs-section",
  "trees-section",
  "birds-section",
  "bats-section",
  "museum-section",
].map((id) => <HTMLDivElement>document.getElementById(id));

/*const section = <HTMLDivElement>(
  document.querySelector(".section__cards_container")
);*/

const hideMySection = (section: HTMLDivElement) => () =>
  section
    ?.querySelector(".section__cards_container")
    ?.classList.toggle("hidden");

export const addSectionsEventListeners = () => {
  sections.forEach((section) => {
    section
      ?.querySelector(".section__header button")
      ?.addEventListener("click", hideMySection(section));
  });
  /* document
    .querySelector(".section__container .section__header button")
    ?.addEventListener("click", hideSection);
    
  document
    .querySelectorAll(
      ".section__container .section__cards_container .card__container .card__content_container .card__content button"
    )
    .forEach((button) => button.addEventListener("click", hideSection));*/
};
