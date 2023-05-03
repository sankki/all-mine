# Table 表格

常用的操作按钮。

## 文本框

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmPagination
        :total="total"
        v-model:current="current"
        v-model:page-size="pageSize"
        @click-pager="clickPager"
    />
</template>

<script>
export default {
    data(){
        return {
            total: 200,
            pageSize: 20,
            current: 1,
        }
    },
    methods: {
        clickPager(num,current){
            console.log('# 点击了页面', num, current);
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
