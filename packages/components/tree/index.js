import Tree from "./src/tree.vue";

Tree.install = (app) => {
  app.component(Tree.name, Tree);
};
export const TTree = Tree;

export default TTree;
