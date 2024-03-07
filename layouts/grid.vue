<script setup lang="ts">
    import { ref, computed } from 'vue';

    const props = withDefaults(defineProps<{
        contentClass?: string;
        layoutClass?: string;
        cols?: number | null;
        width?: number | null;
        gap?: number;
        align?: 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | 'evenly';
        justify?: 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | 'evenly';
    }>(), {
        contentClass: '',
        layoutClass: '',
        cols: null,
        gap: null,
        width: null,
        align: 'center',
        justify: 'center'
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

    const ncols = computed(() => {
        if (props.cols === null && container.value){
            const el = container.value.children.length || 1;
            if (el === 1){
                return 1
            }else if(el === 2 || el === 4){
                return 2
            }else if(el <= 7 || el === 9){
                return 3
            }
            return 4
        }else{
            return props.cols
        }
    })

    const alignClass = computed(() => {
        if (props.align === 'start'){
            return 'content-start'
        }else if (props.align === 'end'){
            return 'content-end'
        }else if (props.align === 'stretch'){
            return 'content-stretch'
        }else if (props.align === 'between'){
            return 'content-between'
        }else if (props.align === 'around'){
            return 'content-around'
        }else if (props.align === 'evenly'){
            return 'content-evenly'
        }
        return 'content-center'
    })

    const gapClass = computed(() => {
        if (props.gap === null){
            if (ncols.value === 2){
                return 'gap-8'
            }else{
                return 'gap-4'
            }
        }else{
            if (props.gap <= 1){
                return 'gap-1'
            }else if (props.gap <= 2){
                return 'gap-2'
            }else if (props.gap <= 4){
                return 'gap-4'
            }else if (props.gap <= 8){
                return 'gap-8'
            }else if (props.gap <= 12){
                return 'gap-12'
            }else if (props.gap <= 16){
                return 'gap-16'
            }else if (props.gap <= 20){
                return 'gap-20'
            }
            return 'gap-32'
        }
    })
</script>

<template>
    <div class="slidev-layout n-grid h-full flex flex-col" :class="props.layoutClass">
        <div class="flex-none slide-header">
            <slot />
        </div>
        <div 
            class="grow grid n-grid-container" 
            :class="[alignClass, justifyClass, gapClass, props.contentClass]" 
            :style="{'grid-template-columns': `repeat(${ncols}, minmax(0px, ${props.width? Number(props.width)/4 + 'rem' : '1fr'}))`}"
            ref="container"
        >
            <slot name="content"/>
        </div>
        <div class="flex-none">
            <slot name="bottom"/>
        </div>
    </div>
</template>
