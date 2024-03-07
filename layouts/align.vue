<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  contentClass?: string;
  layoutClass?: string;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'stretch';
}>()

const alignClass = computed(()=>{
  if (props.align === 'start'){
    return 'content-start';
  }else if (props.align === 'end'){
    return 'content-end';
  }else if (props.align === 'stretch'){
    return 'content-stretch';
  }
  return 'content-center';
})

const justifyClass = computed(()=>{
  if (props.justify === 'start'){
    return 'justify-start';
  }else if (props.justify === 'end'){
    return 'justify-end';
  }else if (props.justify === 'stretch'){
    return 'justify-stretch';
  }
  return 'justify-center';
})
</script>

<template>
    <div class="slidev-layout align h-full flex flex-col" :class="props.layoutClass">
        <div class="flex-none slide-header">
            <slot />
        </div>
        <div class="grow grid" :class="[alignClass, justifyClass, props.contentClass]">
            <div>
              <slot name="content"/>
            </div>
        </div>
        <div class="flex-none">
            <slot name="bottom"/>
        </div>
    </div>
</template>