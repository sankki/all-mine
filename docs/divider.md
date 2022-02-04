# Divider 分割线

分割线。

## 纵向线

:::demo
```vue
<template>
    <div style="display:flex;align-items:center;">
    苹果<AmDivider />西瓜<AmDivider show-line/>草莓<AmDivider icon="close"/>梨子<AmDivider content="&"/>桃子
    </div>
</template>
```

:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| content | 内容 | string |  |  |
| size | 字号 | string |  | 14px |
| margin | 间距 | string |  | 0 8px |
| icon | 图标 | string |  |  |
| color | 颜色 | string | | #999 |
| showLine | 分割线 | boolean | | false |