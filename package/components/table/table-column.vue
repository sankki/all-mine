<template>
    <div class="am-table-column" >
        <slot name="th"/>
        <slot/>
    </div>
</template>

<script setup>
import {
    defineProps, inject, getCurrentInstance, onUnmounted,
} from 'vue';
import { nanoid } from 'nanoid'

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
// console.log('ins', ins)
// const { label } = toRefs(props);
// const label = props.label;
const tableColumnData = inject('tableColumnData');
const columnId = nanoid();
tableColumnData.value.push({
    props: ins.props,
    slots: ins.slots,
    id: columnId,
});

onUnmounted(() => {
    const findIndex = tableColumnData.value.findIndex(i => {
        return i.id === columnId;
    });
    if(findIndex >= 0) {
        tableColumnData.value.splice(findIndex, 1);
    }
})
</script>

<style lang="scss">

</style>
