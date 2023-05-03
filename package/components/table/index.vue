<template>
    <div class="am-table">
        <div style="display: none"><slot /></div>
        <div 
            class="am-table__hd"
            :style="hdStyle"
        >
            <table>
                <thead>
                    <tr>
                        <th
                            v-for="(item, index) in columnData"
                            :key="index"
                            :style="{
                                width: item.props.width,
                            }"
                        >
                            <!-- slot th -->
                            <Cell
                                :slot-fun="item.slots.th"
                                v-if="item.slots.th"
                            />
                            <!-- 文字 th -->
                            <div class="am-table__th-cell" v-else>
                                {{ item.props.label }}
                            </div>
                        </th>
                        <th
                            class="am-table__th-scroll-bar"
                            :style="{
                                'width': `${scrollBarWidth}px`,
                            }"
                        ></th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="am-table__bd" :style="tableBdStyle" ref="bd">
            <table>
                <colgroup>
                    <col
                        v-for="(item, index) in columnData"
                        :key="index"
                        :style="{
                            width: item.props.width,
                        }"
                    />
                </colgroup>
                <tbody>
                    <tr
                        v-for="(item1, index1) in data"
                        :key="index1"
                        :class="rowClass(item1, index1)"
                        @click="clickRow(item1)"
                    >
                        <td
                            v-for="(item2, index2) in columnData"
                            :key="index2"
                            @click="clickCell(item1, item2)"
                        >
                            <!-- <div v-if="true">123</div> -->
                            <!-- slot td -->
                            <Cell
                                :slot-fun="item2.slots.default"
                                :data="item1"
                                v-if="item2.slots.default"
                            />
                            <!-- 文字 td -->
                            <div class="am-table__td-cell" v-else>
                                {{ item1[item2.props.prop] }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
// Cell组件
import {
    defineComponent,
    defineProps,
    ref,
    computed,
    onMounted,
    defineEmits,
    provide,
    h,
    nextTick,
    onBeforeUnmount
} from 'vue';
import { observeElResize, offObserveElResize } from '../../utils/dom';

const props = defineProps({
    // 表格数据
    data: null,
    // 高度
    height: {
        type: String,
    },
    // 对齐方式
    align: {
        type: String,
        default: 'left', // left center right
    },
    // 行类
    rowClass: {
        type: Function,
        default: () => {},
    },
    // 表头样式
    hdStyle: {
        type: Object,
        default: () => {},
    },
    // 表体样式
    bdStyle: {
        type: Object,
        default: () => {},
    },
    // watch dom
});
const columnData = ref([]);
provide('tableColumnData', columnData);
// 滚动
const tableBdStyle = computed(() => ({
    'max-height': props.height ? `${props.height}` : '',
    'overflow-y': props.height ? 'auto' : '',
    'overflow-x': 'hidden',
    ...props.bdStyle,
}));
const scrollBarWidth = ref(0);
const bd = ref(null);
const getScrollBarWidth = async () => {
    if(!bd.value) return;
    await nextTick();
    scrollBarWidth.value = Math.max((bd.value.offsetWidth - bd.value.firstChild.offsetWidth - 2),  0);
}
let ro;
onMounted(() => {
    getScrollBarWidth();
    ro = observeElResize(bd.value.firstChild, getScrollBarWidth);
});
onBeforeUnmount(() => {
    offObserveElResize(bd.value, ro);
});

// 事件
const emit = defineEmits(['row-click', 'cell-click']);
// 点击行
const clickRow = (row) => {
    emit('row-click', row);
};
// 点击单元格
const clickCell = (row, column) => {
    emit('cell-click', row, column);
};

const Cell = defineComponent({
    name: 'Cell',
    props: {
        slotFun: null,
        data: null,
    },
    render() {
        return h(
            'div',
            {
                attrs: {
                    class: 'cell',
                },
            },
            this.slotFun(this.data),
        );
    },
});
</script>

<style lang="scss">
.am-table {
    width: 100%;
    background: #fff;
    white-space: initial;
    display: flex;
    flex-direction: column;
    th,td,tr,table {
        border: none;
    }
    &__hd {
        border: 1px solid var(--c-border);
        background: var(--c-bglight);
        display: inline-flex;
        > table {
            width: 100%;
            table-layout: fixed;
            display: table;
            margin: 0;
            > thead {
                > tr {
                    > th {
                        padding: 8px 12px;
                        color: var(--c-sub);
                        font: var(--f-14);
                        text-align: left;
                        border-right: 1px solid var(--c-border);
                        &:nth-last-child(1), &:nth-last-child(2) {
                            border-right: none;
                        }
                    }
                }
            }
        }
    }
    &__bd {
        border: 1px solid var(--c-border);
        border-top: none;
        display: inline-flex;
        > table {
            width: 100%;
            table-layout: fixed;
            display: table;
            margin: 0;
            > tbody {
                > tr {
                    border-bottom: 1px solid var(--c-border);
                    > td {
                        padding: 8px 12px;
                        font: var(--f-14);
                        text-align: left;
                        color: var(--c-main);
                        border-right: 1px solid var(--c-border);
                        &:nth-last-child(1) {
                            border-right: none;
                        }
                    }
                    &:first-child {
                        border-top: none;
                        > td {
                            border-top: none;
                        }
                    }
                    &:last-child {
                        border-bottom: none;
                        > td {
                            border-bottom: none;
                        }
                    }
                }
            }
        }
    }

    &__th-cell {
        display: flex;
        align-items: center;
        word-break: break-word;
    }
    &__td-cell {
        word-break: break-word;
    }
    &__th-scroll-bar {
        padding: 0!important;
    }

    &__sort {
        position: relative;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        height: 16px;
        width: 20px;
        vertical-align: middle;
        cursor: pointer;
        overflow: initial;
        i {
            position: absolute;
            left: 5px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            &:first-child {
                border-bottom-color: #c0c4cc;
                top: -1px;
            }
            &:last-child {
                border-top-color: #c0c4cc;
                bottom: -1px;
            }
        }
        &.is-asc {
            i:first-child {
                border-bottom-color: #333;
            }
        }
        &.is-desc {
            i:last-child {
                border-top-color: #333;
            }
        }
    }
}
</style>
