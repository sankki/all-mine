<template>
    <div 
        class="am-option" 
        :class="aoClass" 
        @click.stop="clickOption"
    >
        <!-- 内容 -->
        <slot />
        <!-- 标记 -->
        <AmIcon
            v-if="isSelected"
            class="am-option__check"
            name="check-2"
            size="20px"
        />
    </div>
</template>

<script setup>
import { defineProps, computed, inject, watch } from 'vue'

const props = defineProps({
    // 选项内容，必须包括 value 和 label
    item: {
        type: Object,
        required: true,
    },
})

const options = inject('options')
watch(
    () => props.item,
    () => {
        const findedIndex = options.findIndex((i) => i === props.item)
        if (findedIndex >= 0) {
            options.splice(findedIndex, 1, props.item)
        } else {
            options.push(props.item)
        }
    },
    {
        deep: true,
        immediate: true,
    }
)

const selectedItemValue = inject('selectedItemValue')
const isSelected = computed(() => {
    return selectedItemValue.value === props.item.value
})
const aoClass = computed(() => {
    return {
        'is-selected': isSelected.value,
    }
})

const setValue = inject('setValue')
const clickOption = () => {
    setValue(props.item)
    setTimeout(() => {
        console.log(selectedItemValue.value)
    }, 1000)
}
</script>

<style lang="scss">
.am-option {
    user-select: none;
    padding: 5px 8px;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    cursor: pointer;
    &__check {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 8px;
        margin: auto;
        color: #54aa40;
    }
    &:hover {
        background: #f5f5f5;
    }
    &.is-selected {

    }
    &.is-multiple {
        padding-right: 32px;
    }
}
</style>