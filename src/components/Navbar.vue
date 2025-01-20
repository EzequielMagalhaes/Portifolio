<template>
  <nav class="flex justify-between items-center font-roboto">
    <h1 class="text-4xl text-neutral-300 font-bold tracking-[0.10em] cursor-pointer">&lt;Portifolio/&gt;</h1>
    <ul class="flex space-x-10">
        <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('home')">Home</li>
        <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('about')">About</li>
        <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('projects')">Projects</li>
        <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('contact')">Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>