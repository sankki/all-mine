# Table 表格

常用的操作按钮。

## 文本框

基础的按钮用法。

:::demo 使用`default`、`primary`、`plain`和`text`属性来定义 Button 的样式。
```vue
<template>
    <AmTable
        :data="list"
        height="200px"
        state="loading"
        @sort-change="sortChange"
    >
        <AmTableColumn label="姓名" prop="name"></AmTableColumn>
        <AmTableColumn label="年龄" prop="age" :width="300">
            <template v-slot:default="row">
                {{ row.name + row.age }}
            </template>
        </AmTableColumn>
        <AmTableColumn label="年龄" prop="age" sort></AmTableColumn>
    </AmTable>

    <AmDivider />
    <AmTable
        :data="list"
        @sort-change="sortChange"
        state="error"
    >
        <AmTableColumn label="姓名" prop="name"></AmTableColumn>
        <AmTableColumn label="年龄" prop="age" :width="300">
            <template v-slot:default="row">
                {{ row.name + row.age }}
            </template>
        </AmTableColumn>
        <AmTableColumn label="年龄" prop="age" sort></AmTableColumn>
    </AmTable>
</template>

<script>
export default {
    data(){
        return {
            list: [
                {name: '小红', age: 12},
                {name: '小蓝', age: 13},
                {name: '小白', age: 15},
                {name: '小黑', age: 19},
                {name: '小红', age: 12},
                {name: '小蓝', age: 13},
                {name: '小白', age: 15},
                {name: '小黑', age: 19},
            ]
        }
    },
    methods: {
        sortChange(sort){
            console.log(sort);
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
