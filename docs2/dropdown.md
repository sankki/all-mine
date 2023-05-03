# Dropdown 下拉框

下拉框。

## 输入框

:::demo
```vue
<template>
    <AmDropdown class="aa">
        <template v-slot:trigger>
            大
        </template>
        <div class="bb">

        </div>
    </AmDropdown>
</template>


<script setup>
import { ref } from 'vue';
const value = ref('');
</script>

<style>
.aa {
    width: 100px;
}
.bb {
    width: 200px;
    height: 200px;
}
</style>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| placeholder | 默认内容 | string | |  |
| type | 类型 | string |  | input |
| autosize | 是否自动增高 | boolean |  | true |
