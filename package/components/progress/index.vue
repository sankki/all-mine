<template>
    <div
        class="am-progress"
        :class="[
            `am-progress--${type}`,
            status ? `is-${status}` : '',
            {
                'am-progress--without-text': !showText,
                'am-progress--text-inside': textInside,
            },
        ]"
        role="progressbar"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div v-if="type === 'line'" class="am-progress-bar">
        <div
            class="am-progress-bar__outer"
            :style="{ height: `${strokeWidth}px` }"
        >
            <div
            :class="[
                'am-progress-bar__inner',
                { 'am-progress-bar__inner--indeterminate': indeterminate },
            ]"
            :style="barStyle"
            >
            <div
                v-if="(showText || $slots.default) && textInside"
                class="am-progress-bar__innerText"
            >
                <slot v-bind="slotData">
                <span>{{ content }}</span>
                </slot>
            </div>
            </div>
        </div>
        </div>
        <div v-else
            class="am-progress-circle"
            :style="{ height: `${width}px`, width: `${width}px` }"
        >
            <svg viewBox="0 0 100 100">
                <path
                    class="am-progress-circle__track"
                    :d="trackPath"
                    stroke="#e5e9f2"
                    :stroke-width="relativeStrokeWidth"
                    fill="none"
                    :style="trailPathStyle"
                />
                <path
                    class="am-progress-circle__path"
                    :d="trackPath"
                    :stroke="stroke"
                    fill="none"
                    :stroke-linecap="strokeLinecap"
                    :stroke-width="percentage ? relativeStrokeWidth : 0"
                    :style="circlePathStyle"
                />
            </svg>
        </div>
        <div v-if="(showText || $slots.default) && !textInside"
            class="am-progress__text"
            :style="{ fontSize: `${progressTextSize}px` }"
        >
            <slot v-bind="slotData">
                <span v-if="!status">{{ content }}</span>
                <!-- <am-icon v-else><component :is="statusIcon" /></am-icon> -->
            </slot>
        </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'line',
    },
    percentage: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: '',
        values: ['', 'success', 'exception', 'warning'],
    },
    indeterminate: {
        type: Boolean,
        default: false,
    },
    duration: {
        type: Number,
        default: 3,
    },
    strokeWidth: {
        type: Number,
        default: 6,
    },
    strokeLinecap: {
        type: String,
        default: 'round',
    },
    textInside: {
        type: Boolean,
        default: false,
    },
    width: {
        type: Number,
        default: 126,
    },
    showText: {
        type: Boolean,
        default: true,
    },
    color: {
        type: null,
        default: '#111111',
    },
    format: {
        type: Function,
        default: (percentage) => `${percentage}%`,
    },
});

// 通用
const getCurrentColor = (percentage) => {
    const { color } = props;
    if (typeof color === 'function') {
        return color(percentage);
    } if (typeof color === 'string') {
        return color;
    }
    const span = 100 / color.length;
    const seriesColors = color.map((seriesColor, index) => {
        if (typeof seriesColor === 'string') {
            return {
                color: seriesColor,
                percentage: (index + 1) * span,
            };
        }
        return seriesColor;
    });
    const colors = seriesColors.sort((a, b) => a.percentage - b.percentage);
    const colorsValues = Object.values(colors);
    for (let i = 0; i < colorsValues.length; i += 1) {
        const c = colorsValues[i];
        if (c.percentage > percentage) { return c.color; }
    }
    return colors[colors.length - 1]?.color;
};

// 线状进度条
const barStyle = computed(() => ({
    width: `${props.percentage}%`,
    animationDuration: `${props.duration}s`,
    backgroundColor: getCurrentColor(props.percentage),
}));
const relativeStrokeWidth = computed(() => ((props.strokeWidth / props.width) * 100).toFixed(1));

