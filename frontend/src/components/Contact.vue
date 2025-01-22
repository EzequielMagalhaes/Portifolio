<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold text-neutral-300">Contact me</h1>
    <div class="flex justify-center items-center">
        <div class="relative flex justify-center items-end rounded-3xl bg-neutral-700 h-[620px] w-[800px]">
            <!-- DOTS -->
            <div class="absolute top-4 left-6 flex gap-2 items-center">
                <div class="p-1 rounded-full bg-red-400 shadow-lg shadow-red-glow"></div>
                <div class="p-1 rounded-full bg-yellow-400 shadow-lg shadow-yellow-glow"></div>
                <div class="p-1 rounded-full bg-green-400 shadow-lg shadow-green-glow"></div>
            </div>
            <!-- DOTS -->
            <!-- TERMINAL -->
            <div class="flex justify-center items-start flex-col rounded-b-2xl bg-neutral-900 h-[580px] w-[800px] p-24">
                <h1 class="text-3xl font-bold text-neutral-300">Let's talk</h1>
                <p class="text-neutral-500 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quia enim vero perferendis eos accusantium iure cupiditate blanditiis quisquam sapiente officia nisi alias, veritatis fugiat? Tempora asperiores autem sequi officia.</p>
                <!-- INPUTS -->
                <form @submit.prevent="validateEmail" class="w-full">
                  <div class="flex flex-col gap-2 my-1 w-full">
                      <div class="text-neutral-500">Full name</div>
                      <input type="text" ref="nameInput" placeholder="Your name" class=" w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg">
                  </div>

                  <div class="flex flex-col gap-2 my-1 w-full">
                      <div class="text-neutral-500">Email Address</div>
                      <input type="email" v-model="email" placeholder="your-email@mail.com" class=" w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg" required>
                      <span v-if="emailError" class="error">{{ emailError }}</span>
                  </div>

                  <div class="flex flex-col gap-2 my-1 w-full">
                      <div class="text-neutral-500">Your message</div>
                      <textarea ref="messageInput" maxlength="500" type="text" placeholder="Enter text here..." class=" w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg h-[200px] resize-none"></textarea>
                  </div>
                  <p class="text-neutral-500 text-sm">Max 500 characters</p>

                  <button type="submit" class="w-full p-2 rounded-full mt-2 bg-neutral-700 hover:bg-neutral-500 hover:text-neutral-900">Send</button>
                </form>
                <!-- END INPUTS -->
            </div>
            <!-- TERMINAL -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailError: '',
      allowedDomains: ['@gmail.com', '@hotmail.com', '@yahoo.com']
    };
  },
  methods: {
    validateEmail() {
      const domain = this.email.substring(this.email.lastIndexOf("@"));
      if (!this.allowedDomains.includes(domain)) {
        this.emailError = alert(`Email domain must be one of the following: ${this.allowedDomains.join(', ')}`);
      } else {
        this.emailError = '';
        alert('Email is sent!');
        this.email = '';
        this.$refs.nameInput.value = '';
        this.$refs.messageInput.value = '';
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>