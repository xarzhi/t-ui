<template>
  <div>
    <t-button type="success" @click="handleMessage('success')"
      >10S关闭</t-button
    >
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { TMessage } from "@t-ui/components";

const handleMessage = (type, message) => {
  TMessage({
    type,
    message: "10s后关闭",
    delay: 10,
  });
};
</script>
