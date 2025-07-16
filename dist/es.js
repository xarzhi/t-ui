import { createElementBlock, openBlock, normalizeClass, createCommentVNode, createElementVNode, renderSlot, getCurrentInstance, toDisplayString, h, render, ref, computed, resolveComponent, withDirectives, withModifiers, normalizeStyle, Fragment, renderList, createBlock, vShow, watch, mergeProps } from 'vue';

const BUTTON_TYPE = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
];
const BUTTON_SIZE = ["large", "small", "middle"];
const BUTTON_SHAPE = ["default", "round", "circle"];

const ButtonProps = {
  // 类型
  type: {
    type: String,
    default: "default",
    validator(value) {
      return BUTTON_TYPE.includes(value);
    },
  },
  // 尺寸
  size: {
    type: String,
    default: "middle",
    validator(value) {
      return BUTTON_SIZE.includes(value);
    },
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 幽灵按钮，背景是否透明
  ghost: {
    type: Boolean,
    default: false,
  },
  // 虚线边框
  dashed: {
    type: Boolean,
    default: false,
  },
  // 图标
  icon: {
    type: String,
    default: "",
  },
  // 加载中
  loading: {
    type: Boolean,
    default: false,
  },
  // 圆角
  shape: {
    type: String,
    default: "default",
    validator(value) {
      return BUTTON_SHAPE.includes(value);
    },
  },
};

const _hoisted_1$3 = ["disabled"];
const _hoisted_2$1 = {
  key: 0,
  class: "loading_box"
};
const _hoisted_3$1 = { class: "t-button__inner" };
const _hoisted_4 = { key: 1 };


var script$3 = /*@__PURE__*/Object.assign({
  name: "t-button",
}, {
  __name: 'button',
  props: ButtonProps,
  setup(__props) {




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

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass([
      't-button',
      `t-button__${_ctx.type}`,
      `${_ctx.size && 't-button--' + _ctx.size}`,
      `${_ctx.shape && 't-button-shape-' + _ctx.shape}`,
      { is_ghost: _ctx.ghost },
      { is_loading: _ctx.loading },
      { is_dashed: _ctx.ghost ? _ctx.dashed : false },
    ]),
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = $event => (handleClick($event)))
  }, [
    createCommentVNode(" <i v-if=\"loading\" :class=\"['iconfont', `icon-loading`, 'loading']\"></i> "),
    (_ctx.loading)
      ? (openBlock(), createElementBlock("span", _hoisted_2$1, _cache[1] || (_cache[1] = [
          createElementVNode("span", { class: "loading" }, null, -1 /* CACHED */)
        ])))
      : createCommentVNode("v-if", true),
    createElementVNode("span", _hoisted_3$1, [
      (_ctx.icon)
        ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(['iconfont', `icon-${_ctx.icon}`])
          }, null, 2 /* CLASS */))
        : createCommentVNode("v-if", true),
      (_ctx.$slots.default)
        ? (openBlock(), createElementBlock("span", _hoisted_4, [
            renderSlot(_ctx.$slots, "default")
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1$3))
}
}

});

script$3.__file = "packages/components/button/src/button.vue";

script$3.install = (app) => {
  app.component(script$3.name, script$3);
};
const TButton = script$3;

const MESSAGE_TYPE = ["success", "info", "warning", "error"];

const Props = {
  type: {
    type: String,
    default: "",
    validator(value) {
      return MESSAGE_TYPE.includes(value);
    },
  },
  message: {
    type: String,
    default: "",
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  delay: {
    type: Number,
    default: 3,
  },
};

const _hoisted_1$2 = { class: "t-message__text" };


var script$2 = {
  __name: 'message',
  props: Props,
  emits: ["close"],
  setup(__props, { emit: __emit }) {


const emit = __emit;

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

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(`t-message__${_ctx.type} t-message`)
  }, [
    createElementVNode("i", {
      class: normalizeClass(`iconfont iconfont_type icon-${MESSAGE_ICON_NAME[_ctx.type]}`)
    }, null, 2 /* CLASS */),
    createElementVNode("span", _hoisted_1$2, toDisplayString(_ctx.message), 1 /* TEXT */),
    (_ctx.showClose)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "t-message_close_icon",
          onClick: close
        }, _cache[0] || (_cache[0] = [
          createElementVNode("i", { class: "iconfont icon-close" }, null, -1 /* CACHED */)
        ])))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
}

};

script$2.__file = "packages/components/message/src/message.vue";

let messageInstaceList = [];

