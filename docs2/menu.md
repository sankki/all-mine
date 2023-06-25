# Menu 菜单

输入框、文本框。

## 输入框

:::demo
```vue
<template>
    <AmMenu>
        <AmMenuItem>
            一级标题
            <template v-slot:children>
                <AmMenuItem>
                    <span>二级标题</span>
                    <template v-slot:children>
                        <AmMenuItem>
                            <span>三级标题</span> 
                        </AmMenuItem>
                        <AmMenuItem>
                            <span>三级标题</span> 
                        </AmMenuItem>
                        <AmMenuItem>
                            <span>三级标题</span> 
                        </AmMenuItem>
                        <AmMenuItem>
                            <span>三级标题</span> 
                        </AmMenuItem>
                    </template>
                </AmMenuItem>
            </template>
        </AmMenuItem>
        <AmMenuItem :is-selected="true">一级标题123</AmMenuItem>
        <AmMenuItem>一级标题</AmMenuItem>
        <AmMenuItem>一级标题</AmMenuItem>
        <AmMenuItem>一级标题</AmMenuItem>
    </AmMenu>
</template>


<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```
:::

## 文本框

文本框、可自动增高。

:::demo
```vue
<template>
    <AmInput
        type="textarea"
        v-model:value="value"
    />
</template>


<script setup>
import { ref } from 'vue';
const value = ref(`hello
xux!`);
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 双向绑定值 | string |  |  |
| placeholder | 默认内容 | string | |  |
| type | 类型 | string |  | input |
| autosize | 是否自动增高 | boolean |  | true |
