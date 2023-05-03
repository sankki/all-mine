# Logo 标志
通用Logo组件。

## 组件自带图标

:::demo
```vue
<template>
    <div>
        <div>
            <AmLogo mode="light-all" style="height: 24px;"/>
            <AmLogo mode="light-icon" style="height: 24px;"/>
            <AmLogo mode="black" style="height: 24px;"/>
        </div>

        <div style="background: #000;padding: 16px;">
            <AmLogo mode="dark-all" style="height: 24px;"/>
            <AmLogo mode="dark-icon" style="height: 24px;"/>
        </div>
    </div>
</template>
```
:::


## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 图标名 | string | add | add |
| size | 字号 | string |  | 14px |
| color | 颜色 | string |  | #333 |
