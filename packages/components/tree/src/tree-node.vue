<template>
  <div class="t-tree-node">
    <div class="t-tree-node__content">
      <span class="t-tree-node__label">{{ node.label }}</span>
    </div>
    <!-- children -->
    <div class="t-tree-node__children">
      <t-tree-node v-for="child in node.children" :key="child.id" :node="child" />
    </div>
  </div>
</template>

<script setup>
import { TreeNodeProps } from "./tree-node";

const props = defineProps(TreeNodeProps);

defineOptions({
  name: "t-tree-node",
});
</script>
