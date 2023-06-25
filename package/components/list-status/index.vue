<template>
    <div class="am-list-status" ref="observerEl">
        <!-- 加载中 -->
        <div class="am-list-status__loading" v-if="state === 'loading' && loadingText">
            <AmIcon name="loading1" size="18px" color="#aaa"/>
            <span>{{ loadingText }}</span>
        </div>
        <!-- 为空 -->
        <div class="am-list-status__empty" v-else-if="state === 'empty' && emptyText">
            <AmIcon name="product1" size="18px" color="#aaa"/>
            <span>{{ emptyText }}</span>
        </div>
        <!-- 加载错误 -->
        <div class="am-list-status__error" v-else-if="state === 'error' && errorText">
            <AmIcon name="product1" size="18px" color="#aaa"/>
            <span>{{ errorText }}</span>
            <a 
                @click="clickRetry"    
            >重试</a>
        </div>

        <!-- 到底了（下拉刷新用） -->
        <div class="am-list-status__end" v-else-if="state === 'end' && endText">
            <AmIcon name="product1" size="18px" color="#aaa"/>
            <span>{{ endText }}</span>
        </div>

        <!-- 到底了（下拉刷新用） -->
        <div class="am-list-status__end" v-else-if="state === 'last' && lastText">
            <AmIcon name="product1" size="18px" color="#aaa"/>
            <span>{{ lastText }}</span>
        </div>

        <!-- 空白（下拉刷新用， 当内容小于容器高度显示） -->
        <div class="am-list-status__error" v-else-if="state === 'blank' && blankText">
            <a
                style="margin: 0;"
                @click="clickBlank"    
            >{{ blankText }}</a>
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
    state: {
        type: String,
        default: '',
    },

    endText: {
        type: String,
        default: '',
    },
    loadingText: {
        type: String,
        default: '加载中',
    },
    emptyText: {
        type: String,
        default: '暂无数据',
    },
    errorText: {
        type: String,
        default: '加载错误',
    },
    lastText: {
        type: String,
        default: '到底了',
    },
    blankText: {
        type: String,
        default: '点击加载更多',
    }
});
let observer = null;
const emit = defineEmits(['intersect', 'retry']);
const init = () => {
    observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            emit('intersect');
        }
    }, props.options);
    observer.observe(observerEl.value);
};
const clickRetry = () => {
    emit('retry');
}
const clickBlank = () => {
    emit('intersect');
}
onMounted(() => {
    init();
});
onUnmounted(() => {
    observer.disconnect();
});
</script>

<style lang="scss">
.am-list-status {
    width: 100%;
    display: flex;
    // min-height: 20px;
    &__loading, &__end, &__empty,  &__error {
        width: 100%;
        display: flex;
        justify-content: center;
        font: var(--f-14);
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
    &__error {
        a {
            color: var(--c-sub);
            margin-left: 4px;
            &:hover {
                text-decoration: underline;
                color: var(--c-blue);
            }
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
