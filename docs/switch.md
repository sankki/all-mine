# Switch 开关

## 基本使用

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmSwitch v-model:value="value">开关</AmSwitch>
</template>


<script setup>
import { ref } from 'vue';
const value = ref(true);
</script>
```
:::


## 暗色模式

:::demo
```vue
<template>
    <div style="background: #000;padding: 16px;">
        <AmSwitch scene="dark" v-model:value="value">开关</AmSwitch>
    </div>
</template>


<script setup>
import { ref } from 'vue';
const value = ref(false);
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| label | 选项值 | any |  |  |
| disabled | 禁用 | boolean |  | false |
