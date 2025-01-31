<template>
  <nav class="flex justify-between items-center font-roboto">
    <h1 class="text-4xl text-neutral-300 font-bold tracking-[0.10em] cursor-pointer">{{ $t('title') }}</h1>
    <ul class="flex space-x-10" id="navbar">
      <li class="cursor-pointer nav-item" :class="{ 'active-section': activeSection === 'about' }" @click="scrollToSection('about')">{{ $t('navbar.about') }}</li>
      <li class="cursor-pointer nav-item" :class="{ 'active-section': activeSection === 'projects' }" @click="scrollToSection('projects')">{{ $t('navbar.projects') }}</li>
      <li class="cursor-pointer nav-item" :class="{ 'active-section': activeSection === 'experience' }" @click="scrollToSection('experience')">{{ $t('navbar.experience') }}</li>
      <li class="cursor-pointer nav-item" :class="{ 'active-section': activeSection === 'contact' }" @click="scrollToSection('contact')">{{ $t('navbar.contact') }}</li>
      <li class="relative cursor-pointer" @click="toggleLanguage">
        <img src="../assets/navbar-icons/black-translate.svg" class="h-8 invert" id="translate" alt="translate img">
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
      currentLanguage: this.$i18n.locale === 'en' ? 'English' : 'Português',
      activeSection: ''
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionId;
        setTimeout(() => {
          this.activeSection = '';
        }, 500);
      }
    },
    toggleLanguage() {
      const currentLocale = this.$i18n.locale;
      this.$i18n.locale = currentLocale === 'en' ? 'pt' : 'en';
      this.currentLanguage = this.$i18n.locale === 'en' ? 'English' : 'Português';

      this.showTooltip = false;
      this.$nextTick(() => {
        this.showTooltip = true;
        this.updateTooltipPosition();
      });

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
            left: `${x + button.offsetWidth / 2 - tooltip.offsetWidth / 2}px`,
            top: `${y}px`,
            transform: 'translateX(-25%)'
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

<style lang="postcss">
.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  transform: translateX(-25%);
}

.nav-item {
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.nav-item:hover::after,
.nav-item.active-section::after {
  left: 0;
  width: 100%;
}
</style>