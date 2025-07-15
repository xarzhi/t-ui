import Message from "./src/message.vue";
import { h, render } from "vue";
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

export const TMessage = (config) => {
  const VNode = h(Message, {
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

export default TMessage;
