<template>
  <form @submit.prevent="handleSubmit" class="w-full">
    <div class="flex flex-col gap-2 my-1 w-full">
      <label class="text-neutral-500">{{ $t('contact.fullName') }}</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        :placeholder="$t('contact.placeholder.name')"
        class="w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg pl-10"
        required
      >
      </div>

    <div class="flex flex-col gap-2 my-1 w-full">
      <label class="text-neutral-500">{{ $t('contact.emailAdd') }}</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        :placeholder="$t('contact.placeholder.email')"
        class="w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg pl-10"
        :class="{ 'border-red-500': errors.email }"
        required
      >
      <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
    </div>

    <div class="flex flex-col gap-2 my-1 w-full">
      <label class="text-neutral-500">{{ $t('contact.yourMessage') }}</label>
      <textarea
        id="text"
        v-model="form.message"
        maxlength="500"
        :placeholder="$t('contact.placeholder.message')"
        class="w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg h-[200px] resize-none"
      ></textarea>
    </div>

    <p class="text-neutral-500 text-sm">{{ $t('contact.sizeText') }}</p>
    
    <button
      type="submit"
      class="send-button"
    >
      <span class="hidden md:inline">{{ $t('contact.sendBtn') }}</span>
      <svg
        class="md:hidden mb-1 w-6 h-6 -rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </button>
  </form>
</template>

<script>
import { validateEmailDomain } from './EmailService'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        email: ''
      },
      isHovering: false
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.validateForm()) return
      try {
        await this.$store.dispatch('submitContactForm', this.form)
        alert(this.$t('contact.response.successMessage'))
        this.resetForm()
      } catch (error) {
        console.error(error)
        alert(this.$t('contact.response.errors.errorMessage'))
      }
    },
    validateForm() {
      this.errors.email = validateEmailDomain(this.form.email, ['gmail.com', 'hotmail.com', 'yahoo.com'])
        ? ''
        : this.$t('contact.response.errors.invalidDomain')
      return !this.errors.email
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="postcss">
.send-button {
  @apply flex justify-center items-center w-full gap-2 p-2 rounded-full mt-2 
         bg-neutral-700 hover:bg-neutral-500 hover:text-neutral-900 
         transition-colors md:text-xl;
}

.input-field {
  @apply w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg
         focus:outline-none focus:border-neutral-300 transition-colors;
}

#email {
  background-image: url('../../assets/contact-icons/email.svg');
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 10px center;
  padding-left: 40px;
}

#name {
  background-image: url('../../assets/contact-icons/name.svg');
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 10px center;
  padding-left: 40px;
}

#text{
  background-image: url('../../assets/contact-icons/text.svg');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 10px 10px;
  padding-left: 40px;
  padding-top: 8px;
}
</style>

