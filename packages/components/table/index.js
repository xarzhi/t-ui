import Table from "./src/table.vue";

Table.install = (app) => {
  app.component(Table.name, Table);
};
export const TTable = Table;

export default TTable;
