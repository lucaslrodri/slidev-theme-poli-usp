<script setup lang="ts">
import { computed, ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = withDefaults(defineProps<{
    color?: "default" | "primary" | "primary-dark" | "secondary" | "secondary-dark" | "danger" | "danger-dark" | "safe" | "safe-dark" | "gray" | "gray-dark";
    mode?: "marker" | "underline";
    bold?: boolean | string;
    animated?: boolean | string;
}>(), {
    color: "default",
    bold: false,
    animated: false,
    mode: "marker"
})

const propBgColor = computed(() => {
    if(props.mode === 'underline'){
        if (props.color === "default" || props.color === "secondary") {
            return "from-secondary to-secondary"
        } else if (props.color === "primary") {
            return "from-primary to-primary"
        } else if (props.color === "danger") {
            return "from-danger to-danger"
        } else if (props.color === "safe") {
            return "from-safe to-safe"
        } else if (props.color === "gray") {
            return "from-grays-300 to-grays-300"
        }
        return 'to-secondary'
    }
    if (props.color.includes("default" ) || props.color.includes("secondary")) {
        if (props.color.includes("dark")){
            return "from-secondary-300 to-secondary-300"
        }
        return "from-secondary-200 to-secondary-200"
    } else if (props.color.includes("primary")) {
        if (props.color.includes("dark")){
            return "from-primary-300 to-primary-300"
        }
        return "from-primary-200 to-primary-200"
    } else if (props.color.includes("danger")) {
        if (props.color.includes("dark")){
            return "from-danger-300 to-danger-300"
        }
        return "from-danger-200 to-danger-200"
    } else if (props.color.includes("safe")) {
        if (props.color.includes("dark")){
            return "from-safe-300 to-safe-300"
        }
        return "from-safe-200 to-safe-200"
    } else if (props.color.includes("gray")) {
        if (props.color.includes("dark")){
            return "from-grays-200 to-grays-200"
        }
        return "from-grays-150 to-grays-150"
    }
    return "from-secondary-200 to-secondary-200"
})

const propHeight = computed(() => {
    if (props.mode === 'underline'){
        return '3px'
    }
    return '100%'
})

const target = ref(null)
const isVisible = useElementVisibility(target)

</script>

<template>
    <mark
        v-if="animated"
        class='bg-no-repeat bg-gradient-to-r from-0% to-100% bg-transparent text-grays-700'
        :class="[
        {
            'font-semibold': bold, 
            'marked': mode === 'marker',
            'thin': mode === 'underline',
            'animated': animated
        },propBgColor, propHeight, isVisible? 'is-visible' : 'not-visible'
        ]"
        ref="target"
    >
        <slot/>
    </mark>
    <mark 
        v-else
        class='bg-no-repeat bg-gradient-to-r from-0% to-100% bg-transparent text-grays-700'
        :class="[
        {
            'font-semibold': bold, 
            'marked': mode === 'marker',
            'thin': mode === 'underline',
        },propBgColor, propHeight
        ]"
        
    >
        <slot/>
    </mark>
</template>

<style scoped>
mark{
    transition: background .5s;
}
mark.animated{
    transition-delay: 0.3s;
}
.marked{
    background-size: 100% 100%;
}
.marked.slidev-vclick-hidden, .slidev-vclick-hidden .marked, .marked.not-visible{
    background-size: 0 100%;
}

.thin{
    background-position: 0 1.1em;
    background-size: 100% 2px;
}
.thin.slidev-vclick-hidden, .slidev-vclick-hidden .thin, .thin.not-visible{
    background-size: 0 2px;
}
.marked.slidev-vclick-hidden, .thin.slidev-vclick-hidden{
    @apply !opacity-100;
}
</style>