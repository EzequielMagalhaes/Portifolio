<template>
  <div class="relative">
    <nav 
      class="flex justify-between items-center px-4 py-3 md:px-8"
      aria-label="Main navigation"
    >
      <!-- Logo -->
      <h1 
        class="text-3xl md:text-4xl text-neutral-300 font-bold tracking-[0.10em] cursor-pointer"
        @click="scrollToSection('home')"
        role="heading"
        aria-level="1"
      >
        {{ $t('title') }}
      </h1>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6 lg:space-x-10" role="menubar">
        <li 
          v-for="section in sections"
          :key="section"
          role="menuitem"
          tabindex="0"
          class="nav-item"
          :class="{ 'active-section': activeSection === section }"
          @click="scrollToSection(section)"
          @keyup.enter="scrollToSection(section)"
        >
          {{ $t(`navbar.${section}`) }}
        </li>
        <li role="menuitem">
          <LanguageSwitcher :current-language="currentLanguage" @toggle="toggleLanguage"/>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
       <button
        class="md:hidden p-2 rounded-lg hover:bg-neutral-800"
        aria-label="Toggle menu"
        @click="toggleMobileMenu"
      >
        <svg class="w-8 h-8 text-neutral-300" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <MobileMenu 
      :is-open="showMobileMenu"
      :sections="sections"
      :active-section="activeSection"
      @close="showMobileMenu = false"
      @navigate="handleNavigation"
    />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import MobileMenu from './MobileMenu.vue' // Import FIRST
import { useSectionObserver } from '../Navbar/useSectionObserver'

export default {
  components: {
    MobileMenu, // Proper component registration
    LanguageSwitcher
  },

  setup() {
    const { locale } = useI18n()
    const sections = ['about', 'projects', 'experience', 'contact']
    const showMobileMenu = ref(false)
    const currentLanguage = ref(locale.value === 'en' ? 'English' : 'Português')
    const { activeSection, initObserver, cleanupObserver } = useSectionObserver(sections)

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      showMobileMenu.value = false
    }

    const handleNavigation = (section) => {
      scrollToSection(section)
      showMobileMenu.value = false
    }

    const toggleMobileMenu = () => {
      showMobileMenu.value = !showMobileMenu.value
    }

    const toggleLanguage = () => {
      locale.value = locale.value === 'en' ? 'pt' : 'en'
      currentLanguage.value = locale.value === 'en' ? 'English' : 'Português'
    }

    onMounted(() => {
      initObserver()
    })

    onBeforeUnmount(() => {
      cleanupObserver()
    })

    return {
      sections,
      activeSection,
      showMobileMenu,
      currentLanguage,
      scrollToSection,
      handleNavigation,
      toggleMobileMenu,
      toggleLanguage
    }
  }
}
</script>

<style lang="postcss">
nav {
  min-height: 60px;
}

.nav-item {
  @apply relative cursor-pointer px-3 py-2 text-neutral-300 
         hover:text-white transition-colors duration-300
}

.nav-item::after {
  @apply content-[''] absolute bottom-0 left-1/2 w-0 h-0.5 bg-white 
         transition-all duration-300;
}

.nav-item:hover::after,
.nav-item.active-section::after {
  @apply left-0 w-full;
}
</style>