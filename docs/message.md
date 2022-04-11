# Message 消息

常用的操作按钮。

## 文本框

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmButton @click="handleClick1">成功</AmButton>
    <AmButton @click="handleClick2">失败</AmButton>
    <AmButton @click="handleClick3">警告</AmButton>
    <AmButton @click="handleClick4">消息</AmButton>
</template>


<script setup>
import { ref, inject } from 'vue';
const $message = inject('$message');
const handleClick1 = () => {
    $message.success('成功');
}
const handleClick2 = () => {
    $message.fail('失败');
}
const handleClick3 = () => {
    $message.warning('警告');
}
const handleClick4 = () => {
    $message.info('消息');
}
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| label | 选项值 | any |  |  |
| disabled | 禁用 | boolean |  | false |
