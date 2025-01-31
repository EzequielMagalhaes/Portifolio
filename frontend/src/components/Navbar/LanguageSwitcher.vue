<!-- LanguageSwitcher.vue -->
<template>
  <div class="relative">
    <button
      @click="toggleLanguage"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
      class="language-switcher-btn"
    >
      <img 
        :src="currentIcon" 
        class="h-6 w-6"
        alt="Language switcher"
      />
      <div v-if="showTooltip" class="tooltip">{{ currentLanguage }}</div>
    </button>
  </div>
</template>

<script>
import whiteIcon from '../../assets/navbar-icons/white_translate.svg';
import blackIcon from '../../assets/navbar-icons/black_translate.svg';

export default {
  props: {
    currentLanguage: String
  },
  data() {
    return {
      isHover: false,
      showTooltip: false,
      whiteIcon,
      blackIcon,
    }
  },
  computed: {
    currentIcon() {
      return this.isHover ? this.blackIcon : this.whiteIcon
    }
  },
  methods: {
    toggleLanguage() {
      this.$emit('toggle')
      this.showTooltip = true
      setTimeout(() => this.showTooltip = false, 2000)
    }
  }
}
</script>

<style lang="postcss">
.language-switcher-btn {
  @apply p-2 hover:bg-neutral-300 rounded-full transition-colors;
}

.tooltip {
  @apply absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded text-sm;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
  white-space: nowrap;
}
</style>