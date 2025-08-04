import Steps from "./src/steps.vue";

Steps.install = (app) => {
  app.component(Steps.name, Steps);
};
export const TSteps = Steps;

export default TSteps;
