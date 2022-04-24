# Button 按钮

按钮组件。

## 模式

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
  <div style="margin-bottom:16px;">
    <AmButton>默认按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="primary">主题色按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="plain">描边按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="text">文本按钮</AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="primary-text">主题色文本按钮</AmButton>
  </div>
  <div>
    <AmButton icon="close" sharp="square"></AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="primary" icon="close" sharp="square"></AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="plain" icon="close" sharp="square"></AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="text" icon="close" sharp="square"></AmButton>
    <AmDivider margin="8px"/>
    <AmButton icon="close" sharp="square" size="small"></AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="primary" icon="close" sharp="square" size="small"></AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="plain" icon="close" sharp="square" size="small"></AmButton>
    <AmDivider margin="8px"/>
    <AmButton mode="text" icon="close" sharp="square" size="small"></AmButton>

  </div>
</template>
```

:::

## 尺寸

提供三种不同尺寸的按钮。

:::demo

```vue
<template>
  <AmButton size="large">大按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton>按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton size="small">小按钮</AmButton>
  <AmDivider margin="8px"/>
  <AmButton size="mini">迷你按钮</AmButton>
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

## 功能按钮

点击按钮进行数据加载操作，在按钮上面显示加载状态。

:::demo

```vue
<template>
  <AmButton mode="primary" function="confirm">确认</AmButton>
  <AmDivider margin="8px"/>
  <AmButton mode="primary" function="cancel">删除</AmButton>
  <AmDivider margin="8px"/>
  <AmButton mode="plain" function="confirm">确认</AmButton>
  <AmDivider margin="8px"/>
  <AmButton mode="plain" function="cancel">删除</AmButton>
</template>
```
:::

## 暗色模式

:::demo

```vue
<template>
  <div style="background: #000;padding: 16px;">
    <div style="margin-bottom:16px;">
      <AmButton scene="dark">默认按钮</AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="primary" scene="dark">主题色按钮</AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="plain" scene="dark">描边按钮</AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="text" scene="dark">文本按钮</AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="primary-text" scene="dark">文本按钮</AmButton>
    </div>
    <div style="margin-bottom:16px;">
      <AmButton icon="close" sharp="square" scene="dark"></AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="primary" icon="close" sharp="square" scene="dark"></AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="plain" icon="close" sharp="square" scene="dark"></AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="text" icon="close" sharp="square" scene="dark"></AmButton>
      <AmDivider margin="8px"/>
      <AmButton icon="close" sharp="square" size="small" scene="dark"></AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="primary" icon="close" sharp="square" size="small" scene="dark"></AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="plain" icon="close" sharp="square" size="small" scene="dark"></AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="text" icon="close" sharp="square" size="small" scene="dark"></AmButton>
    </div>
    <div>
      <AmButton mode="primary" function="confirm" scene="dark">确认</AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="primary" function="cancel" scene="dark">删除</AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="plain" function="confirm" scene="dark">确认</AmButton>
      <AmDivider margin="8px"/>
      <AmButton mode="plain" function="cancel" scene="dark">删除</AmButton>
    </div>
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
