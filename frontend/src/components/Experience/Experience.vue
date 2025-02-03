<template>
  <section class="mx-auto px-4 py-8 md:px-8 max-w-[1200px]">
    <h1 class="text-4xl md:text-5xl font-bold text-neutral-300 mb-8">
      {{ $t('experience.title') }}
    </h1>
    
    <div class="relative grid grid-cols-1 gap-8 md:gap-16">
      <div 
        v-for="(experience, index) in experiences"
        :key="experience.id"
        class="relative flex flex-col md:flex-row gap-6 md:gap-10"
      >
        <!-- Timeline Line -->
        <div 
          v-if="index < experiences.length - 1"
          class="absolute left-0 top-8 bottom-0 w-0.5 bg-transparent md:left-[80px] md:top-12 z-0 hidden md:block"
          aria-hidden="true"
        ></div>

        <!-- Experience Card -->
        <article 
          class="flex flex-col md:flex-row gap-6 p-6 bg-neutral-900 rounded-xl shadow-lg items-center relative z-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md md:p-8 md:gap-8 md:min-h-[180px]"
        >
          <img 
            :src="experience.logo" 
            :alt="$t(`experience.logoAlt.${experience.altText}`)"
            :class="['h-28 w-28 object-contain p-2 bg-neutral-800 rounded-lg self-center md:h-32 md:w-32', { 'w-36 md:w-40': experience.wideLogo }]"
          />

          <div class="flex-1 flex flex-col gap-4 md:pr-8">
            <h2 class="text-2xl font-semibold text-neutral-300">
              {{ $t(`experience.${experience.workEnterprise}`) }}
            </h2>
            <h3 class="text-xl text-neutral-400">
              {{ $t(`experience.${experience.workName}`) }}
            </h3>
            
            <div class="text-lg text-neutral-500">
              {{ $t(`experience.${experience.workStartDate}`) }} – {{ $t(`experience.${experience.workEndDate}`) }}
            </div>

            <p class="text-neutral-400 leading-relaxed">
              {{ $t(`experience.${experience.description}`) }}
            </p>

            <div class="mt-4 pt-4 border-t border-neutral-800">
              <h4 class="text-neutral-300 font-medium mb-2">
                {{ $t(`experience.${experience.taskLabel}`) }}
              </h4>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li 
                  v-for="(task, taskIndex) in experience.tasks"
                  :key="taskIndex"
                  class="text-neutral-400 text-sm"
                >
                  {{ $t(`experience.${task}`) }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import experienceLogo1 from '../../assets/experience-icons/TI-suport.png'
import experienceLogo2 from '../../assets/experience-icons/ferragens-pontual.png'
import experienceLogo3 from '../../assets/experience-icons/pgdf.png'

const experienceLogos = [experienceLogo1, experienceLogo2, experienceLogo3]

const experienceConfig = [
  {
    id: 1,
    wideLogo: true,
    altText: 'tiSupport',
    workEnterprise: 'work1.workEnterprise',
    workName: 'work1.workName',
    workStartDate: 'work1.workStartDate',
    workEndDate: 'work1.workEndDate',
    description: 'work1.description',
    taskLabel: 'work1.taskLabel',
    tasks: [
      'work1.tasks.task1',
      'work1.tasks.task2',
      'work1.tasks.task3',
      'work1.tasks.task4',
      'work1.tasks.task5',
      'work1.tasks.task6',
      'work1.tasks.task7',
      'work1.tasks.task8',
    ]
  },
  {
    id: 2,
    wideLogo: true,
    altText: 'ferragensPontual',
    workEnterprise: 'work2.workEnterprise',
    workName: 'work2.workName',
    workStartDate: 'work2.workStartDate',
    workEndDate: 'work2.workEndDate',
    description: 'work2.description',
    taskLabel: 'work2.taskLabel',
    tasks: [
      'work2.tasks.task1',
      'work2.tasks.task2',
      'work2.tasks.task3'
    ]
  },
  {
    id: 3,
    wideLogo: true,
    altText: 'pgdf',
    workEnterprise: 'work3.workEnterprise',
    workName: 'work3.workName',
    workStartDate: 'work3.workStartDate',
    workEndDate: 'work3.workEndDate',
    description: 'work3.description',
    taskLabel: 'work3.taskLabel',
    tasks: [
      'work3.tasks.task1',
      'work3.tasks.task2',
    ]
  }
];

export default {
  data() {
    return {
      experiences: experienceConfig.map(exp => ({
        ...exp,
        logo: experienceLogos[exp.id - 1]
      }))
    }
  }
}
</script>
