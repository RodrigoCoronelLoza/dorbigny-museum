const sectionIds = [
  "frogs-section",
  "trees-section",
  "birds-section",
  "bats-section",
  "museum-section",
];

const sections = sectionIds.map(
  (id) => <HTMLDivElement>document.getElementById(id)
);

const scrollCardsToTop = () => {
  document
    .querySelectorAll(".card__content")
    .forEach((card) => (card.scrollTop = 0));
};

const hideMySection = (section: HTMLDivElement) => () => {
  const span = <HTMLSpanElement>section.querySelector(".section__header span");
  const cards = <HTMLDivElement>(
    section?.querySelector(".section__cards_container")
  );
  span.innerHTML = cards?.classList.contains("hidden") ? "&and;" : "&or;";
  cards?.classList.toggle("hidden");
  scrollCardsToTop();
};

export const addSectionsEventListeners = () => {
  sections.forEach((section) => {
    const hideSectionFunc = hideMySection(section);
    section
      ?.querySelector(".section__header")
      ?.addEventListener("click", hideSectionFunc);
    const cards = section.querySelectorAll(".card__content button");
    cards.forEach((button) =>
      button.addEventListener("click", hideSectionFunc)
    );
  });
};

export const showSectionFuncs: Record<string, () => void> = {};

sectionIds.forEach(
  (sectionId: string, index) =>
    (showSectionFuncs[sectionId] = () => {
      document.getElementById(sectionId)?.scrollIntoView();
      hideMySection(sections[index])();
    })
);
