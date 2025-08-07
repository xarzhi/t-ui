<template>
  <teleport to="#p-popper-container">
    <transition name="fade">
      <div class="p-mask" v-show="showDialog"></div>
    </transition>
    <transition name="scale">
      <div
        class="p-dialog"
        v-show="showDialog"
        :style="{
          width:
            width.includes('%') || width.includes('px') ? width : width + 'px',
        }"
      >
        <div class="p-dialog__header">
          <slot name="title">
            {{ title }}
          </slot>
          <div class="p-dialog__close" @click="handleClose()">
            <i class="p-icon icon-close-bold"></i>
          </div>
        </div>
        <div class="p-dialog__content">
          <slot />
        </div>
        <div class="p-dialog__footer">
          <slot name="footer">
            <div class="p-dialog__footer_btn_group">
              <t-button
                type="primary"
                size="small"
                @click="handleClose()"
                style="margin-right: 10px"
              >
                取消
              </t-button>
              <t-button type="primary" size="small" @click="handleOK">
                确认
              </t-button>
            </div>
          </slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup>
import { ref, watch } from "vue";
import { Props } from "./dialog";
// import TButton from "../../button";
defineOptions({
  name: "t-dialog",
});
const props = defineProps(Props);
const emit = defineEmits(["ok", "update:modelValue"]);

const showDialog = ref(false);
const isOK = ref(false);

const closeDialog = () => {
  emit("update:modelValue", false);
  isOK.value && emit("ok");
  isOK.value = false;
};

const handleClose = () => {
  if (props.beforeClose && props.beforeClose instanceof Function) {
    props.beforeClose(closeDialog);
  } else {
    closeDialog();
  }
};

const handleOK = () => {
  isOK.value = true;
  handleClose();
};

watch(
  () => props.modelValue,
  (newValue) => {
    showDialog.value = newValue;
    // 处理滚动条
    if (!showDialog.value) {
      document.body.style = {};
    } else {
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
      document.body.style.width = "calc(100% - 15px)";
    }
  }
);
</script>
