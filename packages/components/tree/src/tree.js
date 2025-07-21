export const TreeProps = {
  data: {
    type: Array,
    default: () => [],
  },
  // 节点的唯一标识
  nodeKey: {
    type: String,
    default: "id",
  },
};

export const TreeNodeEmit = ["handleClickNode"];
