<template>
    <div class="am-logo">
        <div class="am-logo__main">
            <!-- 图片logo -->
            <img v-if="url" :src="url"/>
            <!-- 文字log -->
            <span v-else>{{ name }}</span>
        </div>
        <div class="am-logo__sub" v-if="sub">
            <span>{{ sub }}</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    name: {
        type: String,
        default: 'all-mine',
    },
    url: {
        type: String,
        default: '',
    },
    sub: {
        type: String,
        default: '',
    }
})
</script>

<style lang="scss">
.am-logo {
    display: flex;
    align-items: center;
    &__main {
        img {

        }
        span {
            font-weight: bold;
            font-size: 18px; 
        }
    }
    &__sub {
        margin-left: 4px;
        span {
            font-size: 18px;
            // font-weight: bold;
            color: #666;
        }
    }
}
</style>