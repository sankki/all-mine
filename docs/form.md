# Form 表单

## 基本用法

:::demo
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

## 暗色模式

:::demo
```vue
<template>
    <div style="background: #000;padding: 16px;">
        <AmForm position="top" label-width="80px" scene="dark">
            <AmFormItem label="姓名">
                <AmInput scene="dark" v-model="value" :value="value" :match="/^[0-9]*$/"/>
            </AmFormItem>
            <AmFormItem label="账号" position="left" required>
                <AmInput scene="dark" v-model="value" :value="value" :match="/^[0-9]*$/"/>
            </AmFormItem>
            <AmFormItem label="密码" position="right" required>
                <AmInput scene="dark" v-model="value" :value="value" :match="/^[0-9]*$/"/>
            </AmFormItem>
        </AmForm>
    </div>
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
