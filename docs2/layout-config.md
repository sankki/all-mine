# LayoutConfig 配置布局
管理布局

## 组件自带图标

:::demo
```vue
<template>
    <div style="width: 100%;height: 400px;">
        <AmLayoutConfig>
            <AmLayoutConfigItem
                title="点赞"
                sub="当他人给我的文档点赞时"
            >

                <AmInput />
            </AmLayoutConfigItem>
            <AmLayoutConfigItem
                title="@ 和评论"
                sub="当他人@我，或者评论我的主题和文档时"
            >

                <AmInput />
            </AmLayoutConfigItem>
        </AmLayoutConfig>
    </div>
</template>


<script setup>
import { ref } from 'vue';

</script>
```
:::

