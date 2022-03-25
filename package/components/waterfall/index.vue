<template>
    <div 
        ref="wb" 
        class="am-waterfall" 
        :class="boxClass"
    >
        <slot />
    </div>
</template>

<script setup>
import Macy from 'macy';
import {
    ref, onMounted, onBeforeUnmount, defineProps, watch,
} from 'vue';

const props = defineProps({
    config: {
        type: Object,
        default: () => {},
    },
    // 当changeKey变化时，重新计算位置
    changeKey: {
        type: null,
    },
});

const masonry = ref(null);
const boxClass = ref(`m-waterfall-box${Math.floor(Math.random() * 9999)}`);

const onresize = () => {
    if (masonry.value) {
        masonry.value.recalculate(true);
    }
};

const initMacy = async () => {
    masonry.value = new Macy({
        container: `.${boxClass.value}`,
        trueOrder: false,
        useOwnImageLoader: false,
        debug: true,
        margin: {
            x: 16,
            y: 16,
        },
        breakAt: {
            10000: 6,
            1900: 5,
            1700: 4,
            1500: 4,
            1300: 3,
        },
        ...props.config,
    });

    window.addEventListener('resize', onresize);
};

// 卸载前取消监听
onBeforeUnmount(() => {
    window.removeEventListener('reszie', onresize);
});
onMounted(() => {
    initMacy();
});
watch(() => props.changeKey, () => {
    initMacy();
});
</script>

<style lang="scss">
.am-waterfall {
    width: 100%;
}
</style>
