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
                    <div class="flex gap-2 items-start">
                        <img src="../assets/vuejs-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg" alt="vue-icon">
                        <img src="../assets/vuetify-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg" alt="vuetify-icon">
                        <img src="../assets/javascript-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg" alt="javascript-icon">
                        <img src="../assets/tailwindcss-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg" alt="tailwindcss-icon">
                        <img src="../assets/docker-icon.svg" class="h-10 bg-gray-900 p-2 rounded-lg" alt="docker-icon">
                    </div>
                    <div class="flex gap-2 items-center text-xl cursor-pointer">
                        Check Live Site
                        <img src="../assets/arrow-site.png" class="h-10" alt="arrow-site">
                    </div>
                </div>
                <!-- CAROUSEL -->
                <div class="flex justify-between items-center w-full">
                    <img src="../assets/left-arrow.png" class="h-8 cursor-pointer" alt="arrow-carousel">
                    <div class="flex gap-2 items-center">
                        <div class="p-1 rounded-full bg-gray-300 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                        <div class="p-1 rounded-full bg-gray-800 cursor-pointer"></div>
                    </div>
                    <img src="../assets/right-arrow.png" class="h-8 cursor-pointer" alt="arrow-carousel">
                </div>
                <!-- CAROUSEL -->
            </div>
            <div class="h-[500px] p-5 rounded-lg bg-[url('/src/assets/to-do-list.png')] bg-center bg-cover bg-no-repeat"></div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>