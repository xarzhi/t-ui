import * as components from "./components";

const FUNCTION_COMP = ["TMessage"];

export default {
  install(app) {
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMP.includes(key)) app.component(key, value);
    });
  },
};

export const TMessage = components.TMessage;
