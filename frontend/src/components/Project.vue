<template>
    <div class="flex flex-col gap-5 py-5">
        <h1 class="text-5xl font-bold text-neutral-300 mb-5">{{ $t('projects.title') }}</h1>
        <div class="grid grid-cols-6 gap-3">
            <div class="col-span-2 h-[530px] p-3 rounded-lg bg-neutral-900 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-start">
                <img :src="currentProject.logo" :class="getCurrentProjectClass(currentProject.logo)" alt="project-logo">
                <h1 class="text-3xl font-bold">{{ $t(currentProject.title) }}</h1>
                <p class="text-lg text-neutral-500">{{ $t(currentProject.description) }}</p>
                <p class="text-lg text-neutral-500">{{ $t(currentProject.subdescription) }}</p>
                <div class="flex justify-between items-center w-full">
                    <!-- STACK -->
                    <div class="flex items-start align-middle stack-container">
                        <img v-for="(tech, index) in currentProject.stack" :key="index" :src="getStackIcon(tech)" :class="getStackClass(tech)" class="bg-neutral-900 p-1 rounded-lg stack-item filter grayscale hover:filter-none" :alt="tech">
                    </div>
                    <!-- END STACK -->
                    <div class="flex gap-2 items-center text-xl">
                        <button @click="redirect" @mouseenter="showWhiteArrow('site')" @mouseleave="hideWhiteArrow('site')" id="goto-site" class="text-black bg-neutral-300 p-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-neutral-300">
                            <img id="site1" src="../assets/black_open_in_new_.svg" class="h-6" alt="arrow-site">
                            <img id="site2" src="../assets/white_open_in_new.svg" class="h-6 hidden" alt="arrow-site">
                        </button>
                    </div>
                </div>
                <!-- CAROUSEL -->
                <div class="flex justify-between items-center w-full">
                    <!-- PREV BUTTON -->
                    <button id="prev-image" @click="prevProject" @mouseenter="showWhiteArrow('left')" @mouseleave="hideWhiteArrow('left')" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                        <img id="left1" class="h-8" src="../assets/black_arrow_left.svg" alt="arrow-carousel">
                        <img id="left2" class="h-8 hidden absolute" src="../assets/white_arrow_left.svg" alt="arrow-carousel">
                    </button>
                    <!-- NEXT BUTTON -->
                    <!-- DOTS -->
                    <div class="flex gap-2 items-center">
                        <div v-for="(dot, index) in projects" :key="index" class="p-1 rounded-full cursor-pointer" :class="{'bg-neutral-300': index === currentIndex, 'bg-neutral-800': index !== currentIndex}" @click="goToProject(index)"></div>
                    </div>
                    <!-- END DOTS -->
                    <!-- NEXT BUTTON -->
                    <button id="next-image" @click="nextProject" @mouseenter="showWhiteArrow('right')" @mouseleave="hideWhiteArrow('right')" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                        <img id="right1" class="h-8" src="../assets/black_arrow_right.svg" alt="arrow-carousel">
                        <img id="right2" class="h-8 hidden absolute" src="../assets/white_arrow_right.svg" alt="arrow-carousel">
                    </button>
                    <!-- END NEXT BUTTON -->
                </div>
                <!-- END CAROUSEL -->
            </div>
            <iframe
              :key="currentProject.site"
              :src="currentProject.site" 
              class="col-span-4 h-[624px] w-[950px] rounded-lg bg-center bg-cover bg-no-repeat object-scale-down relative bg-white"
              style="transform: scale(0.85); transform-origin: 0 0;">
            </iframe>
        </div>
    </div>
</template>

<script>
import { computePosition, shift, flip, offset } from "@floating-ui/dom";
import todoLogo from '../assets/project-logo.png';
import kanbanLogo from '../assets/kanban-logo.png';
import rpsLogo from '../assets/rock-paper-scissor-logo.png';
import htmlIcon from '../assets/stack-icons/html-icon.svg';
import cssIcon from '../assets/stack-icons/css-icon.svg';
import viteIcon from '../assets/stack-icons/vitejs-icon.svg';
import nodeJsIcon from '../assets/stack-icons/nodejs-icon.svg';
import vueIcon from '../assets/stack-icons/vuejs-icon.svg';
import reactIcon from '../assets/stack-icons/react-icon.svg';
import vuetifyIcon from '../assets/stack-icons/vuetify-icon.svg';
import javascriptIcon from '../assets/stack-icons/javascript-icon.svg';
import typeScriptIcon from '../assets/stack-icons/typescript-icon.svg';
import tailwindIcon from '../assets/stack-icons/tailwindcss-icon.svg';
import dockerIcon from '../assets/stack-icons/docker-icon.svg';
import chakraIcon from '../assets/stack-icons/chakra-icon.svg';
import babelIcon from '../assets/stack-icons/babel-icon.svg';
import jestIcon from '../assets/stack-icons/jest-icon.svg';
import gitIcon from '../assets/stack-icons/git-icon.svg';

