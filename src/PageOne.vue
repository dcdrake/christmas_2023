<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter();

</script>

<template>
    <div class="flex flex-row w-full h-screen justify-evenly items-center">
        <div class="flex flex-col space-y-8">
            <span class="lg:text-5xl text-3xl text-slate-700">Open present &#x1F436;</span>
            <button class="border border-blue-600 rounded-xl p-2 bg-blue-600 text-slate-50 text-lg hover:bg-blue-500"
                @click="router.push({ path: 'page-two' })">
                <div class="flex flex-row justify-center space-x-2 items-center">
                    <span class="text-xl">Next</span>
                    <ArrowRightIcon class="h-7" />
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped></style>
