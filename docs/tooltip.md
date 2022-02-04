# Tooltip 提示

提示。

## 方向

:::demo
```vue
<template>
    <AmTooltip
        content="将文本转换为PPT"
        direction="bottom"
        margin="6px 0 0 0"
    >
        <AmButton
            size="small"
        >解析</AmButton>
    </AmTooltip>
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
| placeholder | 默认内容 | string | default / primary / plain / text |  |
| type | 类型 | string | text / textarea | text |
| autosize | 是否自动增高 | boolean |  | true |
