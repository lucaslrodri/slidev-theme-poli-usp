<template>
    <div class="w-full flex justify-center">
        <p v-if="typeof $slots.default()[0].children === 'string'"><slot/></p>
        <slot v-else/>
    </div>
</template>