<script setup>
import { ref } from 'vue'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'

const randomBit = ref(0);

const getNewGif = () => {
    randomBit.value = Math.floor(Math.random() * 3);
};

</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen w-full p-8 space-y-3">
        <span class="lg:text-5xl text-2xl text-slate-600">🎄 Merry Christmas! 🎄</span>

        <img v-if="randomBit === 0"
            src="https://media.giphy.com/media/ii75zfL0iIEfK9xspt/giphy.gif?cid=ecf05e47iese9tsgg5trn2fi434iw9hx8xrll55e7gnpwsh7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            class="rounded-3xl" width="500" height="600">
        <img v-else-if="randomBit === 1" src="https://media.giphy.com/media/9JrvLb0fnrn7k1ZjhX/giphy.gif"
            class="rounded-3xl" width="500" height="600" />
        <img v-else src="https://media.giphy.com/media/9w475hDWEPVlu/giphy.gif" class="rounded-3xl" width="500"
            height="600" />

        <button class="border border-blue-600 rounded-xl p-2 bg-blue-600 text-slate-50 hover:bg-blue-500"
            @click="getNewGif()">
            <div class="flex flex-row justify-center space-x-1 items-center">
                <span class="text-sm">🤔</span>
                <ArrowPathIcon class="h-5" />
            </div>
        </button>
    </div>
</template>

<style scoped></style>


