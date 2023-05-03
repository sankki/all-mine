# Message 消息

常用的操作按钮。

## 文本框

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmButton @click="handleClick">消息</AmButton>
</template>

<script setup>
import { ref, inject } from 'vue';
const $dialog = inject('$dialog');
const handleClick = async () => {
    await $dialog({
        content: '确定删除吗',
    });
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
