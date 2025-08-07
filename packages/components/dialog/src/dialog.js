export const Props = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "标题",
  },
  width: {
    type: String || Number,
    default: "50%",
  },
  beforeClose: {
    type: Function,
  },
};
