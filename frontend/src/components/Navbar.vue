// filepath: /c:/Users/zekes/OneDrive/Área de Trabalho/PC - ZEKIEL/Projetos/Portifolio/frontend/src/components/Navbar.vue
<template>
  <nav class="flex justify-between items-center font-roboto">
    <h1 class="text-4xl text-neutral-300 font-bold tracking-[0.10em] cursor-pointer">{{ $t('title') }}</h1>
    <ul class="flex space-x-10" id="navbar">
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('home')">{{ $t('navbar.home') }}</li>
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('about')">{{ $t('navbar.about') }}</li>
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('projects')">{{ $t('navbar.projects') }}</li>
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('contact')">{{ $t('navbar.contact') }}</li>
      <li class="relative cursor-pointer" @mouseenter="showBlackTranslate" @mouseleave="hideBlackTranslate" @click="toggleLanguage">
        <img src="/src/assets/translate.svg" class="h-8" id="translate" alt="translate">
        <img src="/src/assets/black-translate.svg" class="h-8 absolute top-0 left-0 opacity-0 bg-gray-300 rounded-lg" id="black-translate" alt="black-translate">
      </li>
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
    },
    showBlackTranslate() {
      document.getElementById('black-translate').style.opacity = '1';
    },
    hideBlackTranslate() {
      document.getElementById('black-translate').style.opacity = '0';
    },
    toggleLanguage() {
      const currentLocale = this.$i18n.locale;
      this.$i18n.locale = currentLocale === 'en' ? 'pt' : 'en';
    }
  }
}
</script>