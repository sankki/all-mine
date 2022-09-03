<template>
    <div 
        class="am-alert"
        :class="alertClass" 
        v-if="show"   
    >
        <div class="am-alert__icon" v-if="showIcon && alertIcon">
            <AmIcon 
                :name="alertIcon"
                size="18px"
            />
        </div>
        <div class="am-alert__content">
            <slot />
        </div>
        <div 
            class="am-alert__close" 
            v-if="showClose"
            @click="deleteAlert"    
        >
            <AmIcon 
                name="close"
        
            />
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue';
const show = ref(true);
const props = defineProps({
    type: {
        type: String,
        default: 'info', // info 白 warning 黄 success 绿 fail 红
    },
    size: {
        type: String,
        default: 'small', // small 小 middle 中 mini 迷你
    },
    showClose: {
        type: Boolean,
        default: false,
    },
    showIcon: {
        type: Boolean,
        default: false,
    }
});
const alertClass = computed(() => {
    return {
        [`is-${props.type}`]: true,
        [`is-${props.size}`]: true,
    }
});
const alertIcon = computed(() => {
    if(props.type === 'info') {
        return 'info-fill';
    } else if(props.type === 'success') {
         return 'success-fill';
    } else if(props.type === 'fail') {
         return 'error-fill';
    } else if(props.type === 'warning') {
         return 'info-fill';
    }
    return '';


})
const deleteAlert = () => {
    show.value = false;
}

</script>

<style lang="scss">
.am-alert {
    display: inline-flex;
    border: 1px solid var(--c-border);
    padding: 4px 8px;
    font-size: 14px;
    align-items: center;
    &__icon {
        margin-right: 4px;
        display: inline-flex;
    }
    &__content {

    }
    &__close {
        display: inline-flex;
        margin-left: 4px;
        cursor:pointer;
    }
    &.is-info {
        border-color: var(--c-primary);
        color: var(--c-primary);
        background: #f9fcff;
    }
    &.is-success {
        border-color: var(--c-green);
        color: var(--c-green);
        background: #f6fffc;
    }
    &.is-fail {
        border-color: var(--c-red);
        color: var(--c-red);
        background: #fcf8f8;
    }
    &.is-warning {
        border-color: var(--c-orange);;
        color: var(--c-orange);
        background: #fffbf5;
    }

    &.is-middle {
        padding: 8px 16px;
    }
    &.is-mini {
        padding: 0px 4px;
        font-size: 12px;
    }
}
</style>