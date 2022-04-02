# Select 选择器

常用的操作按钮。

## 基本用法

:::demo
```vue
<template>
    <AmSelect
        class="dark-select"
        v-model:value="value"
    >
        <AmOption
            v-for="item in options"
            :item="item"
            :key="item.value"
            >{{ item.label }}</AmOption
        >
    </AmSelect>
</template>


<script setup>
import { ref } from 'vue';
const options = ref([{
    label: '选项一',
    value: 1,
},{
    label: '选项二',
    value: 2,
}]);
const value = ref(1);
</script>
```
:::

## 暗色模式

:::demo
```vue
<template>
    <div style="background: #000;padding: 16px;padding-bottom: 120px;">
        <AmSelect
            scene="dark"
            class="dark-select"
            v-model:value="value"
        >
            <AmOption
                v-for="item in options"
                :item="item"
                :key="item.value"
                >{{ item.label }}</AmOption
            >
        </AmSelect>
    </div>
</template>


<script setup>
import { ref } from 'vue';
const options = ref([{
    label: '选项一',
    value: 1,
},{
    label: '选项二',
    value: 2,
}]);
const value = ref(1);
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| label | 选项值 | any |  |  |
| disabled | 禁用 | boolean |  | false |
