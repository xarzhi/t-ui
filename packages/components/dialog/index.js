import Dialog from "./src/dialog.vue";

Dialog.install = (app) => {
  app.component(Dialog.name, Dialog);
};
export const TDialog = Dialog;

export default TDialog;
