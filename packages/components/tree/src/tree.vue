<template>
  <div class="t_tree">
    <t-tree-node v-for="node in props.data" :key="item.id" :node="node" />
  </div>
</template>

<script setup>
import { TreeProps } from "./tree";
import treeNode from "./tree-node.vue";

const props = defineProps(TreeProps);
defineOptions({
  name: "t-tree",
});
</script>

作者：outsider_友人A
链接：https://juejin.cn/post/7456622492482109478
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。