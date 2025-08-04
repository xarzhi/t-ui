import Step from "./src/step.vue";

Step.install = (app) => {
  app.component(Step.name, Step);
};
export const TStep = Step;

export default TStep;
