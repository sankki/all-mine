# Icon 图标
图标组件。

## 组件自带图标

[图标库地址](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.17&manage_type=myprojects&projectId=1954226&keyword=&project_type=&page=)

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmIcon name="left" />
    <AmIcon name="right" />
    <AmIcon name="up" />
    <AmIcon name="down" />
    <AmIcon name="caret-left" />
    <AmIcon name="caret-right" />
    <AmIcon name="caret-up" />
    <AmIcon name="caret-down" />
    <AmIcon name="info" />
    <AmIcon name="success" />
    <AmIcon name="error" />
    <AmIcon name="help" />
    <AmIcon name="info-fill" />
    <AmIcon name="success-fill" />
    <AmIcon name="error-fill" />
    <AmIcon name="help-fill" />
    <AmIcon name="check" />
    <AmIcon name="check-2" />
    <AmIcon name="close" />
    <AmIcon name="search" />
</template>

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
