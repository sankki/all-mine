<template>
    <div class="am-pagination">
        <!-- 上一页 -->
        <AmButton
            class="am-pagination__left"
            shape="square"
            icon="caret-left"
            icon-size="16px"
            :disabled="current <= 1"
            @click="clickPrev"
        />
        <!-- 页码 -->
        <AmButton
            class="am-pagination__number"
            :class="item === current ? 'is-active': ''"
            v-for="(item,index) in pagers"
            :key="index"
            @click="clickPager(item)"
        >
            <AmIcon
                name="ellipsis"
                size="18px"
                v-if="item=='prev' || item==='next'"
            />
            <span v-else>{{ item }}</span>
        </AmButton>
        <!-- 下一页 -->
        <AmButton
            class="am-pagination__right"
            shape="square"
            icon="caret-right"
            icon-size="16px"
            :disabled="current >= pagerTotal"
            @click="clickNext"
        />
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
    // 总数
    total: {
        type: Number,
        default: 0,
    },
    // 当前页码
    current: {
        type: Number,
        default: 1,
    },
    // 显示的分页个数
    pagerCount: {
        type: Number,
        default: 7,
    },
    // 每页条数
    pageSize: {
        type: Number,
        default: 20,
    },
    pageSizeOptions: {
        type: Array,
        default: () => [20, 40, 60],
    },
    // 显示分页数量
    showPageSize: {
        type: Boolean,
        default: true,
    },
})

const pagers = computed(() => {
    const { pagerCount } = props;
    const currentPage = Number(props.current);
    const halfPagerCount = (pagerCount - 1) / 2;
    const pageCount = Math.ceil(props.total / props.pageSize);

    let showPrevMore = false;
    let showNextMore = false;

    if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
            showPrevMore = true;
        }

        if (currentPage < pageCount - halfPagerCount) {
            showNextMore = true;
        }
    }

    let array = [1];
    if (showPrevMore && !showNextMore) {
        array.push('prev');
        const startPage = pageCount - (pagerCount - 3);
        for (let i = startPage; i < pageCount; i += 1) {
            array.push(i);
        }
    } else if (!showPrevMore && showNextMore) {
        for (let i = 1; i <= pagerCount - 3; i += 1) {
            array.push(i + 1);
        }
        array.push('next');
    } else if (showPrevMore && showNextMore) {
        array.push('prev');
        const p = Math.ceil((pagerCount - 5) / 2);
        const n = Math.floor((pagerCount - 5) / 2);
        for (let i = currentPage - p; i <= currentPage + n; i += 1) {
            array.push(i);
        }
        array.push('next');
    } else {
        for (let i = 2; i < pageCount; i += 1) {
            array.push(i);
        }
    }
    if (pageCount) array.push(pageCount);
    array = Array.from(new Set(array));
    return array;
})

const pagerTotal = computed(() => {
    const all = Math.ceil(props.total / props.pageSize);
    return all;
})

const emit = defineEmits(['update:current', 'update:pageSize', 'click-pager', 'click-prev', 'click-next']); 
const clickPager = (num) => {
    let { current } = props;
    if (num === 'prev') {
        current -= Math.floor(props.pagerCount / 2);
    } else if (num === 'next') {
        current += Math.floor(props.pagerCount / 2);
    } else {
        current = num;
    }
    emit('update:current', current);
    emit('click-pager', num, current);
}
const clickPrev = () => {
    const current = props.current - 1;
    emit('update:current', current);
    emit('click-prev');
}
const clickNext = () => {
    const current = props.current + 1;
    emit('update:current', current);
    emit('click-next');
}
const changePageSize = (value) => {
    emit('update:current', 1);
    emit('update:pageSize', value);
}
</script>

<style lang="scss">
.am-pagination {
    display: flex;
    .am-button {
        margin-right: 4px;
        padding: 0 4px;
        &:last-child {
            margin-right: 0;
        }
    }
    // 左页码
    &__left {
        padding: 0;
    }
    // 右页码
    &__right {
        padding: 0;
    }
    // 页码
    &__number {
        padding: 0;
        // 选中状态
        &.is-active.am-button {
            background: var(--c-primary);
            color: #fff;
            border: none;
            &:hover {
                background: var(--c-primary);
            }
        }
    }
}
</style>
