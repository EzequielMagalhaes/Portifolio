<template>
  <div class="relative w-full md:w-[800px] max-w-[95vw] h-[640px] md:h-[670px] sm:h-[620px] bg-neutral-700 rounded-3xl">
    <!-- DOTS -->
    <div class="absolute top-4 left-6 flex gap-2 items-center"> 
      <div class="w-3 h-3 rounded-full bg-red-400 shadow-lg shadow-red-glow"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-glow"></div>
      <div class="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-glow"></div>
    </div>
    <!-- DOTS -->
    <div class="terminal-content">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.terminal-content {
  @apply absolute inset-x-0 bottom-0 bg-neutral-900 rounded-b-2xl h-[calc(100%-40px)] p-6 md:p-8;
}
</style>