<script setup lang="ts">
    import { computed, ref } from 'vue';
    
    const props = withDefaults(defineProps<{
        contentClass?: string;
        layoutClass?: string;
        width?: number | null;
        gap?: number;
        alignContent?: 'start' | 'center' | 'end' | 'stretch';
        justifyContent?: 'start' | 'center' | 'end' | 'stretch';
        align?: 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | 'evenly';
        justify?: 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | 'evenly';
    }>(), {
        contentClass: '',
        layoutClass: '',
        cols: null,
        gap: null,
        contentWidth: null,
        align: 'center',
        justify: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    })

    const justifyClass = computed(() => {
        if (props.justify === 'start'){
            return 'justify-start'
        }else if (props.justify === 'end'){
            return 'justify-end'
        }else if (props.justify === 'stretch'){
            return 'justify-stretch'
        }else if (props.justify === 'between'){
            return 'justify-between'
        }else if (props.justify === 'around'){
            return 'justify-around'
        }else if (props.justify === 'evenly'){
            return 'justify-evenly'
        }
        return 'justify-center'
    })

    const container = ref<HTMLDivElement | null>(null);

    const alignClass = computed(() => {
        if (props.align === 'start'){
            return 'items-start'
        }else if (props.align === 'end'){
            return 'items-end'
        }else if (props.align === 'stretch'){
            return 'items-stretch'
        }else if (props.align === 'between'){
            return 'items-between'
        }else if (props.align === 'around'){
            return 'items-around'
        }else if (props.align === 'evenly'){
            return 'items-evenly'
        }
        return 'items-center'
    })

    const alignContentClass = computed(() => {
        if (props.alignContent === 'start'){
            return 'items-start'
        }else if (props.alignContent === 'end'){
            return 'items-end'
        }else if (props.alignContent === 'stretch'){
            return 'items-stretch'
        }
        return 'items-center'
    })

    const justifyContentClass = computed(() => {
        if (props.justifyContent === 'start'){
            return 'justify-start'
        }else if (props.justifyContent === 'end'){
            return 'justify-end'
        }else if (props.justifyContent === 'stretch'){
            return 'justify-stretch'
        }
        return 'justify-center'
    })

    const gapClass = computed(() => {
        if (container.value && props.gap === null){
            if (container.value.children.length === 2){
                return 'gap-x-8  gap-y-8'
            }else{
                return 'gap-x-4  gap-y-4'
            }
        }else{
            if (props.gap <= 1){
                return 'gap-x-1 gap-y-1'
            }else if (props.gap <= 2){
                return 'gap-x-2 gap-y-2'
            }else if (props.gap <= 4){
                return 'gap-x-4 gap-y-4'
            }else if (props.gap <= 8){
                return 'gap-x-8 gap-y-8'
            }else if (props.gap <= 12){
                return 'gap-x-12 gap-y-12'
            }else if (props.gap <= 16){
                return 'gap-x-16 gap-y-16'
            }else if (props.gap <= 20){
                return 'gap-x-20 gap-y-20'
            }
            return 'gap-x-32 gap-y-32'
        }
    })
</script>

<template>
    <div class="slidev-layout n-flex h-full flex flex-col" :class="props.layoutClass">
        <div class="flex-none slide-header">
            <slot />
        </div>
        <div 
            class="grow flex relative" 
            :class="[alignContentClass, justifyContentClass]" 
            ref="container"
        >
            <div 
                class="flex flex-wrap relative flex-none n-grid-container"
                :style="{width: props.width ? props.width/4 + 'rem' : '100%'}"
                :class="[alignClass, justifyClass, gapClass, props.contentClass]"
            >
                <slot name="content"/>
            </div>
        </div>
        <div class="flex-none">
            <slot name="bottom"/>
        </div>
    </div>
</template>

<style scoped>

</style>