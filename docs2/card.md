# Card 卡片
卡片

## 组件自带图标

:::demo
```vue
<template>
    <div style="width: 100%;height: 600px;background: var(--c-bglight);padding: 40px;">

        <AmCard title="卡片你好" size="large">
            <template v-slot:hdright><AmButton mode="primary-text">订阅</AmButton></template>
            内容内容

        </AmCard>

        <AmCard title="卡片你好" style="margin: 24px 0;">
            <template v-slot:hdright><AmButton mode="primary-text">订阅</AmButton></template>
            内容内容

        </AmCard>


        <AmCard title="卡片你好" size="small">
            <template v-slot:hdright><AmButton mode="primary-text">订阅</AmButton></template>
            内容内容

        </AmCard>
    </div>
</template>


<script setup>
import { ref } from 'vue';

</script>
```
:::

