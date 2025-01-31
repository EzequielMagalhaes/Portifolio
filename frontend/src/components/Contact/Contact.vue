<template>
  <div class="flex flex-col gap-4 py-5 px-4 md:px-0">
    <h1 class="text-5xl font-bold text-neutral-300 text-left">{{ $t('contact.title') }}</h1>
    <div class="flex justify-center items-center">
      <TerminalWindow>
        <h2 class="text-3xl font-bold text-neutral-300 md:mb-3">{{ $t('contact.description') }}</h2>
        <p class="text-neutral-500 text-sm md:mb-6">{{ $t('contact.subdescription') }}</p>
        <ContactForm />
      </TerminalWindow>
    </div>
  </div>
</template>

<script>
import TerminalWindow from '../Contact/TerminalWindow.vue'
import ContactForm from '../Contact/ContactForm.vue'

export default {
  components: {
    TerminalWindow,
    ContactForm
  },
}
</script>
