# Img-viewer 图片预览
图标组件。

## 组件自带图标

[图标库地址](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.17&manage_type=myprojects&projectId=1954226&keyword=&project_type=&page=)

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmButton @click="clickBtn">展示图片</AmButton>
</template>

<script setup>
import { ref, inject } from 'vue';
const $viewer = inject('$viewer');
const clickBtn = () => {
    $viewer.show({
        imgs: [{
            url: '//cos.sankki.com/c/20230517174725/3d1.jpg',
        }],
        index: 0,
    })
}
</script>

<style>
.am-icon {
    /* font-size: 24px!important; */
}
</style>
```
:::

## 拓展图标

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<AmIcon name="add" />
```
:::


## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 图标名 | string | add | add |
| size | 字号 | string |  | 14px |
| color | 颜色 | string |  | #333 |
