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

## 多选

:::demo
```vue
<template>
    <AmSelect
        class="dark-select"
        v-model:value="value"
        multiple
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
    label: '产品策划选项1',
    value: 1,
},{
    label: '产品策划选项2',
    value: 2,
}, {
    label: '选项3',
    value: 3,
},{
    label: '产品策划选项4',
    value: 4,
},{
    label: '产品策划选项5',
    value: 5,
},{
    label: '产品策划选项6',
    value: 6,
},{
    label: '产品策划选项7',
    value: 7,
},{
    label: '产品策划选项8',
    value: 8,
}, {
    label: '选项9',
    value: 9,
},{
    label: '选项10',
    value: 10,
},{
    label: '产品策划选项11',
    value: 11,
},{
    label: '选项12',
    value: 12,
}]);
const value = ref([]);
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
