<template>
    <div class="am-list-status" ref="observerEl">
        <div class="am-list-status__loading" v-if="isLoading">
            {{ loadingText }}
        </div>
        <div class="am-list-status__end" v-if="isEnd">
            {{ endText }}
        </div>
        <div class="am-list-status__empty" v-if="isEmpty">
            {{ emptyText }}
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
        default: '没有数据了',
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
    &__loading, &__end {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 14px;
        height: 32px;
        align-items: center;
    }
}
</style>
