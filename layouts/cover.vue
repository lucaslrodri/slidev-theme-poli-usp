<script setup lang="ts">
import { configs } from '@slidev/client/env.ts'

const title = configs.title
const author = configs.author
const email = configs.email
const year = configs.year || new Date().getFullYear()
</script>

<template>
  <div class="slidev-layout cover h-full flex flex-col justify-between py-4">
    <div class="h-25% pt-4">
      <Usp class="mx-auto w-24 fill-grays-700"/>
      <div class="mx-auto text-center text-base my-1 text-grays-700">Universidade de São Paulo</div>
    </div>
    <div v-if="title" class="w-full px-4">
      <slot />
    </div>
    <div v-if="author" class="-mt-6">
      <p>{{ author }}</p>
      <p class="italic" v-if="email">{{ email }}</p>
    </div>
    <p v-if="year">{{ year }}</p>
  </div>
</template>