<template>
    <div class="flex flex-col gap-5 py-10">
        <h1 class="text-3xl font-bold text-neutral-300 mb-5">My Projects</h1>
        <div class="grid grid-cols-2 gap-5">
            <div class="h-[500px] p-5 rounded-lg bg-neutral-900 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-start">
                <img :src="dataProject.logo" class="h-20 p-3 rounded-xl" alt="project-logo">
                <h1 class="text-2xl font-bold">{{ dataProject.title }}</h1>
                <p class="text-neutral-500">{{ dataProject.description }}</p>
                <p class="text-neutral-500">{{ dataProject.subdescription }}</p>
                <div class="flex justify-between items-center w-full">
                    <!-- STACK -->
                    <div class="flex gap-2 items-start align-middle stack-container">
                        <img v-for="(tech, index) in dataProject.stack" :key="index" :src="getStackIcon(tech)" :class="getStackClass(tech)" class="bg-neutral-900 p-2 rounded-lg stack-item" :alt="tech">
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
                    <button id="prev-image" @mouseenter="showWhiteArrow('left')" @mouseleave="hideWhiteArrow('left')" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                        <img id="left1" class="h-8" src="../assets/black_arrow_left.svg" alt="arrow-carousel">
                        <img id="left2" class="h-8 hidden absolute" src="../assets/white_arrow_left.svg" alt="arrow-carousel">
                    </button>
                    <!-- NEXT BUTTON -->
                    <!-- DOTS -->
                    <div class="flex gap-2 items-center">
                        <div class="p-1 rounded-full bg-neutral-300 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-neutral-800 cursor-pointer"></div>
                    </div>
                    <!-- END DOTS -->
                    <!-- NEXT BUTTON -->
                    <button id="next-image" @mouseenter="showWhiteArrow('right')" @mouseleave="hideWhiteArrow('right')" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                        <img id="right1" class="h-8" src="../assets/black_arrow_right.svg" alt="arrow-carousel">
                        <img id="right2" class="h-8 hidden absolute" src="../assets/white_arrow_right.svg" alt="arrow-carousel">
                    </button>
                    <!-- END NEXT BUTTON -->
                </div>
                <!-- END CAROUSEL -->
            </div>
            <div :style="{ backgroundImage: `url(${dataProject.image})` }" class="h-[500px] p-5 rounded-lg bg-center bg-cover bg-no-repeat object-scale-down"></div>
        </div>
    </div>
</template>

<script>
import { computePosition, shift, flip, offset } from "@floating-ui/dom";
import toDoListImage from '../assets/to-do-list.png';
import projectLogo from '../assets/project-logo.png';
import vueIcon from '../assets/vuejs-icon.svg';
import vuetifyIcon from '../assets/vuetify-icon.svg';
import javascriptIcon from '../assets/javascript-icon.svg';
import tailwindIcon from '../assets/tailwindcss-icon.svg';
import dockerIcon from '../assets/docker-icon.svg';

export default {
  data(){
    return{
      dataProject:{ //Projeto que vai ser passado via API
        logo: projectLogo,
        title: 'To Do List',
        description: 'A simple to-do list app built with Vue.js and Tailwind CSS.',
        subdescription: 'This project was built to practice Vue.js and Tailwind CSS. It is a simple to-do list app that allows users to add, edit, and delete tasks. The app is fully responsive and can be viewed on any device.',
        stack: ['Vue.js','Vuetify', 'Tailwind CSS', 'JavaScript', 'Docker'],
        image: toDoListImage,
        site: 'https://vue-to-do-list-ochre.vercel.app/'
      }
    }
  },
  methods: {
    getStackIcon(tech) {
      switch (tech) {
        case 'Vue.js':
          return vueIcon;
        case 'Vuetify':
          return vuetifyIcon;
        case 'JavaScript':
          return javascriptIcon;
        case 'Tailwind CSS':
          return tailwindIcon;
        case 'Docker':
          return dockerIcon;
        default:
          return '';
      }
    },
    getStackClass(tech) {
      return tech === 'Docker' ? 'h-12' : 'h-10';
    },
    redirect() {
      window.open(this.dataProject.site, '_blank');
    },
    showWhiteArrow(id) {
      document.getElementById(`${id}1`).style.display = 'none';
      document.getElementById(`${id}2`).style.display = 'block';
    },
    hideWhiteArrow(id) {
      document.getElementById(`${id}1`).style.display = 'block';
      document.getElementById(`${id}2`).style.display = 'none';
    }
  },
  mounted() {
    const stackItems = document.querySelectorAll(".stack-item");

    stackItems.forEach((item) => {
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
          middleware: [offset(10), flip(), shift()]
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
            pointerEvents: "none"
          });
        });
      };

      const removeTooltip = () => {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
      };

      item.addEventListener("mouseenter", showTooltip);
      item.addEventListener("mousemove", updateTooltipPosition);
      item.addEventListener("mouseleave", removeTooltip);
    });
  }
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