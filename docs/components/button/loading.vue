<template>
  <div>
    <t-button type="primary" size="large" shape="round" loading>large</t-button>
    <t-button type="primary" size="middle" shape="round" loading
      >middle</t-button
    >
    <t-button
      type="primary"
      size="small"
      shape="round"
      :loading="loading"
      @click="loadData"
      >loadData</t-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
const loading = ref(false);

const loadData = () => {
  loading.value = true;
  let timer = setTimeout(() => {
    loading.value = false;
    clearTimeout(timer);
    timer = null;
  }, 1000);
};
</script>