// 圆形进度条
const radius = computed(() => {
    if (props.type === 'circle' || props.type === 'dashboard') {
        return parseInt(`${50 - parseFloat(relativeStrokeWidth.value) / 2}`, 10);
    }
    return 0;
});
const trackPath = computed(() => {
    const r = radius.value;
    const isDashboard = props.type === 'dashboard';
    return `
        M 50 50
        m 0 ${isDashboard ? '' : '-'}${r}
        a ${r} ${r} 0 1 1 0 ${isDashboard ? '-' : ''}${r * 2}
        a ${r} ${r} 0 1 1 0 ${isDashboard ? '' : '-'}${r * 2}
        `;
});
const perimeter = computed(() => 2 * Math.PI * radius.value);
const rate = computed(() => (props.type === 'dashboard' ? 0.75 : 1));
const strokeDashoffset = computed(() => {
    const offset = (-1 * perimeter.value * (1 - rate.value)) / 2;
    return `${offset}px`;
});
const trailPathStyle = computed(
    () => ({
        strokeDasharray: `${perimeter.value * rate.value}px, ${
            perimeter.value
        }px`,
        strokeDashoffset: strokeDashoffset.value,
    }),
);
const circlePathStyle = computed(
    () => ({
        strokeDasharray: `${
            perimeter.value * rate.value * (props.percentage / 100)
        }px, ${perimeter.value}px`,
        strokeDashoffset: strokeDashoffset.value,
        transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease',
    }),
);
const stroke = computed(() => {
    let ret;
    if (props.color) {
        ret = getCurrentColor(props.percentage);
    } else {
        switch (props.status) {
        case 'success':
            ret = '#13ce66';
            break;
        case 'exception':
            ret = '#ff4949';
            break;
        case 'warning':
            ret = '#e6a23c';
            break;
        default:
            ret = '#20a0ff';
        }
    }
    return ret;
});
const progressTextSize = computed(() => (props.type === 'line'
    ? 12 + props.strokeWidth * 0.4
    : props.width * 0.111111 + 2));
const content = computed(() => props.format(props.percentage));

const slotData = computed(() => ({
    percentage: props.percentage,
}));
</script>

<style lang="scss">

.am-progress {
    width: 120px;
    position: relative;
    line-height: 1;
    display: flex;
    align-items: center;
}

.am-progress__text {
    font-size: 14px;
    color: var(--am-text-color-regular);
    margin-left: 5px;
    min-width: 50px;
    line-height: 1
}

.am-progress__text i {
    vertical-align: middle;
    display: block
}

.am-progress--circle,.am-progress--dashboard {
    display: inline-block
}

.am-progress--circle .am-progress__text,.am-progress--dashboard .am-progress__text {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    transform: translateY(-50%)
}

.am-progress--circle .am-progress__text i,.am-progress--dashboard .am-progress__text i {
    vertical-align: middle;
    display: inline-block
}

.am-progress--without-text .am-progress__text {
    display: none
}

.am-progress--without-text .am-progress-bar {
    padding-right: 0;
    margin-right: 0;
    display: block
}

.am-progress--text-inside .am-progress-bar {
    padding-right: 0;
    margin-right: 0
}

.am-progress.is-success .am-progress-bar__inner {
    background-color: var(--am-color-success)
}

.am-progress.is-success .am-progress__text {
    color: var(--am-color-success)
}

.am-progress.is-warning .am-progress-bar__inner {
    background-color: var(--am-color-warning)
}

.am-progress.is-warning .am-progress__text {
    color: var(--am-color-warning)
}

.am-progress.is-exception .am-progress-bar__inner {
    background-color: var(--am-color-danger)
}

.am-progress.is-exception .am-progress__text {
    color: var(--am-color-danger)
}

.am-progress-bar {
    flex-grow: 1;
    box-sizing: border-box
}

.am-progress-bar__outer {
    height: 6px;
    border-radius: 100px;
    background-color: #ddd;
    overflow: hidden;
    position: relative;
    vertical-align: middle
}

.am-progress-bar__inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: var(--am-color-primary);
    text-align: right;
    border-radius: 100px;
    line-height: 1;
    white-space: nowrap;
    transition: width .6s ease
}

.am-progress-bar__inner:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle
}

.am-progress-bar__inner--indeterminate {
    transform: translateZ(0);
    animation: indeterminate 3s infinite
}

.am-progress-bar__innerText {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 12px;
    margin: 0 5px
}

@keyframes progress {
    0% {
        background-position: 0 0
    }

    to {
        background-position: 32px 0
    }
}

@keyframes indeterminate {
    0% {
        left: -100%
    }

    to {
        left: 100%
    }
}
</style>