const MESSAGE_START_TOP = 56; // 起始的高度
const MESSAGE_HEIGHT = 44; // 组件高度
const MESSAGE_GAP = 16; // 间隔高度

const setDestoryClock = (element, time = 3) => {
  let intTime = time * 1000;
  let timer = setTimeout(() => {
    destoryMessageElement(element);
    clearTimeout(timer);
    timer = null;
  }, intTime);
};

const destoryMessageElement = (element) => {
  if (!element.parentElement?.contains(element)) return;
  element.parentElement?.removeChild(element);
  messageInstaceList = messageInstaceList.filter((item) => item !== element);
  messageInstaceList.forEach((item, index) => {
    item.style.top =
      MESSAGE_START_TOP + index * (MESSAGE_HEIGHT + MESSAGE_GAP) + "px";
  });
};

const TMessage$1 = (config) => {
  const VNode = h(script$2, {
    ...config,
    onClose(element) {
      destoryMessageElement(element); // 关闭时销毁
    },
  });
  const container = document.createElement("div");
  container.setAttribute("class", "t-message-container");
  document.body.append(container);
  messageInstaceList.push(container);
  container.style.top =
    MESSAGE_START_TOP +
    (messageInstaceList.length - 1) * (MESSAGE_HEIGHT + MESSAGE_GAP) +
    "px";
  render(VNode, container);
  setDestoryClock(container, config.delay);
};

const TreeProps = {
  // 数据
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

const TreeNodeEmits$1 = ["handleClickNode"];

const TreeNodeProps = {
  node: {
    type: Object,
    default: () => ({
      id: "",
      label: "",
      showChild: false,
      children: [],
    }),
  },
  // 是否显示可选择
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  // 节点的唯一标识
  nodeKey: {
    type: String,
    default: "id",
  },
  // 是否默认展开
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
};

const TreeNodeEmits = ["handleClickNode", "changeCheckStatus"];

const _hoisted_1$1 = { class: "t-tree-node" };
const _hoisted_2 = { class: "t-tree-node__label" };
const _hoisted_3 = { class: "t-tree-node__children" };


var script$1 = /*@__PURE__*/Object.assign({
  name: "t-tree-node",
}, {
  __name: 'tree-node',
  props: TreeNodeProps,
  emits: TreeNodeEmits,
  setup(__props, { emit: __emit }) {

const props = __props;
const emit = __emit;



const showChild = ref(props.defaultExpandAll);

const handleClickNode = (e, node) => {
  emit("handleClickNode", {
    ...node,
    $event: e, // 这边是携带上原生的事件对象，方便外部使用
  });
};

const getCheckType = computed(() => {
  let checkType = "";
  if (props.node.isChecked) {
    checkType = "all";
  } else if (props.node.children && props.node.children.every((item) => item.isChecked === true)) {
    checkType = "all";
  } else if (props.node.children && props.node.children.some((item) => item.isChecked === true)) {
    checkType = "some";
  } else {
    checkType = "none";
  }
  return checkType;
});

const changeCheckStatus = (node) => {
  emit("changeCheckStatus", node);
};

return (_ctx, _cache) => {
  const _component_t_tree_node = resolveComponent("t-tree-node");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", {
      class: "t-tree-node__content",
      onClick: _cache[2] || (_cache[2] = $event => (handleClickNode($event, _ctx.node)))
    }, [
      createElementVNode("div", {
        class: "t-icon icon-arrow-right-filling",
        style: normalizeStyle({
          visibility: _ctx.node.children && _ctx.node.children.length ? 'visible' : 'hidden',
          transform: showChild.value ? 'rotateZ(90deg)' : '',
        }),
        onClick: _cache[0] || (_cache[0] = withModifiers($event => (showChild.value = !showChild.value), ["stop"]))
      }, null, 4 /* STYLE */),
      (props.showCheckbox)
        ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(`p-tree-node__checkbox ${getCheckType.value}`),
            onClick: _cache[1] || (_cache[1] = withModifiers($event => (changeCheckStatus(_ctx.node)), ["stop"]))
          }, null, 2 /* CLASS */))
        : createCommentVNode("v-if", true),
      createElementVNode("span", _hoisted_2, toDisplayString(_ctx.node.label), 1 /* TEXT */)
    ]),
    createCommentVNode(" children "),
    withDirectives(createElementVNode("div", _hoisted_3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.node.children, (child) => {
        return (openBlock(), createBlock(_component_t_tree_node, {
          key: child[props.nodeKey],
          node: child,
          "node-key": props.nodeKey,
          showCheckbox: _ctx.showCheckbox,
          onHandleClickNode: _cache[3] || (_cache[3] = $event => (emit('handleClickNode', $event))),
          onChangeCheckStatus: _cache[4] || (_cache[4] = $event => (emit('changeCheckStatus', $event)))
        }, null, 8 /* PROPS */, ["node", "node-key", "showCheckbox"]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 512 /* NEED_PATCH */), [
      [vShow, showChild.value]
    ])
  ]))
}
}

});

