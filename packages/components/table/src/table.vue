<template>
  <div class="t-table">
    <div class="t-table__thead-wrapper">
      <table class="t-table__thead">
        <thead>
          <tr>
            <th
              v-for="item in columns"
              :key="item.key"
              :style="{
                width: item.width + 'px',
                flex: item.width ? 'none' : 1,
              }"
            >
              <div class="cell">
                {{ item.title }}
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="t-table__tbody-wrapper">
      <table class="t-table__tbody">
        <tbody>
          <tr
            v-for="(row, rowIndex) in dataSource"
            :key="`table_row_${rowIndex}`"
          >
            <td
              v-for="(column, columnIndex) in columns"
              :key="`table_column_${columnIndex}`"
              :style="{
                width: column.width + 'px',
                flex: column.width ? 'none' : 1,
              }"
            >
              <div class="cell">
                {{ row[column.key] }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { TableProps } from "./table";

defineOptions({
  name: "t-table",
});

defineProps(TableProps);
</script>

<style lang="scss" scoped></style>
