<template>
    <!-- 菜单项 -->
    <div class="am-menu-item">
        <div 
            class="am-menu-item__content" 
            v-if="$slots.default"
            :style="contentStyle"
            @click="hanlderClick"
        >
            <AmIcon 
                class="am-menu-item__icon"
                :name="icon" 
                size="18px"
                v-if="icon" 
            />
            <div class="am-menu-item__text">
                <slot />
            </div>
            <AmIcon
                v-if="$slots.children"
                class="am-menu-item__down" 
                name="down" 
                size="18px" 
            />
        </div>
        <div 
            class="am-menu-item__children"
            v-if="$slots.children"
            v-show="innerOpen"
        >
            <slot name="children" />
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref, inject, provide } from 'vue';
const props = defineProps({
    icon: {
        type: String,
        default: '',
    },
    open: {
        type: String,
        default: false,
    }
})
// 告知子级层级
const level = inject('level');
if(level === undefined) {
    provide('level', 1);
}else {
    provide('level', level + 1);
}
console.log(level, 'level');

const contentStyle = computed(() => {
    return {
        paddingLeft: (level + 1) * 16 + 'px',
    }
})

const innerOpen = ref(props.open);
const hanlderClick = () => {
    innerOpen.value = !innerOpen.value;
}
</script>

<style lang="scss">
.am-menu-item {
    user-select: none;
    &__content {
        cursor: pointer;
        transition: background .2s;
        position: relative;
        border-radius: 2px;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        &:hover {
            background: rgba(0,0,0, .08);
        }
    }
    &__icon {
        margin-right: 8px;
    }
    &__text {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
    }
    &__down {
        position: absolute;
        right: 8px;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    &__children {

    }
}
</style>