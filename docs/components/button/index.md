<script setup>
import Type from './type.vue'
import Size from './size.vue'
import Ghost from './ghost.vue'
import Disabled from './disabled.vue'
import Round from './round.vue'
import Loading from './loading.vue'
</script>
<style>
button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

# Button 按钮

## 按钮类型 type

<preview comp-name="button" demo-name="type">
  <Type/>
</preview>

## 按钮尺寸 size

<preview comp-name="button" demo-name="size">
  <Size/>
</preview>

## 幽灵按钮 ghost

<preview comp-name="button" demo-name="ghost">
  <Ghost/>
</preview>

## 禁用状态 disabled

<preview comp-name="button" demo-name="disabled">
  <Disabled/>
</preview>

## 更圆的圆角 round

<preview comp-name="button" demo-name="round">
  <Round/>
</preview>

## 加载按钮 loading

<preview comp-name="button" demo-name="loading">
  <Loading/>
</preview>
