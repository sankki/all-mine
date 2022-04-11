<template>
    <div class="am-list-status" ref="observerEl">
        <div class="am-list-status__loading" v-if="isLoading">
            <AmIcon name="loading1" size="18px" color="#aaa"/>
            <span>{{ loadingText }}</span>
        </div>
        <div class="am-list-status__end" v-if="isEnd">
            <AmIcon name="product1" size="18px" color="#aaa"/>
            <span>{{ endText }}</span>
        </div>
        <div class="am-list-status__empty" v-if="isEmpty">
            <AmIcon name="product1" size="18px" color="#aaa"/>
            <span>{{ emptyText }}</span>
        </div>
    </div>
</template>

<script setup>
import {
    defineProps,
    onMounted,
    onUnmounted,
    defineEmits,
    ref,
} from 'vue';

const observerEl = ref(null);
const props = defineProps({
    options: {
        type: Object,
        default: () => {},
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    isEnd: {
        type: Boolean,
        default: false,
    },
    isEmpty: {
        type: Boolean,
        default: false,
    },
    endText: {
        type: String,
        default: '到底了',
    },
    loadingText: {
        type: String,
        default: '加载中',
    },
    emptyText: {
        type: String,
        default: '暂无数据',
    },
});
const observer = ref(null);
const emit = defineEmits(['intersect']);
const init = () => {
    observer.value = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            emit('intersect');
        }
    }, props.options);
    observer.value.observe(observerEl.value);
};
onMounted(() => {
    init();
});
onUnmounted(() => {
    observer.value.disconnect();
});
</script>

<style lang="scss">
.am-list-status {
    width: 100%;
    display: flex;
    &__loading, &__end, &__empty {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 14px;
        height: 32px;
        align-items: center;
        .am-icon {
            margin-right: 2px;
        }
        >span {
            color: var(--c-sub);
        }
    }
    &__loading {
        .am-icon {
            animation: amListStatusLoading 1s linear infinite;
        }
    }
}
@keyframes amListStatusLoading {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
    
}
</style>
