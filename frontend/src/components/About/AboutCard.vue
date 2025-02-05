<template>
  <div 
    class="rounded-xl p-5 bg-neutral-900 h-full flex flex-col justify-between about-card"
    role="region"
    :aria-label="t(titleKey)"
    tabindex="0"
  >
    <div class="space-y-3">
      <img 
        :src="cardImg" 
        :class="['h-72 mx-auto rounded-3xl', imageClass]"
        :alt="t(titleKey)"
        loading="lazy"
        :aria-describedby="'desc-' + key"
      >
      <h1 class="text-3xl font-bold text-grey-300 mb-5">
        {{ t(titleKey) }}
      </h1>
    </div>
    <p 
      class="text-neutral-500 text-lg mb-2"
      :id="'desc-' + key"
    >
      {{ t(descriptionKey) }}
    </p>
    <p class="sr-only">
      {{ t('about.aria.cardDescription', { title: t(titleKey) }) }}
    </p>

    <div class="mt-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  titleKey: {
    type: String,
    required: true
  },
  descriptionKey: {
    type: String,
    required: true
  },
  cardImg: {
    type: String,
    required: true
  },
  imageClass: {
    type: String,
    default: ''
  },
  key: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
.about-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
