<template>
  <div class="flex items-start align-middle stack-container">
    <div 
      v-for="(tech, index) in stack" 
      :key="index"
      class="stack-item-wrapper"
      @mouseenter="showTooltip(index)"
      @mouseleave="hideTooltip(index)"
    >
      <img 
        :src="getStackIcon(tech)" 
        :class="getStackClass(tech)"
        class="tech-icon"
        :alt="tech"
      >
      <transition name="fade">
        <div 
          v-if="activeTooltip === index"
          ref="tooltip"
          class="tooltip"
        >
          {{ tech }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { computePosition, offset, flip, shift } from '@floating-ui/dom'
import { useTechIcons } from './composables/useTechIcons'

export default {
  props: {
    stack: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const activeTooltip = ref(-1)
    const tooltipElements = ref([])
    const { getStackIcon, getStackClass } = useTechIcons()

    const showTooltip = async (index) => {
      activeTooltip.value = index
      await updatePosition(index)
    }

    const hideTooltip = () => {
      activeTooltip.value = -1
    }

    const updatePosition = async (index) => {
      await nextTick()
      const icon = document.querySelectorAll('.tech-icon')[index]
      const tooltip = tooltipElements.value[index]

      if (icon && tooltip) {
        computePosition(icon, tooltip, {
          placement: 'top',
          middleware: [
            offset(10),
            flip(),
            shift({ padding: 5 }),
          ],
        }).then(({ x, y }) => {
          Object.assign(tooltip.style, {
            left: `${x}px`,
            top: `${y}px`,
          })
        })
      }
    }

    onMounted(() => {
      window.addEventListener('resize', updatePosition)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updatePosition)
    })

    return {
      activeTooltip,
      tooltipElements,
      getStackIcon,
      getStackClass,
      showTooltip,
      hideTooltip
    }
  }
}
</script>

<style lang="postcss">
.stack-container {
  position: relative;
  display: flex;
  gap: 0.5rem;
}

.stack-item-wrapper {
  position: relative;
  transition: transform 0.3s ease;
}

.tech-icon {
  @apply bg-neutral-900 p-1 rounded-lg grayscale transition-all duration-300;
  height: 2.3rem;
}

.tech-icon:hover {
  @apply grayscale-0;
}

.stack-item-wrapper:hover {
  transform: scale(1.7);
  margin: 0 0.5rem;
  z-index: 10;
}

.tooltip {
  @apply absolute bg-neutral-800 text-neutral-200 px-2 py-1 rounded text-sm whitespace-nowrap;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
