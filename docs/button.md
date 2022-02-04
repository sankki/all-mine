# Button 按钮

按钮组件。

## 模式

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
  <AmButton>默认按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton mode="primary">主题色按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton mode="plain">描边按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton mode="text">文本按钮</AmButton>
</template>
```

:::

## 尺寸

提供三种不同尺寸的按钮。

:::demo

```vue
<template>
  <AmButton size="large">默认按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton>主题色按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton size="small">描边按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton size="mini">文本按钮</AmButton>
</template>
```

:::

## 形状

点击按钮进行数据加载操作，在按钮上面显示加载状态。

:::demo

```vue
<template>
  <AmButton>长方形</AmButton>
  <AmDivider margin="8px"/>
  <AmButton sharp="round">圆角</AmButton>
  <AmDivider margin="8px"/>
  <AmButton sharp="circle">2</AmButton>
  <AmDivider margin="8px"/>
  <AmButton sharp="square">1</AmButton>
</template>
```
:::

## 环境色

按钮在黑白环境色下的表现是不一致的。

:::demo

```vue
<template>
  <div style="background: #fff;padding: 16px;">
    <AmButton>默认按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="primary">主题色按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="plain">描边按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="text">文本按钮</AmButton>
  </div>

  <div style="background: #000;padding: 16px;">
    <AmButton scene="dark">默认按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton scene="dark" mode="primary">主题色按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton scene="dark" mode="plain">描边按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton scene="dark" mode="text">文本按钮</AmButton>
  </div>
</template>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | string | large / medium / small / mini | medium |
| mode | 模式 | string | default / primary / plain / text | default |
| sharp | 形状 | string | rectangle / square /      round / circle | rectangle |
| scene | 场景 | string | light / dark | light |
