# List 列表

头像。

## 输入框

:::demo
```vue
<template>
    <AmList>
        <AmListItem>📗 学术演讲</AmListItem>
        <AmListItem :selected="true">💻 运营计划</AmListItem>
        <AmListItem>🎀 产品策划</AmListItem>
        <AmListItem>💎 商业报告</AmListItem>
    </AmList>
</template>


<script setup>
import { ref } from 'vue';
const value = ref('');
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
