# Popup 弹出层

常用的操作按钮。

## 文本框

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmPopup
        width="480px"
        v-model:show="show"
        :title="title"
        @after-leave="afterLeave"
    >
        123
    </AmPopup>
</template>


<script setup>
import { ref, inject } from 'vue';
const $message = inject('$message');
const show = ref(false);
const handleClick = () => {
    $message.success('删除成功');
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
