# Tab 选项卡

常用的操作按钮。

## 用法

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmTab :tabs="tabs" v-model:value="nowTab"></AmTab>
    <br />

    <AmTab :tabs="tabs" v-model:value="nowTab" mode="line"></AmTab>
</template>


<script setup>
import { ref, inject } from 'vue';
const tabs = ref([
    {
        label: '全部',
        value: 1,
    },
    {
        label: '技术教程',
        value: 2,
    },
    {
        label: '学习课程',
        value: 3,
    },
    {
        label: '产品运营',
        value: 4,
    },
]);
const nowTab = ref(1);

</script>
```
:::

## 暗色模式

:::demo
```vue
<template>
    <div style="background: #000;padding: 16px;">
        <AmTab 
            :tabs="tabs" 
            v-model:value="nowTab"
            scene="dark"    
        ></AmTab>
        <br />

        <AmTab 
            :tabs="tabs" 
            v-model:value="nowTab" 
            mode="line" 
            scene="dark"
        ></AmTab>
    </div>
</template>


<script setup>
import { ref, inject } from 'vue';
const tabs = ref([
    {
        label: '全部',
        value: 1,
    },
    {
        label: '技术教程',
        value: 2,
    },
    {
        label: '学习课程',
        value: 3,
    },
    {
        label: '产品运营',
        value: 4,
    },
]);
const nowTab = ref(1);

</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| label | 选项值 | any |  |  |
| disabled | 禁用 | boolean |  | false |
