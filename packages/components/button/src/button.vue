<template>
  <button
    :class="[
      't-button',
      `t-button__${type}`,
      `${size && 't-button--' + size}`,
      `${shape && 't-button-shape-' + shape}`,
      { is_ghost: ghost },
      { is_loading: loading },
      { is_dashed: ghost ? dashed : false },
    ]"
    :disabled="disabled"
    @click="handleClick($event)"
  >
    <!-- <i v-if="loading" :class="['iconfont', `icon-loading`, 'loading']"></i> -->
    <span class="loading_box" v-if="loading">
      <span class="loading"></span>
    </span>
    <span class="t-button__inner">
      <i v-if="icon" :class="['iconfont', `icon-${icon}`]"></i>
      <span v-if="$slots.default">
        <slot />
      </span>
    </span>
  </button>
</template>

<script setup>
import { ButtonProps } from "./button";

defineOptions({
  name: "t-button",
});

defineProps(ButtonProps);
// 添加点击特效
const handleClick = (e) => {
  const target = e.currentTarget;
  const style = getComputedStyle(target);
  const borderColor = style.borderColor;
  const [r, g, b] = borderColor.split("(")[1].split(")")[0].split(",");

  const keyframs = new KeyframeEffect(
    target,
    [
      {
        boxShadow: `0 0 0 0 rgba(${r},${g},${b},0.3)`,
      },
      {
        boxShadow: `0 0 0px 8px rgba(${r},${g},${b},0)`,
      },
    ],
    {
      duration: 250,
    }
  );

  const ani = new Animation(keyframs);

  ani.play();
};
</script>
