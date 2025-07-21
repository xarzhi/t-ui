<template>
  <div class="t-tree">
    <t-tree-node
      v-for="node in data"
      :key="node.id"
      :node="node"
      @handleClickNode="emit('handleClickNode', $event)"
    ></t-tree-node>
  </div>
</template>

<script setup>
import { TreeProps, TreeNodeEmit } from "./tree";
import tTreeNode from "./tree-node.vue";

const props = defineProps(TreeProps);
const emit = defineEmits(TreeNodeEmit);

defineOptions({
  name: "t-tree",
});
</script>
