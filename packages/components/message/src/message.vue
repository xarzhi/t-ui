<template>
  <div :class="`t-message__${type} t-message`">
    <i :class="`iconfont iconfont_type icon-${MESSAGE_ICON_NAME[type]}`"></i>
    <span class="t-message__text">{{ message }}</span>
    <span class="t-message_close_icon" v-if="showClose" @click="close">
      <i class="iconfont icon-close"></i>
    </span>
  </div>
</template>

<script setup>
import { Props } from "./message";
import { getCurrentInstance } from "vue";

defineProps(Props);
const emit = defineEmits(["close"]);

const MESSAGE_ICON_NAME = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
};

const instance = getCurrentInstance();

const close = () => {
  emit("close", instance.vnode.el.parentElement);
};
</script>
