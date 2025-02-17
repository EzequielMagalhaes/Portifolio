<template>
    <div class="flex flex-col gap-5 py-10">
        <h1 class="text-5xl font-bold text-neutral-300 mb-5">{{ $t('projects.title') }}</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div class="col-span-2 h-[600px] p-3 rounded-lg bg-neutral-900 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-start project-card sm:col-span-1">
                <div class="flex justify-between items-center w-full circular-progress">
                  <img :src="currentProject.logo" :class="getCurrentProjectClass(currentProject.logo)" alt="project-logo">
                  <div class="relative flex justify-center items-center">
                    <div class="circular-progress-bar">
                      <svg class="progress-ring" width="50" height="50">
                        <circle class="progress-ring__circle" stroke="white" stroke-width="4" fill="transparent" r="22" cx="25" cy="25"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 class="text-3xl font-bold">{{ $t(currentProject.title) }}</h1>
                <p class="text-lg text-neutral-500">{{ $t(currentProject.description) }}</p>
                <p class="text-lg text-neutral-500">{{ $t(currentProject.subdescription) }}</p>
                <div class="flex justify-between items-center w-full">
                    <!-- STACK -->
                    <TechStack :stack="currentProject.stack" />
                    <!-- END STACK -->
                    <div class="flex gap-2 items-center text-xl">
                        <button @click="redirect" @mouseenter="showWhiteArrow('site')" @mouseleave="hideWhiteArrow('site')" id="goto-site" class="text-black bg-neutral-300 p-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-neutral-300">
                            <img id="site1" src="../../assets/project-icons/black_open_in_new_.svg" class="h-6" alt="arrow-site">
                            <img id="site2" src="../../assets/project-icons/white_open_in_new.svg" class="h-6 hidden" alt="arrow-site">
                        </button>
                    </div>
                </div>
                <!-- CAROUSEL -->
                <div class="flex justify-between items-center w-full">
                  <!-- PREV BUTTON -->
                  <button id="prev-image" @click="prevProject" @mouseenter="showWhiteArrow('left')" @mouseleave="hideWhiteArrow('left')" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                      <img id="left1" class="h-8" src="../../assets/project-icons/black_arrow_left.svg" alt="arrow-carousel">
                      <img id="left2" class="h-8 hidden absolute" src="../../assets/project-icons/white_arrow_left.svg" alt="arrow-carousel">
                  </button>
                  <!-- NEXT BUTTON -->
                  <!-- DOTS -->
                  <div class="flex gap-2 items-center">
                      <div v-for="(dot, index) in projects" :key="index" class="p-1 rounded-full cursor-pointer" :class="{'bg-neutral-300': index === currentIndex, 'bg-neutral-800': index !== currentIndex}" @click="goToProject(index)"></div>
                  </div>
                  <!-- END DOTS -->
                  <!-- NEXT BUTTON -->
                  <button id="next-image" @click="nextProject" @mouseenter="showWhiteArrow('right')" @mouseleave="hideWhiteArrow('right')" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                      <img id="right1" class="h-8" src="../../assets/project-icons/black_arrow_right.svg" alt="arrow-carousel">
                      <img id="right2" class="h-8 hidden absolute" src="../../assets/project-icons/white_arrow_right.svg" alt="arrow-carousel">
                  </button>
                </div>
                  <!-- END NEXT BUTTON -->
                <!-- END CAROUSEL -->
            </div>
            <div class="w-full h-[600px] md:h-[500px]">
              <Iframe :currentProject="projects[currentIndex]" class="h-full w-full"/>
            </div>
        </div>
    </div>
</template>

<script>
import { computePosition, shift, flip, offset } from "@floating-ui/dom";
import todoLogo from '../../assets/project-icons/project-logo.png';
import kanbanLogo from '../../assets/project-icons/kanban-logo.png';
import rpsLogo from '../../assets/project-icons/rock-paper-scissor-logo.png';
import TechStack from './TechStack.vue';
import Iframe from './Iframe.vue';

export default {
  components: {
    TechStack,
    Iframe,
  },
  data(){
    return{
      projects: [
        {
          logo: rpsLogo,
          title: 'projects.project1.title',
          description: 'projects.project1.description',
          subdescription: 'projects.project1.subdescription',
          stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
          site: 'https://rock-paper-scissors-umber-theta.vercel.app'
        },
        {
          logo: kanbanLogo,
          title: 'projects.project2.title',
          description: 'projects.project2.description',
          subdescription: 'projects.project2.subdescription',
          stack: ['React.js', 'TypeScript', 'Node.js', 'Chakra-ui', 'Vite', 'Git'],
          site: 'https://react-kanban-board-chi.vercel.app'
        },
        {
          logo: todoLogo,
          title: 'projects.project3.title',
          description: 'projects.project3.description',
          subdescription: 'projects.project3.subdescription',
          stack: ['Vue.js','Vuetify', 'Tailwind CSS', 'JavaScript', 'Jest', 'Docker', 'Git'],
          site: 'https://vue-to-do-list-ochre.vercel.app/'
        },
        
        // Adicione mais projetos aqui
      ],
      currentIndex: 0,
      timer: null,
      progressValue: 0,
      progressInterval: null
    }
  },
  computed: {
    currentProject() {
      return this.projects[this.currentIndex];
    }
  },
  methods: {
    getCurrentProjectClass(logo) {
      return logo === kanbanLogo ? 'h-20 p-2' : 'h-20';
    },
    redirect() {
      window.open(this.currentProject.site, '_blank');
    },
    showWhiteArrow(id) {
      document.getElementById(`${id}1`).style.display = 'none';
      document.getElementById(`${id}2`).style.display = 'block';
    },
    hideWhiteArrow(id) {
      document.getElementById(`${id}1`).style.display = 'block';
      document.getElementById(`${id}2`).style.display = 'none';
    },
    prevProject() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      this.resetTimer();
      this.resetProgress();
    },
    nextProject() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.resetTimer();
      this.resetProgress();
    },
    goToProject(index) {
      this.currentIndex = index;
      this.resetTimer();
      this.resetProgress();
    },
    startTimer() {
      this.timer = setInterval(this.nextProject, 10000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    resetTimer() {
      this.stopTimer();
      this.startTimer();
    },
    startProgress() {
      const circle = document.querySelector('.progress-ring__circle');
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      const setProgress = (percent) => {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      };

      const updateProgress = () => {
        if (this.progressValue < 100) {
          this.progressValue += 1;
          setProgress(this.progressValue);
        } else {
          clearInterval(this.progressInterval);
        }
      };

      this.progressInterval = setInterval(updateProgress, 100);
    },
    resetProgress() {
      clearInterval(this.progressInterval);
      this.progressValue = 0;
      this.startProgress();
    }
  },
  mounted() {
    this.startTimer();
    this.startProgress();
  },
  beforeDestroy() {
    this.stopTimer();
    clearInterval(this.progressInterval);
  },
};
</script>

<style scoped>
button:hover #site1,
button:hover #left1,
button:hover #right1 {
  display: none;
}

button:hover #site2,
button:hover #left2,
button:hover #right2 {
  display: block;
}

.circular-progress-bar {
  position: relative;
  width: 50px;
  height: 50px;
}

.progress-ring {
  transform: rotate(-45deg);
  transform-origin: 50% 50%;
}

.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-45deg);
  transform-origin: 50% 50%;
}
</style>
