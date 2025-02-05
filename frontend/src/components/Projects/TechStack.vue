<template>
  <div class="flex items-start align-middle relative flex gap-2">
    <div 
      v-for="(tech, index) in stack" 
      :key="index"
      class="relative transition-transform duration-300 ease hover:scale-[1.7] hover:m-0.5"
      @mouseenter="showTooltip(index)"
      @mouseleave="hideTooltip(index)"
    >
      <img 
        :src="getStackIcon(tech)" 
        :class="getStackClass(tech)"
        class="bg-neutral-900 p-1 rounded-lg filter grayscale transition-all duration-300 hover:filter-none h-[2.3rem]"
        :alt="tech"
      >
      <transition name="fade">
        <div 
          v-if="activeTooltip === index"
          ref="tooltip"
          class="absolute bg-neutral-800 text-neutral-200 px-1 py-0.5 rounded text-xs whitespace-nowrap scale-90 left-1/2 -translate-x-1/2 bottom-full mb-2 max-w-24 overflow-hidden text-ellipsis pointer-events-none z-50"
        >
          {{ tech }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
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
            offset(5),
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>