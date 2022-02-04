<template>
    <div class="am-table-column" >
        <slot name="th"/>
        <slot/>
    </div>
</template>

<script setup>
import {
    defineProps, inject, getCurrentInstance,
} from 'vue';

defineProps({
    // 表头名称
    label: {
        type: String,
        default: '表头',
    },
    // 字段属性名称
    prop: {
        type: String,
        default: '',
    },
    // 宽度
    width: {
        type: String,
    },
    // 类型
    type: {
        type: String,
    },
    // 排序
    sort: {
        type: Boolean,
        default: false,
    },
});
const ins = getCurrentInstance();
console.log('ins', ins)
// const { label } = toRefs(props);
// const label = props.label;
const tableColumnData = inject('tableColumnData');
tableColumnData.value.push(ins);
</script>

<style lang="scss">

</style>
