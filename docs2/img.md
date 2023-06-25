# Img 图片组件
图标组件。

## 组件自带图标

:::demo
```vue
<template>
    <AmImg 
        style="width: 100%;"
        src="//cos.sankki.com/c/20230517174725/3d1.jpg?imageMogr2/thumbnail/400x2400>/format/webp"
    />
</template>


<script setup>
import { ref } from 'vue';
const value = ref('');
const changeInput = () => {
    console.log('change');
}
</script>
```
:::


## 拓展图标

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。

```vue
<template>
<AmIcon name="add" />
</template>

```

:::


## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 图标名 | string | add | add |
| size | 字号 | string |  | 14px |
| color | 颜色 | string |  | #333 |
