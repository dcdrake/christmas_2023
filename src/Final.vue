<script setup>
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen w-full p-8 space-y-3">
        <span class="lg:text-5xl text-2xl text-slate-600">🎄 Merry Christmas! 🎄</span>
        <img src="https://media.giphy.com/media/9JrvLb0fnrn7k1ZjhX/giphy.gif" class="rounded-3xl" width="500"
            height="600" />

        <button class="border border-blue-600 rounded-xl p-2 bg-blue-600 text-slate-50 hover:bg-blue-500"
            @click="router.push({ path: '/' })">
            <div class="flex flex-row justify-center space-x-1 items-center">
                <span class="text-xs">Play again</span>
                <ArrowUturnLeftIcon class="h-4" />
            </div>
        </button>
    </div>
</template>

<style scoped></style>


