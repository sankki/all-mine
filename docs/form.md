# Table 表格

常用的操作按钮。

## 文本框

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmForm position="top" label-width="80px">
        <AmFormItem label="姓名">
            <AmInput v-model="value" :value="value" :match="/^[0-9]*$/"/>
        </AmFormItem>
        <AmFormItem label="账号" position="left" required>
            <AmInput v-model="value" :value="value" :match="/^[0-9]*$/"/>
        </AmFormItem>
        <AmFormItem label="密码" position="right" required>
            <AmInput v-model="value" :value="value" :match="/^[0-9]*$/"/>
        </AmFormItem>
    </AmForm>
</template>

<script>
    export default {
        data() {
            return {
                value: '1234567890'
            }
        }
    }
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| label | 选项值 | any |  |  |
| disabled | 禁用 | boolean |  | false |
