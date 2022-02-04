# Loading 加载

常用的操作按钮。

## 文本框

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmButton @click="handleClick">加载</AmButton>
</template>


<script setup>
import { ref, inject } from 'vue';
const $loading = inject('$loading');
const handleClick = async () => {
    $loading.show({});
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
    await $loading.close();
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
