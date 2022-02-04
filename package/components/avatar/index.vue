<template>
    <div class="am-avatar">
        <div
            class="am-avatar__avatar"
            :class="{
                [`is-${avatarSize}`]: true,
            }"
        >
            <img :src="url" v-if="url"/>
            <AmIcon name="account-fill" size="18px" v-else />
        </div>
        <div class="am-avatar__name" v-if="name">
            {{ name }}
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import AmIcon from '../icon/index.vue';

defineProps({
    url: String,
    name: String,
    avatarSize: {
        type: String,
        default: 'default',
    },
});
</script>

<style lang="scss">
.am-avatar {
    display: inline-flex;
    align-items: center;
    &__avatar {
        width: 32px;
        height: 32px;
        background: #eee;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .am-icon {
            color: #000;
        }
        &.is-small {
            width: 24px;
            height: 24px;
        }
    }
    &__name {
        font-size: 14px;
        margin-left: 8px;
    }
}
</style>