script$1.__file = "packages/components/tree/src/tree-node.vue";

const _hoisted_1 = { class: "t-tree" };


var script = /*@__PURE__*/Object.assign({
  name: "t-tree",
}, {
  __name: 'tree',
  props: TreeProps,
  emits: TreeNodeEmits$1,
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;
const emit = __emit;



const treeData = ref([]);

watch(
  () => props.data,
  (newValue) => {
    treeData.value = newValue;
  },
  { immediate: true }
);

const changeAllCheckStatus = (node) => {
  node.isChecked = !node.isChecked;
  if (node.children && node.children.length) {
    changeChildCheckStatus(node.children, node.isChecked); // 更改子级所有节点状态
  }
  changeParentCheckStatus(treeData.value, node[props.nodeKey]); // 更改父级所有节点状态
};

// 修改子级的选中状态
const changeChildCheckStatus = (children, isChecked) => {
  children.forEach((node) => {
    node.isChecked = isChecked;
    if (node.children && node.children.length) changeChildCheckStatus(node.children, isChecked);
  });
};

// 修改父级的选中状态
const changeParentCheckStatus = (children, id, parent) => {
  for (let item of children) {
    if (item[props.nodeKey] === id) {
      // 是否当前节点的所有子节点都选中
      const result = children.every((item) => item.isChecked === true);
      if (parent && parent.isChecked === result) {
        // 如果父级跟需要改变的结果一致，则不需要再往上找了
        break;
      } else if (parent && parent.isChecked !== result) {
        parent.isChecked = result;
        parent && changeParentCheckStatus(treeData.value, parent[props.nodeKey]);
      }
    } else if (item.children && item.children.length) {
      changeParentCheckStatus(item.children, id, item);
    }
  }
};

const changeCheckStatus = (node) => {
  findNode(treeData.value, node[props.nodeKey], changeAllCheckStatus);
};

const findNode = (data, id, handleFun) => {
  let obj = null;
  for (let item of data) {
    if (item[props.nodeKey] === id) {
      obj = item;
      handleFun(item);
      break;
    } else if (item.children && item.children.length) {
      const res = findNode(item.children, id, handleFun);
      if (res) obj = res;
    }
  }
  return obj;
};

const getCheckedNodes = () => {
  const checkedNodes = [];
  getChecked(treeData.value, checkedNodes);
  return checkedNodes.map((item) => item[props.nodeKey]);
};

const getChecked = (data, checkedNodes) => {
  for (let item of data) {
    if (item.isChecked) {
      checkedNodes.push(item);
    }
    if (item.children && item.children.length) {
      getChecked(item.children, checkedNodes);
    }
  }
};

const setCheckedNodes = (keys) => {
  setChecked(treeData.value, keys);
  keys.forEach((key) => {
    changeParentCheckStatus(treeData.value, key); // 更改父级所有节点状态
  });
};

const setChecked = (data, keys) => {
  for (let item of data) {
    if (keys.includes(item[props.nodeKey])) {
      item.isChecked = true;
    }
    if (item.children && item.children.length) {
      setChecked(item.children, keys);
    }
  }
};

__expose({
  getCheckedNodes,
  setCheckedNodes,
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(treeData.value, (node) => {
      return (openBlock(), createBlock(script$1, mergeProps({
        key: node[props.nodeKey],
        node: node
      }, { ref_for: true }, _ctx.$attrs, {
        onHandleClickNode: _cache[0] || (_cache[0] = $event => (emit('handleClickNode', $event))),
        onChangeCheckStatus: changeCheckStatus
      }), null, 16 /* FULL_PROPS */, ["node"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
}

});

script.__file = "packages/components/tree/src/tree.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const TTree = script;

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TButton: TButton,
  TMessage: TMessage$1,
  TTree: TTree
});

const FUNCTION_COMP = ["TMessage"];

var index = {
  install(app) {
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMP.includes(key)) app.component(key, value);
    });
  },
};

const TMessage = TMessage$1;

export { TMessage, index as default };
