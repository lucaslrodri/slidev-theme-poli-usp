<script setup lang="ts">
import { computed } from 'vue';
import useTree from '../../composables/useTree';


const props = withDefaults(
  defineProps<{
    columns?: string | number
    start?: string | number
    maxDepth?: string | number
    longTitle?: boolean | string
    listClass?: string | string[]
    listStyle?: string | string[]
    mode?: 'all' | 'onlyCurrentTree' | 'onlySiblings'
  }>(),
  {
    columns: 1,
    start:  1,
    maxDepth: Number.POSITIVE_INFINITY,
    longTitle: false,
    listClass: '',
    listStyle: '',
    mode: 'all',
  },
)

const toc = computed(() => useTree(
    Number(props.maxDepth),
    props.longTitle,
    Number(props.start),
    props.mode,
    false
))
</script>

<template>
    <div>
        <div class="slidev-toc" :style="`column-count:${columns}`">
            <TableOfContentsList
            :level="1"
            :start="Number(start)"
            :list-style="listStyle"
            :list="toc"
            :list-class="listClass"
            />
        </div>
    </div>
  </template>