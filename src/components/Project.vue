<template>
    <div class="flex flex-col gap-5 py-10">
        <h1 class="text-3xl font-bold text-gray-300 mb-5">My Projects</h1>
        <div class="grid grid-cols-2 gap-5">
            <div class="h-[500px] p-5 rounded-lg bg-gray-900 bg-center bg-cover bg-no-repeat flex flex-col justify-between items-start">
                <img src="../assets/project-logo.png" class="h-20 p-3 rounded-xl" alt="project-logo">
                <h1 class="text-2xl font-bold">Título do projeto</h1>
                <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.</p>
                <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.</p>
                <div class="flex justify-between items-center w-full">
                    <!-- STACK -->
                    <div class="flex gap-2 items-start align-middle">
                        <img src="../assets/vuejs-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg stack-item" alt="Vue.js">
                        <img src="../assets/vuetify-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg stack-item" alt="Vuetify">
                        <img src="../assets/javascript-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg stack-item" alt="JavaScript">
                        <img src="../assets/tailwindcss-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg stack-item" alt="Tailwind CSS">
                        <img src="../assets/docker-icon.svg" class="h-12 bg-gray-900 p-2 rounded-lg stack-item" alt="Docker">
                    </div>
                    <!-- END STACK -->
                    <div class="flex gap-2 items-center text-xl">
                        <button @click="redirect" id="goto-site" class="text-black bg-gray-300 p-2 rounded-lg flex items-center gap-2 hover:bg-black hover:text-gray-300">
                            <span class="">Go to Site</span>
                            <img id="site1" src="../assets/black-site-arrow.png" class="h-8" alt="arrow-site">
                            <img id="site2" src="../assets/white-site-arrow.png" class="h-8 hidden" alt="arrow-site">
                        </button>
                    </div>
                </div>
                <!-- CAROUSEL -->
                <div class="flex justify-between items-center w-full">
                    <!-- PREV BUTTON -->
                    <button id="prev-image" class="bg-gray-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
                        <img id="left1" class="h-8" src="../assets/black-left-arrow.png" alt="arrow-carousel">
                        <img id="left2" class="h-8 hidden absolute" src="../assets/white-left-arrow.png" alt="arrow-carousel">
                    </button>
                    <!-- NEXT BUTTON -->
                    <!-- DOTS -->
                    <div class="flex gap-2 items-center">
                        <div class="p-1 rounded-full bg-gray-300 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                    </div>
                    <!-- END DOTS -->
                    <!-- NEXT BUTTON -->
                    <button id="next-image" class="bg-gray-300 h-10 w-10 cursor-pointer hover:bg-black rounded-full flex items-center justify-center relative">
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
export default {
  methods: {
    redirect() {
        window.open('https://vue-to-do-list-ochre.vercel.app/','_blank');
    }
  }
}
</script>

<style scoped>
.stack-item {
    transition: transform 0.3s, margin 0.3s;
    position: relative;
}

.stack-item:hover {
    transform: scale(1.7);
    margin: 0 10px;
}

.stack-item:hover::after {
    content: attr(alt);
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 12px;
    white-space: nowrap;
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