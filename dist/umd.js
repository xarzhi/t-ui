(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TUI = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

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

  const _hoisted_1$1 = ["disabled"];
  const _hoisted_2 = {
    key: 0,
    class: "loading_box"
  };
  const _hoisted_3 = { class: "t-button__inner" };
  const _hoisted_4 = { key: 1 };


  var script$1 = /*@__PURE__*/Object.assign({
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
    return (vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass([
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
      vue.createCommentVNode(" <i v-if=\"loading\" :class=\"['iconfont', `icon-loading`, 'loading']\"></i> "),
      (_ctx.loading)
        ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, _cache[1] || (_cache[1] = [
            vue.createElementVNode("span", { class: "loading" }, null, -1 /* CACHED */)
          ])))
        : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("span", _hoisted_3, [
        (_ctx.icon)
          ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass(['iconfont', `icon-${_ctx.icon}`])
            }, null, 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true),
        (_ctx.$slots.default)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, [
              vue.renderSlot(_ctx.$slots, "default")
            ]))
          : vue.createCommentVNode("v-if", true)
      ])
    ], 10 /* CLASS, PROPS */, _hoisted_1$1))
  }
  }

  });

  script$1.__file = "packages/components/button/src/button.vue";

  script$1.install = (app) => {
    app.component(script$1.name, script$1);
  };
  const TButton = script$1;

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

  const _hoisted_1 = { class: "t-message__text" };


  var script = {
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

  const instance = vue.getCurrentInstance();

  const close = () => {
    emit("close", instance.vnode.el.parentElement);
  };

  return (_ctx, _cache) => {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(`t-message__${_ctx.type} t-message`)
    }, [
      vue.createElementVNode("i", {
        class: vue.normalizeClass(`iconfont iconfont_type icon-${MESSAGE_ICON_NAME[_ctx.type]}`)
      }, null, 2 /* CLASS */),
      vue.createElementVNode("span", _hoisted_1, vue.toDisplayString(_ctx.message), 1 /* TEXT */),
      (_ctx.showClose)
        ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: "t-message_close_icon",
            onClick: close
          }, _cache[0] || (_cache[0] = [
            vue.createElementVNode("i", { class: "iconfont icon-close" }, null, -1 /* CACHED */)
          ])))
        : vue.createCommentVNode("v-if", true)
    ], 2 /* CLASS */))
  }
  }

  };

  script.__file = "packages/components/message/src/message.vue";

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
    const VNode = vue.h(script, {
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
    vue.render(VNode, container);
    setDestoryClock(container, config.delay);
  };

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TButton: TButton,
    TMessage: TMessage$1
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

  exports.TMessage = TMessage;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
