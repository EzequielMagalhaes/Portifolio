<template>
    <div class="flex flex-col gap-5 py-10">
        <h1 class="text-3xl font-bold text-neutral-300 mb-5">My Projects</h1>
        <div class="grid grid-cols-2 gap-5">
            <div class="h-[500px] p-5 rounded-lg bg-neutral-900 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-start">
                <img src="../assets/project-logo.png" class="h-20 p-3 rounded-xl" alt="project-logo">
                <h1 class="text-2xl font-bold">Título do projeto</h1>
                <p class="text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.</p>
                <p class="text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.</p>
                <div class="flex justify-between items-center w-full">
                    <!-- STACK -->
                    <div class="flex gap-2 items-start align-middle stack-container">
                        <img src="../assets/vuejs-icon.svg" class="h-10 bg-neutral-900 p-2 rounded-lg stack-item" alt="Vue.js">
                        <img src="../assets/vuetify-icon.svg" class="h-10 bg-neutral-900 p-2 rounded-lg stack-item" alt="Vuetify">
                        <img src="../assets/javascript-icon.svg" class="h-10 bg-neutral-900 p-2 rounded-lg stack-item" alt="JavaScript">
                        <img src="../assets/tailwindcss-icon.svg" class="h-10 bg-neutral-900 p-2 rounded-lg stack-item" alt="Tailwind CSS">
                        <img src="../assets/docker-icon.svg" class="h-12 bg-neutral-900 p-2 rounded-lg stack-item" alt="Docker">
                    </div>
                    <!-- END STACK -->
                    <div class="flex gap-2 items-center text-xl">
                        <button @click="redirect" id="goto-site" class="text-black bg-neutral-300 p-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-neutral-300">
                            <span class="">Go to Site</span>
                            <img id="site1" src="../assets/black-site-arrow.png" class="h-8" alt="arrow-site">
                            <img id="site2" src="../assets/white-site-arrow.png" class="h-8 hidden" alt="arrow-site">
                        </button>
                    </div>
                </div>
                <!-- CAROUSEL -->
                <div class="flex justify-between items-center w-full">
                    <!-- PREV BUTTON -->
                    <button id="prev-image" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                        <img id="left1" class="h-8" src="../assets/black-left-arrow.png" alt="arrow-carousel">
                        <img id="left2" class="h-8 hidden absolute" src="../assets/white-left-arrow.png" alt="arrow-carousel">
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
                    <button id="next-image" class="bg-neutral-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                        <img id="right1" class="h-8" src="../assets/black-right-arrow.png" alt="arrow-carousel">
                        <img id="right2" class="h-8 hidden absolute" src="../assets/white-right-arrow.png" alt="arrow-carousel">
                    </button>
                    <!-- END NEXT BUTTON -->
                </div>
                <!-- END CAROUSEL -->
            </div>
            <div class="h-[500px] p-5 rounded-lg bg-[url('/src/assets/to-do-list.png')] bg-center bg-cover bg-no-repeat"></div>
        </div>
    </div>
</template>

<script>
import { computePosition, shift, flip, offset } from "@floating-ui/dom";
export default {
  methods: {
    redirect() {
      window.open('https://vue-to-do-list-ochre.vercel.app/', '_blank');
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