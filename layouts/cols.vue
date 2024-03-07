<script setup lang="ts">
import { useSlots, computed } from 'vue';

const props = defineProps<{
  contentClass?: string;
  layoutClass?: string;
  widths?: string | number;
  divider?: boolean | string;
  align?: 'start' | 'center' | 'end' | 'stretch'
}>()

const alignClass = computed(() => {
  if (props.align === 'center'){
    return 'content-center'
  }else if (props.align === 'end'){
    return 'content-end'
  }else if (props.align === 'stretch'){
    return 'content-stretch'
  }
  return 'content-start'
})

const slots = Object.keys(useSlots()).filter((slot) => slot !== 'default' && slot !== 'bottom');

const colWidths = computed(() => {
  const widths = (typeof props.widths === 'number') ? [props.widths] : (
    typeof props.widths === 'string' ? props.widths.split('|').map((number) => Number(number.trim())) : (
      []
    )
  )
  let attr = ''
  for (let i=0; i < slots.length; i++){
    if (i < widths.length){
     attr += (i < slots.length - 1) ? `minmax(0, ${widths[i]}fr) ` : `minmax(0, ${widths[i]}fr)`
    }else{
     attr += (i < slots.length - 1) ? 'minmax(0, 1fr) ': 'minmax(0, 1fr)'
    }
  }
  return attr;
})
</script>

<template>
    <div class="slidev-layout n-cols h-full flex flex-col" :class="props.layoutClass">
        <div class="flex-none slide-header">
            <slot />
        </div>
        <div 
          class="grow grid col-container"
          :class="[slots.length > 2 ? 'gap-4' : 'gap-8']"
          :style="{'grid-template-columns': colWidths}"
        >
          <div 
            v-for="slot, index in slots" :key="index"
            class="grow" 
            :class="[`col-${slot}`, {'divider': index < slots.length - 1 && divider}, slots.length > 2 ? 'after:-right-2' : 'after:-right-4', props.contentClass]"
          >
            <div class="grid h-full" :class="alignClass">
              <slot :name="slot"/>
            </div>
          </div>
        </div>
        <div class="flex-none">
            <slot name="bottom"/>
        </div>
    </div>
</template>

<style scoped>
.divider{
  @apply relative;
}
.divider::after{
  content: "";
  @apply absolute w-1px inset-y-0 bg-grays-150; 
}
</style>