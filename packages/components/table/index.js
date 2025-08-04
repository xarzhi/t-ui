import Table from "./src/Table.vue";

Table.install = (app) => {
  app.component(Table.name, Table);
};
export const TTable = Table;

export default TTable;
