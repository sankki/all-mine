# LayoutBar 条布局
条布局

## 组件自带图标

:::demo
```vue
<template>
    <div style="width: 100%;height: 400px;">
        <AmLayoutBar>
            <template v-slot:left>
                <AmButton>新增数据</AmButton>

            </template>

            <template v-slot:right>
                <AmPagination
                    :total="total"
                    v-model:current="current"
                    v-model:page-size="pageSize"
                    @click-pager="clickPager"
                />
            </template>
        </AmLayoutBar>
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

