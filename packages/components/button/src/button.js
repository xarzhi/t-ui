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

export const ButtonProps = {
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
