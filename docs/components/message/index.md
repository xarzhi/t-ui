<script setup>
import Type from './type.vue'
import ShowClose from './showClose.vue'
import Delay from './delay.vue'

</script>
<style>
button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

# Message 消息提示

## 消息类型
<preview comp-name="message" demo-name="type">
  <Type/>
</preview>


## 显示关闭按钮
<preview comp-name="message" demo-name="showClose">
  <ShowClose/>
</preview>

## 自定义延长时间
单位为s，默认3s
<preview comp-name="message" demo-name="delay">
  <Delay/>
</preview>

