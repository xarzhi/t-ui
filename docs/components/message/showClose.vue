<template>
  <div>
    <t-button type="success" @click="handleMessage('success', '让爱渗透了地面')"
      >success</t-button
    >
    <t-button type="info" @click="handleMessage('info', '我要的只是你在我身边')"
      >info</t-button
    >
  </div>
</template>
<script setup>
import { ref } from "vue";
import { TMessage } from "@t-ui/components";

const handleMessage = (type, message) => {
  TMessage({
    type,
    message: message,
    showClose: true,
  });
};
</script>
