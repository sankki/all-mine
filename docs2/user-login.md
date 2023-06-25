# UserLogin 用户登录
用户登录

## 组件自带图标

:::demo
```vue
<template>
    <div style="width: 100%;height: 400px;">
        <AmUserLogin 
        
        />
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

