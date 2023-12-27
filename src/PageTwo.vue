<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
    <div class="flex flex-row w-full h-screen justify-evenly items-center">
        <button class="border border-blue-600 rounded-2xl p-3 bg-blue-600 text-slate-50 text-3xl"
            @click="router.push({ path: '/time' })">
            <div class="flex flex-row justify-center space-x-2 items-center">
                <span>Get Time Back</span>
                <ArrowRightIcon class="h-7" />
            </div>
        </button>
        <div class="flex flex-col space-y-2">
            <span class="text-8xl">&#x1F9DE; </span>
            <span class="text-xl text-slate-600"> choose wisely... </span>
        </div>
        <button class="border border-blue-600 rounded-2xl p-3 bg-blue-600 text-slate-50 text-3xl"
            @click="router.push({ path: '/relax' })">
            <div class="flex flex-row justify-center space-x-2 items-center">
                <span>Get Relaxation</span>
                <ArrowRightIcon class="h-7" />
            </div>
        </button>
    </div>
</template>

<style scoped></style>
