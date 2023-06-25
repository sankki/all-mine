# LayoutTitle 标题布局
标题布局

## 组件自带图标

:::demo
```vue
<template>
    <div style="width: 100%;height: 400px;">
        <AmLayoutTitle title="数据看板">

        </AmLayoutTitle>


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

