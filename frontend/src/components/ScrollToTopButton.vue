<template>
  <transition name="fade">
    <button 
      v-show="visible"
      @click="scrollToTop"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
      class="fixed bottom-5 right-5 bg-neutral-300 p-3 rounded-full hover:bg-black transition-colors duration-300"
    >
      <svg 
        class="w-6 h-6 transition-colors text-black"
        :class="{ 'text-white': isHovering }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

const isHovering = ref(false);

const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  })
}
</script>