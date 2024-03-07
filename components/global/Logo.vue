<script setup lang="ts">
import { configs } from '@slidev/client/env.ts';
import { goFirst } from '@slidev/client/logic/nav.ts';
const departament = configs.departament || 'PPGEE'
</script>

<template>
    <a class="mt-8 mb-4 mx-auto cursor-pointer" @click="goFirst()">
    <div class="border-l-27 border-secondary pl-2 self-center relative">
        <div class="absolute inset-y-0 left--12px right-2 w-12px bg-primary" />
        <div class="absolute inset-y-0 left--6px w-6px bg-primary-700" />
        <svg class="w-16 fill-grays-700" version="1.1" viewBox="0 0 984.76 399.31" xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="a">
                    <path d="m0 2994.8v-2994.8h7385.7v2994.8z" />
                </clipPath>
            </defs>
            <g transform="matrix(1.3333 0 0 -1.3333 0 399.31)">
                <g transform="scale(.1)">
                    <g clip-path="url(#a)">
                        <path
                            d="m2395.3 698.6c0-274.83-224.18-499-499-499v-199.6c253.58 0 476.36 136.34 598.79 339.49v359.11zm199.59 0c0-274.83 224.2-499 499.08-499v-199.6c-253.71 0-476.42 136.34-598.88 339.49v359.11h99.8zm2395.4 1597.6c0 274.85 224.13 498.99 499.01 498.99v199.64c-253.65 0-476.46-136.38-598.82-339.5v-359.13h99.81zm-199.68-0.32h99.87v359.09c-122.39 203.15-345.24 339.5-598.91 339.5v-199.58c274.94 0 499.04-224.2 499.04-499.01zm0-1597c0-274.78-224.1-499.56-499.04-499.56v-199.02c384.84 0 698.72 313.89 698.72 698.58h-199.68zm2395.4 1596.9h199.73c0 384.79-313.87 698.6-698.75 698.6v-199.52c274.79 0 499.02-224.2 499.02-499.08zm-6986.3-1596.9h-199.61c0-384.69 313.82-698.58 698.63-698.58v199.63c-274.88 0-499.02 224.17-499.02 498.95zm2894.5 2295.5c-365.71 0-699.43-315.41-698.81-698.35h199.77c0 283.7 231.8 499.13 499.02 499.23-0.67 95-0.59 126.58 0.02 199.12zm1896.2-2794.6v-199.75h1197.7v998.28h1197.7v1297.4h-199.73v-1097.8h-998v1097.8h-199.64v-2095.9l-998.04-0.058zm499.01 2795 1197.6-0.42v-199.73l-1197.6 0.51zm-498.55-1855.2-0.46-440.79h-199.68v358l-1167.5 1169.4 139.93 141.49 1227.8-1228.1zm-2595.4 715.39 1227.7-1228.1 139.93 141.5-1167.9 1169.4v358.21h-199.77zm-2395.3 1139.4h2395.3v-199.52h-998.04v-2091.8h-199.65v2091.8h-998.01v-2096h-199.61zm698.63-2794.5h1197.9v-199.81h-1197.9zm2395.4 2794.4 1197.7 0.05v-199.73l-1197.7 0.61zm-0.03-2794.7 1197.7-0.723v-198.66l-1197.7 0.3125-0.03 199.07"
                            fill="fill-grays-700" fill-rule="evenodd" />
                    </g>
                </g>
            </g>
        </svg>
        <div class="bg-grays-400 h-1px w-full h-1px mt-6px mb-1px" />
        <p class="text-base text-grays-700 text-sm/tight">{{ departament }}</p>
    </div>
    </a>
</template>