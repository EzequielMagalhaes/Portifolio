<template>
<div class="py-10 flex flex-col gap-5">
    <h1 class="text-5xl font-bold text-neutral-300">My Work Experience</h1>
    <div class="flex gap-5">
        <div class=" flex gap-5 h-[850px] rounded-lg p-3 bg-neutral-900">
            <!-- Experience Icons -->
            <div class="flex flex-col w-1/5 gap-5 py-8 justify-around items-center">
                <img :src="experiences[0].logo" class="h-32 bg-neutral-900 rounded-xl" alt="">
                <div class="p-[1px] h-36 bg-neutral-800"></div>
                <img :src="experiences[1].logo" class="h-32 bg-neutral-900 rounded-xl" alt="">
                <div class="p-[1px] h-36 bg-neutral-800"></div>
                <img :src="experiences[2].logo" class="h-32 w-32 bg-neutral-900 rounded-xl" alt="">
            </div>
            <!-- End Experience Icons -->
            <!-- Experience Text -->
            <div class="flex flex-col w-4/5 justify-between items-center gap-4">
                <div class="p-3" v-for="(experience, index) in experiences" :key="index">
                    <h1 class="text-3xl font-bold">{{ experience.jobName }}</h1>
                    <p class="text-neutral-400 text-2xl">{{ experience.jobEnterprise }}, {{ experience.jobStartDate }} - {{ experience.jobEndDate }}</p>
                    <p class="text-neutral-500 text-xl">{{ experience.description }}</p>
                    <div class="flex gap-3 py-2">
                        <h1 class="text-neutral-200 text-lg">Tasks:</h1>
                        <p class="text-neutral-400 text-sm py-1">{{ experience.tasks }}</p>
                    </div>
                </div>
            </div>
            <!-- End Experience Text -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        experiences: {
        type: Array,
        required: true
        }
    }
}
</script>