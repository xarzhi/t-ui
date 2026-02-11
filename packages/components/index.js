import * as components from "./components";

import "@t-ui/theme-chalk/index.scss";

const FUNCTION_COMP = ["TMessage"];

const createPopperContainer = () => {
  if (typeof window === 'undefined') return;
  const popperContainer = document.createElement("div");
  popperContainer.setAttribute("id", "p-popper-container");
  document.body.append(popperContainer);
};

export default {
  install(app) {
    createPopperContainer();
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMP.includes(key)) app.component(key, value);
    });
  },
};

export const TMessage = components.TMessage;
