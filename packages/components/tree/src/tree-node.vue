<template>
  <div class="t-tree-node">
    <div class="t-tree-node__content" @click.stop="handleClickNode($event,node)">
      <div class="iconfont icon-xiangyousanjiaoxing triangle" :style="{
        visibility: node.children && node.children.length ? 'visible' : 'hidden',
        transform: showChild ? 'rotate(90deg)' : 'rotate(0deg)'
      }"></div>
      <div class="t-tree-node__label">
        {{ node.label }}
      </div>
    </div>
    <div class="t-tree-node__children" v-if="showChild">
    <!-- <div class="t-tree-node__children" :style="{
      height:showChild?'auto':'0px'
    }"> -->
      <t-tree-node v-for="node in node.children" :key="node.id" :node="node" @handleClickNode="emit('handleClickNode',$event)">
      </t-tree-node>
    </div>
  </div>
</template>

<script setup>
import { TreeNodeProps ,TreeNodeEmit} from './tree-node';

import {ref} from 'vue'
const props = defineProps(TreeNodeProps)
const emit = defineEmits(TreeNodeEmit)

const showChild=ref(false)

defineOptions({
  name: "t-tree-node",
});

const handleClickNode = (e,node) => {
  showChild.value = !showChild.value;
  emit('handleClickNode',{
    ...node,
    $event:e
  })
};



</script>
