const dialog: any = <HTMLDialogElement>document.querySelector(".colaborators");
const backdrop: any = document.querySelector(".backdrop");

const showDialog = () => {
  backdrop.show();
  dialog.show();
};
const closeDialog = () => {
  dialog.close();
  backdrop.close();
};
export const addFooterEventListeners = () => {
  document
    .querySelector("footer button")
    ?.addEventListener("click", showDialog);
  dialog.querySelector("header span").addEventListener("click", closeDialog);
  backdrop.addEventListener("click", closeDialog);
};
