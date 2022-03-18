const sections = [
  "frogs-section",
  "trees-section",
  "birds-section",
  "bats-section",
  "museum-section",
].map((id) => <HTMLDivElement>document.getElementById(id));

const hideMySection = (section: HTMLDivElement) => () =>
  section
    ?.querySelector(".section__cards_container")
    ?.classList.toggle("hidden");

export const addSectionsEventListeners = () => {
  sections.forEach((section) => {
    const hideSectionFunc = hideMySection(section);
    section
      ?.querySelector(".section__header button")
      ?.addEventListener("click", hideSectionFunc);
    const cards = section.querySelectorAll(".card__content button");
    cards.forEach((button) =>
      button.addEventListener("click", hideSectionFunc)
    );
  });
};
