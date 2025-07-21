<template>
  <div class="t-tree-node">
    <div
      class="t-tree-node__content"
      @click.stop="handleClickNode($event, node)"
    >
      <div
        class="iconfont icon-xiangyousanjiaoxing triangle"
        :style="{
          visibility:
            node.children && node.children.length ? 'visible' : 'hidden',
          transform: showChild ? 'rotate(90deg)' : 'rotate(0deg)',
        }"
      ></div>
      <div
        :class="`p-tree-node__checkbox ${getCheckStatus}`"
        v-if="props.showCheckbox"
        @click.stop="handleCheckStatus(node)"
      ></div>
      <div class="t-tree-node__label">
        {{ node.label }}
      </div>
    </div>
    <div class="t-tree-node__children" v-if="showChild">
      <t-tree-node
        v-for="child in node.children"
        :key="child[props.nodeKey]"
        :node="child"
        :node-key="props.nodeKey"
        :showCheckbox="showCheckbox"
        @handleClickNode="emit('handleClickNode', $event)"
        @handleCheckStatus="emit('handleCheckStatus', $event)"
      >
      </t-tree-node>
    </div>
  </div>
</template>

<script setup>
import { TreeNodeProps, TreeNodeEmit } from "./tree-node";

import { ref, computed } from "vue";
const props = defineProps(TreeNodeProps);
const emit = defineEmits(TreeNodeEmit);

const showChild = ref(props.defaultExpandAll);

defineOptions({
  name: "t-tree-node",
});

const getCheckStatus = computed(() => {
  let checkType = "";
  if (props.node.isChecked) {
    checkType = "all";
  } else if (
    props.node.children &&
    props.node.children.every((item) => item.isChecked === true)
  ) {
    checkType = "all";
  } else if (
    props.node.children &&
    props.node.children.some((item) => item.isChecked === true)
  ) {
    checkType = "some";
  } else {
    checkType = "none";
  }
  return checkType;
});

const handleCheckStatus = (node) => {
  emit("handleCheckStatus", node);
};

const handleClickNode = (e, node) => {
  showChild.value = !showChild.value;
  emit("handleClickNode", {
    ...node,
    $event: e,
  });
};
</script>
