const collaboratorsBackdrop = <HTMLDivElement>(
  document.querySelector(".collaborators__backdrop")
);
const openCollaboratorsButton = <HTMLButtonElement>(
  document.querySelector("footer button")
);
const closeCollaboratorsButton = <HTMLSpanElement>(
  document.querySelector(".collaborators__modal header span")
);

const closeCollaborators = () => collaboratorsBackdrop.classList.add("hidden");
const openCollaborators = () =>
  collaboratorsBackdrop.classList.remove("hidden");

export const addFooterEventListeners = () => {
  collaboratorsBackdrop.addEventListener("click", (e) => {
    if (e.target === collaboratorsBackdrop) closeCollaborators();
  });
  openCollaboratorsButton.addEventListener("click", openCollaborators);
  closeCollaboratorsButton.addEventListener("click", closeCollaborators);
};
