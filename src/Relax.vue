<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
    <div class="flex lg:flex-row flex-col w-full h-screen justify-evenly items-center">
        <div class="flex items-center">
            <span class="text-8xl">&#x1F9DE; </span>
            <span class="text-slate-600 text-2xl">What a nice time!</span>
        </div>

        <div class="flex flex-col items-center text-center space-y-2">
            <span class="text-slate-700 text-3xl">Good for 1 massage (by a pro, no BS) => then brunch</span>
            <div class="flex space-x-2 text-5xl pb-10">
                <span>💆‍♀️</span>
                <span>🍳</span>
            </div>
            <button class="border border-blue-600 rounded-xl p-2 bg-blue-600 text-slate-50 text-lg hover:bg-blue-500"
                @click="router.push({ path: '/final' })">
                <div class="flex flex-row justify-center space-x-2 items-center">
                    <span class="text-xl">Next</span>
                    <ArrowRightIcon class="h-7" />
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped></style>
