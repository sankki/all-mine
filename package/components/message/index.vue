<template>
    <div class="am-message">
        <transition
            name="am-message__anime"
            v-on:after-leave="afterLeave"
        >
            <div
                class="am-message__body"
                :class="'am-message__body--' + type"
                :style="{
                    'z-index': zIndex,
                }"
                v-show="show"
                @mouseenter="mouseEnter"
                @mouseleave="mouseLeave"
            >
                <AmIcon v-if="type" :name="iconName" size="20px"/>
                <span>{{ content }}</span>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {
    computed, ref, defineProps, onMounted, defineExpose,
} from 'vue';
import AmIcon from '../icon/index.vue';
import popupManager from '../../common/popup-manager';

const props = defineProps({
    type: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '通知',
    },
    duration: {
        type: Number,
        default: 2000,
    },
    destroySelf: Function,
});
const show = ref(false);
const zIndex = ref(popupManager.getZIndex());
const autoCloseTimer = ref(null);
const iconName = computed(() => {
    let iconName = '';
    switch (props.type) {
    case 'success':
        iconName = 'success-fill';
        break;
    case 'fail':
        iconName = 'error-fill';
        break;
    case 'info':
        iconName = 'info-fill';
        break;
    case 'warning':
        iconName = 'info-fill';
        break;
    default:
        break;
    }
    return iconName;
});
onMounted(() => {
    show.value = true;
    autoCloseTimer.value = setTimeout(() => {
        show.value = false;
    }, props.duration);
});

// 进入与离开
const mouseEnter = () => {
    
}
const mouseLeave = () => {

}

// 关闭与摧毁
const remove = () => {
    console.log(props);
    props.destroySelf();
};
const afterLeave = () => {
    remove();
};
const close = () => {
    if (autoCloseTimer.value) {
        clearTimeout(autoCloseTimer.value);
        autoCloseTimer.value = null;
    }
    show.value = false;
};
defineExpose({
    close,
    show,
});
</script>

<style lang="scss">
.am-message {
    &__body {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, calc(12vh));
        background: #fff;
        color: var(--c-main);
        border-radius: 2px;
        max-width: 480px;
        min-width: 240px;
        min-height: 44px;
        padding: 4px 24px;
        word-break: break-all;
        font: var(--f-14);
        // line-height: 20px;
        border: 1px solid #8ad0ff;
        color: var(--info);
        background: #e6f7ff;
        .am-icon {
            font-size: 28px;
            margin-right: 4px;
        }
        &--success {
            border: 1px solid var(--c-success);
            color: var(--c-success);
            background: #e3fcef;
        }
        &--fail {
            border: 1px solid var(--c-fail);
            color: var(--c-fail);
            background: #fff2f0;
        }
        &--info {
            border: 1px solid #8ad0ff;
            color: var(--c-info);
            background: #e6f7ff;
        }
        &--warning {
            border: 1px solid var(--c-warning);
            color: var(--c-warning);
            background: #fff6e8;
        }
    }

    &__anime-enter-active {
        animation: message-in 0.2s;
    }
    &__anime-leave-active {
        animation: message-in 0.2s reverse;
    }
    @keyframes message-in {
        from {
            opacity: 0;
            transform: translate(-50%, calc(6vh));
        }
        to {
            opacity: 1;
            transform: translate(-50%, calc(12vh));
        }
    }
}
</style>
