<template>
  <footer class="flex justify-between items-center w-full py-3">
    <p class="text-neutral-500">Terms & Conditions | Privacy Policies</p>
    <div class="flex gap-2">
        <button @click="redirectInsta" id="instagram-link">
            <img src="../assets/instagram-icon.png" class="h-10 bg-neutral-300 p-2 rounded-full hover:bg-neutral-500 cursor-pointer" alt="instagram-icon">
        </button>
        <button @click="redirectGithub" id="instagram-link">
            <img src="../assets/github-icon.png" class="h-10 bg-neutral-300 p-2 rounded-full hover:bg-neutral-500 cursor-pointer" alt="github-icon">
        </button>
        <button @click="redirectLinkedin" id="instagram-link">
            <img src="../assets/linkedin-icon.png" class="h-10 bg-neutral-300 p-2 rounded-full hover:bg-neutral-500 cursor-pointer" alt="linkedin-icon">
        </button>
        </div>
    <p class="text-neutral-500">&copy; 2024 Ezequiel All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
    methods: {
        redirectInsta() {
            window.open('https://www.instagram.com/zekiell._/','_blank');
        },
        redirectGithub() {
            window.open('https://github.com/EzequielMagalhaes','_blank');
        },
        redirectLinkedin() {
            window.open('https://www.linkedin.com/in/zekiell/','_blank');
        }
    }
}
</script>

<style>

</style>