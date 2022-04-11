<template>
    <div 
        class="am-option" 
        :class="aoClass" 
        @click="clickOption"
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

const options = inject('options');
const selectedItemValue = inject('selectedItemValue');
watch(
    () => props.item,
    () => {
        const findedIndex = options.findIndex((i) => i.value === props.item.value)
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
const isSelected = computed(() => {
    if(Array.isArray(selectedItemValue.value)) {
        return selectedItemValue.value.includes(props.item.value);
    };
    return selectedItemValue.value === props.item.value
})
const aoClass = computed(() => {
    return {
        'is-selected': isSelected.value,
    }
})

const setValue = inject('setValue');
const clickOption = () => {
    setValue(props.item);
}
</script>
