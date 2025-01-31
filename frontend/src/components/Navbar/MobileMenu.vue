<template>
  <transition name="mobile-menu">
    <div 
      v-show="isOpen"
      class="mobile-menu-container"
      @click.self="$emit('close')"
    >
      <div class="mobile-menu-content">
        <button 
          @click="$emit('close')"
          class="close-button"
          aria-label="Close menu"
        >
          <svg class="close-icon" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <nav class="navigation">
          <ul class="menu-items">
            <li 
              v-for="section in sections"
              :key="section"
              class="menu-item"
            >
              <button
                @click="$emit('navigate', section)"
                class="nav-button"
              >
                {{ $t(`navbar.${section}`) }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    sections: {
      type: Array,
      required: true,
      validator: value => value.every(v => typeof v === 'string')
    }
  },
  emits: ['close', 'navigate']
}
</script>

<style lang="postcss">
.mobile-menu-container {
  @apply fixed inset-0 z-50 bg-black bg-opacity-50;
}

.mobile-menu-content {
  @apply bg-neutral-900 w-3/4 h-full ml-auto p-6 transform transition-transform;
}

.mobile-menu-enter-active .mobile-menu-content,
.mobile-menu-leave-active .mobile-menu-content {
  @apply transition-transform duration-300 ease-in-out;
}

.mobile-menu-enter-from .mobile-menu-content,
.mobile-menu-leave-to .mobile-menu-content {
  @apply translate-x-full;
}

.close-button {
  @apply p-2 ml-auto hover:bg-neutral-800 rounded-lg mb-8;
}

.close-icon {
  @apply w-6 h-6 text-white;
}

.menu-items {
  @apply space-y-6;
}

.nav-button {
  @apply w-full text-left px-4 py-2 text-white hover:text-neutral-300 
         transition-colors duration-300 relative overflow-hidden;
}

.nav-button::after {
  @apply content-[''] absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-300 
         transition-all duration-300;
}

.nav-button:hover::after {
  @apply w-full;
}
</style>