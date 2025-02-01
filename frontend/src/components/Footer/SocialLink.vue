<template>
  <a 
    :href="href" 
    target="_blank" 
    rel="noopener noreferrer"
    class="social-link"
    :class="specialClass"
  >
    <img 
      :src="icon" 
      :alt="alt"
      class="social-icon"
    />
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    icon: String,
    alt: String,
    specialClass: String
  }
}
</script>

<style lang="postcss">
.social-link {
  @apply rounded-full transition-all duration-300;
}

.social-icon {
  @apply h-10 w-10 filter grayscale hover:filter-none transition-all duration-300;
}
</style>