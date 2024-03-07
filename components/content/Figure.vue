<script setup lang="ts">
withDefaults(defineProps<{
    caption?: 'inside' | 'outside';
}
>(),{
    caption: 'inside'
})
</script>

<template>
    <figure :class="[caption]">
        <slot name="img"/>
        <figcaption><slot name="caption"/></figcaption>
    </figure>
</template>
