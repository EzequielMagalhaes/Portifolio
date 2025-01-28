<template>
<div class="py-10 flex flex-col gap-5">
    <h1 class="text-5xl font-bold text-neutral-300">{{ $t('experience.title') }}</h1>
    <div class="flex gap-5">
        <div class=" flex gap-5 h-[850px] rounded-lg p-3 bg-neutral-900">
            <!-- Experience Icons -->
            <div class="flex flex-col w-1/5 gap-5 py-8 justify-around items-center">
                <img v-for="(experience, index) in experiences" :key="index" :src="experience.logo" :class="['h-32 bg-neutral-900 rounded-xl', index === 2 ? 'w-32' : '']" alt="">
                <div class="p-[1px] h-36 bg-neutral-800" v-if="index < experiences.length - 1"></div>
            </div>
            <!-- End Experience Icons -->
            <!-- Experience Text -->
            <div class="flex flex-col w-4/5 justify-between items-center gap-4">
                <div class="p-3" v-for="(experience, index) in experiences" :key="index">
                    <h1 class="text-3xl font-bold">{{ $t(experience.workName) }}</h1>
                    <p class="text-neutral-400 text-2xl">{{ $t(experience.workEnterprise) }}, {{ $t(experience.workStartDate) }} - {{ $t(experience.workEndDate) }}</p>
                    <p class="text-neutral-500 text-xl">{{ $t(experience.description) }}</p>
                    <div class="flex gap-3 py-2">
                        <h1 class="text-neutral-200 text-lg">Tasks:</h1>
                        <p class="text-neutral-400 text-sm py-1">{{ $t(experience.tasks) }}</p>
                    </div>
                </div>
            </div>
            <!-- End Experience Text -->
        </div>
    </div>
</div>
</template>

<script>
import experienceLogo1 from '../assets/TI-suport.png';
import experienceLogo2 from '../assets/ferragens-pontual.png';
import experienceLogo3 from '../assets/pgdf.png';

const experienceLogo = [experienceLogo1, experienceLogo2, experienceLogo3];

export default {
    data(){
        return{
            experiences: [
                {
                    workEnterprise: 'experience.work1.workEnterprise',
                    workName: 'experience.work1.workName',
                    workStartDate: 'experience.work1.workStartDate',
                    workEndDate: 'experience.work1.workEndDate',
                    description: 'experience.work1.description',
                    logo: experienceLogo[0],
                    tasks: 'experience.work1.tasks'
                },
                {
                    workEnterprise: 'experience.work2.workEnterprise',
                    workName: 'experience.work2.workName',
                    workStartDate: 'experience.work2.workStartDate',
                    workEndDate: 'experience.work2.workEndDate',
                    description: 'experience.work2.description',
                    logo: experienceLogo[1],
                    tasks: 'experience.work2.tasks'
                },
                {
                    workEnterprise: 'experience.work3.workEnterprise',
                    workName: 'experience.work3.workName',
                    workStartDate: 'experience.work3.workStartDate',
                    workEndDate: 'experience.work3.workEndDate',
                    description: 'experience.work3.description',
                    logo: experienceLogo[2],
                    tasks: 'experience.work3.tasks'
                }
            ]
        }
    }
}
</script>