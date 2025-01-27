<template>
  <footer class="flex justify-between items-center w-full">
    <p class="text-neutral-500">Terms & Conditions | Privacy Policies</p>
    <div class="flex gap-2">
        <button @click="redirectLinkedin" id="instagram-link">
            <img src="../assets/linkedin-logo.svg" class="h-11 filter grayscale hover:filter-none rounded-full cursor-pointer" alt="linkedin-logo">
        </button>
        <button @click="redirectGithub" id="instagram-link">
            <img src="../assets/github-logo.svg" class="h-9 bg-neutral-700 filter grayscale hover:filter-none rounded-full hover:bg-neutral-300 cursor-pointer" alt="github-logo">
        </button>
        <button @click="redirectInsta" id="instagram-link">
            <img src="../assets/instagram-logo.svg" class="h-11 filter grayscale hover:filter-none rounded-full cursor-pointer" alt="instagram-logo">
        </button>
        </div>
    <p class="text-neutral-500">&copy; 2024 Ezequiel All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
    methods: {
        redirectLinkedin() {
            window.open('https://www.linkedin.com/in/zekiell/','_blank');
        },
        redirectGithub() {
            window.open('https://github.com/EzequielMagalhaes','_blank');
        },
        redirectInsta() {
            window.open('https://www.instagram.com/zekiell._/','_blank');
        }
    }
}
</script>

<style>

</style>