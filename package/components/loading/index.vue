<template>
    <div class="am-loading">
        <transition
            name="am-loading-anime"
            v-on:after-leave="afterLeave"
        >
            <div
                class="am-loading__inner"
                v-if="realShow"
            >
                <div class="am-loading__card">
                    <svg
                        class="spinner"
                        width="40px"
                        height="40px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            class="path2"
                            fill="none"
                            stroke-width="3"
                            cx="20"
                            cy="20"
                            r="13"
                        >
                        </circle>
                        <circle
                            class="path"
                            fill="none"
                            stroke-width="3"
                            cx="20"
                            cy="20"
                            r="13"
                        >
                        </circle>
                    </svg>
                    <span>加载中</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {
    watch, ref, onMounted, defineExpose, defineProps,
} from 'vue';

const props = defineProps({
    destroySelf: Function,
});
const show = ref(false);
const realShow = ref(false);
let canClose = false;
let timer = null;

watch(() => show.value, () => {
    if (show.value) {
        // 显示
        realShow.value = true;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            canClose = true;
            if (!show.value) {
                realShow.value = false;
            }
        }, 600);
    } else if (canClose) {
        realShow.value = false;
        canClose = false;
    }
});

onMounted(() => {
    show.value = true;
});

// 关闭与摧毁
let closePromiseResolve;
const remove = () => {
    console.log(props);
    props.destroySelf();
};
const afterLeave = () => {
    console.log('afterLeave');
    closePromiseResolve();
    remove();
};
const close = async () => {
    console.log('执行关闭');
    show.value = false;
    await new Promise((resolve) => {
        closePromiseResolve = resolve;
    });
};
defineExpose({
    close,
    show,
});
</script>

<style lang="scss">
.am-loading {
    &__inner {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 120px;
        // padding-top: 32px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        opacity: 1;
        z-index: 999;
    }
    &__card {
        background: #fff;
        border-radius: 2px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:  24px 48px;
        max-width: 320px;
        min-width: 200px;
        min-height: 120px;
        .spinner {
            margin-bottom: 8px;
            .path {
                stroke: var(--c-primary);
                transform-origin: center;
                position: relative;
                animation: dash 1s linear infinite;
                stroke-dasharray: 30, 80;
                stroke-dashoffset: 0;
            }
            .path2 {
                stroke: var(--c-bglight);
                transform-origin: center;
                position: relative;
            }
        }
        > span {
            font-size: 14px;
            // color: #fff;
            // background: var(--primary);
            padding: 0 8px;
            // border: 1px solid #ddd;
            border-radius: 2px;
            // box-shadow: 0 0 8px 0px rgba(0,0,0,.16);
        }
    }
}

.am-loading-anime-enter-active {
    transition:  opacity 0s;
}
.am-loading-anime-leave-active {
    transition:  opacity .2s;
}
.am-loading-anime-enter, .am-loading-anime-leave-to {
    opacity: 0;
}
@keyframes dash {
    0% {
        // stroke-dashoffset: 45;
        transform: rotate(0deg);
    }
    50% {
        // stroke-dashoffset: 12;
        transform: rotate(180deg);
        opacity: 1;
    }
    100% {
        // stroke-dashoffset: 45;
        transform: rotate(360deg);
    }
}
</style>
