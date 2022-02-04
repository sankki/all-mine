# Input 输入框

输入框、文本框。

## 输入框

:::demo
```vue
<template>
    <AmInput v-model:value="value" />
</template>


<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```
:::

## 文本框

文本框、可自动增高。

:::demo
```vue
<template>
    <AmInput
        type="textarea"
        v-model:value="value"
    />
</template>


<script setup>
import { ref } from 'vue';
const value = ref(`hello
xux!`);
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| placeholder | 默认内容 | string | |  |
| type | 类型 | string |  | input |
| autosize | 是否自动增高 | boolean |  | true |
