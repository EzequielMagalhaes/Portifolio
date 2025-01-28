<template>
  <nav class="flex justify-between items-center font-roboto">
    <h1 class="text-4xl text-neutral-300 font-bold tracking-[0.10em] cursor-pointer">{{ $t('title') }}</h1>
    <ul class="flex space-x-10" id="navbar">
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('about')">{{ $t('navbar.about') }}</li>
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('projects')">{{ $t('navbar.projects') }}</li>
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('experience')">{{ $t('navbar.experience') }}</li>
      <li class="cursor-pointer hover:bg-neutral-300 hover:text-black rounded-full p-2" @click="scrollToSection('contact')">{{ $t('navbar.contact') }}</li>
      <li class="relative cursor-pointer" @click="toggleLanguage">
        <img src="/src/assets/translate.svg" class="h-8" id="translate" alt="translate">
        <img src="/src/assets/black-translate.svg" class="h-8 absolute top-0 left-0 opacity-0 bg-gray-300 rounded-lg" id="black-translate" alt="black-translate">
        <div v-if="showTooltip" ref="tooltip" class="tooltip">{{ currentLanguage }}</div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computePosition, offset, flip, shift } from '@floating-ui/dom';

export default {
  data() {
    return {
      showTooltip: false,
      currentLanguage: this.$i18n.locale === 'en' ? 'English' : 'Português'
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleLanguage() {
      const currentLocale = this.$i18n.locale;
      this.$i18n.locale = currentLocale === 'en' ? 'pt' : 'en';
      this.currentLanguage = this.$i18n.locale === 'en' ? 'English' : 'Português';

      // Exibe o tooltip e atualiza a posição
      this.showTooltip = false; // Garante que o estado seja reiniciado
      this.$nextTick(() => {
        this.showTooltip = true;
        this.updateTooltipPosition();
      });

      // Oculta o tooltip após 2 segundos
      setTimeout(() => {
        this.showTooltip = false;
      }, 2000);
    },
    updateTooltipPosition() {
      const button = document.getElementById('translate');
      const tooltip = this.$refs.tooltip;

      if (button && tooltip) {
        computePosition(button, tooltip, {
          placement: 'bottom',
          middleware: [offset(10), flip(), shift()],
        }).then(({ x, y }) => {
          Object.assign(tooltip.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      }
    }
  },
  watch: {
    showTooltip(newVal) {
      if (newVal) {
        this.updateTooltipPosition();
      }
    }
  }
}
</script>

<style scoped>
.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
}
</style>