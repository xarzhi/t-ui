<template>
  <div>
    <t-button type="default" @click="click">default</t-button>
    <t-button type="primary">primary</t-button>
    <t-button type="success">success</t-button>
    <t-button type="info">info</t-button>
    <t-button type="warning">warning</t-button>
    <t-button type="danger">danger</t-button>
  </div>
</template>

<script setup>
const click = () => {
  console.log(111);
};
</script>