export default {
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
          stack: ['React.js', 'Typescript', 'Node.js', 'Chakra-ui', 'Vite', 'Git'],
          site: 'https://react-kanban-board-chi.vercel.app'
        },
        {
          logo: todoLogo,
          title: 'projects.project3.title',
          description: 'projects.project3.description',
          subdescription: 'projects.project3.subdescription',
          stack: ['Vue.js','Vuetify', 'Tailwind CSS', 'JavaScript', 'Babel', 'Jest', 'Docker', 'Git'],
          site: 'https://vue-to-do-list-ochre.vercel.app/'
        },
        
        // Adicione mais projetos aqui
      ],
      currentIndex: 0,
      timer: null,
    }
  },
  computed: {
    currentProject() {
      return this.projects[this.currentIndex];
    }
  },
  methods: {
    getStackIcon(tech) {
      switch (tech) {
        case 'HTML':
          return htmlIcon;
        case 'CSS':
          return cssIcon;
        case 'Vite':
          return viteIcon;
        case 'Node.js':
          return nodeJsIcon;
        case 'React.js':
          return reactIcon;
        case 'Vue.js':
          return vueIcon;
        case 'Vuetify':
          return vuetifyIcon;
        case 'JavaScript':
          return javascriptIcon;
        case 'Typescript':
          return typeScriptIcon;
        case 'Tailwind CSS':
          return tailwindIcon;
        case 'Docker':
          return dockerIcon;
        case 'Chakra-ui':
          return chakraIcon;
        case 'Babel':
          return babelIcon;
        case 'Jest': 
          return jestIcon;
        case 'Git':
          return gitIcon;
        default:
          return '';
      }
    },
    getStackClass(tech) {
      return tech === 'Docker' || tech === 'Chakra-ui' ? 'h-10 scale-[1.2]' : 'h-10';
    },
    getCurrentProjectClass(logo) {
      return logo === kanbanLogo ? 'h-20 scale-[1.1] p-2' : 'h-20';
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
    },
    nextProject() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.resetTimer();
    },
    goToProject(index) {
      this.currentIndex = index;
      this.resetTimer();
    },
    updateTooltips() {
    // Remova todos os tooltips existentes
    document.querySelectorAll(".tooltip").forEach((tooltip) => tooltip.remove());

    const stackItems = document.querySelectorAll(".stack-item");

    stackItems.forEach((item) => {
      // Criação do tooltip
      let tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.innerText = item.alt;
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
      tooltip.style.position = "absolute";
      tooltip.style.top = "0";
      tooltip.style.left = "0";
      document.body.appendChild(tooltip);

      const showTooltip = () => {
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
        updateTooltipPosition();
      };

      const updateTooltipPosition = () => {
        if (!tooltip || !item) return;

        computePosition(item, tooltip, {
          placement: "top",
          middleware: [offset(10), flip(), shift()],
        }).then(({ x, y }) => {
          Object.assign(tooltip.style, {
            top: `${y}px`,
            left: `${x}px`,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "10px",
            borderRadius: "3px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            zIndex: 1000,
            pointerEvents: "none",
          });
        });
      };

      const removeTooltip = () => {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
      };

      // Remova event listeners antigos
      item.removeEventListener("mouseenter", showTooltip);
      item.removeEventListener("mousemove", updateTooltipPosition);
      item.removeEventListener("mouseleave", removeTooltip);

      // Adicione event listeners
      item.addEventListener("mouseenter", showTooltip);
      item.addEventListener("mousemove", updateTooltipPosition);
      item.addEventListener("mouseleave", removeTooltip);
      });
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
    }
  },
  mounted() {
    this.updateTooltips();
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  watch: {
  currentIndex() {
    this.$nextTick(() => {
      this.updateTooltips();
      });
    }
  },
};
</script>

<style scoped>
.stack-container {
  position: relative;
}

.stack-item {
  transition: transform 0.3s, margin 0.3s;
  position: relative;
}

.stack-item:hover {
  transform: scale(1.7);
  margin: 0 10px;
}

.tooltip {
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: absolute; 
  top: 0; 
  left: 0; 
}

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
</style>