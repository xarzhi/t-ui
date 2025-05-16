<template>
  <div>
    <t-button
      type="success"
      @click="handleMessage('success', '缓缓飘落的枫叶像思念')"
      >success</t-button
    >
    <t-button
      type="info"
      @click="handleMessage('info', '为何挽回要赶在冬天来之前')"
      >info</t-button
    >
    <t-button type="warning" @click="handleMessage('warning', '爱你穿越时间')"
      >warning</t-button
    >
    <t-button
      type="danger"
      @click="handleMessage('error', '两行来自秋末的眼泪')"
      >error</t-button
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
  });
};
</script>
