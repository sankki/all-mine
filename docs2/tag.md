# Tag 标签

## 模式

基础的按钮用法。

:::demo
```vue
<template>
    <div style="margin-bottom: 16px">
        <AmTag>默认</AmTag><AmDivider />
        <AmTag color="primary" mode="fill">主色</AmTag><AmDivider />
        <AmTag color="primary" mode="plain">主色</AmTag>
    </div>
    <div style="margin-bottom: 16px">
        <AmTag mode="fill" color="red">红色</AmTag><AmDivider />
        <AmTag mode="fill" color="orange">橙色</AmTag><AmDivider />
        <AmTag mode="fill" color="yellow">黄色</AmTag><AmDivider />
        <AmTag mode="fill" color="green">绿色</AmTag><AmDivider />
        <AmTag mode="fill" color="blue">蓝色</AmTag><AmDivider />
        <AmTag mode="fill" color="purple">紫色</AmTag><AmDivider />
        <AmTag mode="fill" color="pink">粉色</AmTag><AmDivider />
        <AmTag mode="fill" color="#f32">#f32</AmTag>
    </div>
    <div>
        <AmTag mode="plain" color="red">红色</AmTag><AmDivider />
        <AmTag mode="plain" color="orange">橙色</AmTag><AmDivider />
        <AmTag mode="plain" color="yellow">黄色</AmTag><AmDivider />
        <AmTag mode="plain" color="green">绿色</AmTag><AmDivider />
        <AmTag mode="plain" color="blue">蓝色</AmTag><AmDivider />
        <AmTag mode="plain" color="purple">紫色</AmTag><AmDivider />
        <AmTag mode="plain" color="pink">粉色</AmTag><AmDivider />
        <AmTag mode="plain" color="#f32">#f32</AmTag>
    </div>
</template>
```
:::

## 尺寸

基础的按钮用法。

:::demo
```vue
<template>
    <AmTag size="large">大标签</AmTag>
    <AmDivider />
    <AmTag>标签</AmTag>
    <AmDivider />
    <AmTag size="small">小标签</AmTag>
    <AmDivider />
    <AmTag size="mini">迷你</AmTag>
</template>
```
:::

## 暗色模式

:::demo
```vue
<template>
    <div style="background: #000;padding: 16px;">
        <div style="margin-bottom: 16px">
            <AmTag scene="dark">默认</AmTag><AmDivider />
            <AmTag scene="dark" color="primary" mode="fill">主色</AmTag><AmDivider />
            <AmTag scene="dark" color="primary" mode="plain">主色</AmTag>
        </div>
        <div style="margin-bottom: 16px">
            <AmTag scene="dark" mode="fill" color="red">红色</AmTag><AmDivider />
            <AmTag scene="dark" mode="fill" color="orange">橙色</AmTag><AmDivider />
            <AmTag scene="dark" mode="fill" color="yellow">黄色</AmTag><AmDivider />
            <AmTag scene="dark" mode="fill" color="green">绿色</AmTag><AmDivider />
            <AmTag scene="dark" mode="fill" color="blue">蓝色</AmTag><AmDivider />
            <AmTag scene="dark" mode="fill" color="purple">紫色</AmTag><AmDivider />
            <AmTag scene="dark" mode="fill" color="pink">粉色</AmTag><AmDivider />
            <AmTag scene="dark" mode="fill" color="#f32">#f32</AmTag>
        </div>
        <div>
            <AmTag scene="dark" mode="plain" color="red">红色</AmTag><AmDivider />
            <AmTag scene="dark" mode="plain" color="orange">橙色</AmTag><AmDivider />
            <AmTag scene="dark" mode="plain" color="yellow">黄色</AmTag><AmDivider />
            <AmTag scene="dark" mode="plain" color="green">绿色</AmTag><AmDivider />
            <AmTag scene="dark" mode="plain" color="blue">蓝色</AmTag><AmDivider />
            <AmTag scene="dark" mode="plain" color="purple">紫色</AmTag><AmDivider />
            <AmTag scene="dark" mode="plain" color="pink">粉色</AmTag><AmDivider />
            <AmTag scene="dark" mode="plain" color="#f32">#f32</AmTag>
        </div>
    <div>
</template>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| label | 选项值 | any |  |  |
| disabled | 禁用 | boolean |  | false |
