# Alert 警告

警告。

## 类型

:::demo
```vue
<template>
    <AmAlert type="info">这是一条默认信息</AmAlert>
    <AmAlert type="warning">这是一条警告信息</AmAlert>
    <AmAlert type="success">这是一条成功信息</AmAlert>
    <AmAlert type="fail">这是一条失败信息</AmAlert>
</template>
```
:::

## 尺寸、显示图标、显示关闭按钮

:::demo
```vue
<template>
    <AmAlert type="info" size="middle">这是一条默认信息</AmAlert>
    <AmAlert type="warning" show-icon>这是一条警告信息</AmAlert>
    <AmAlert type="success" show-close>这是一条成功信息</AmAlert>
    <AmAlert type="fail" size="mini">这是一条失败信息</AmAlert>
</template>

<style>
.am-alert {
    margin-right: 16px;
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
