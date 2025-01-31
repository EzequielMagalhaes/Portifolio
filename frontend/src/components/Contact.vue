<template>
  <div class="flex flex-col gap-5 py-5">
    <h1 class="text-5xl font-bold text-neutral-300">{{ $t('contact.title') }}</h1>
    <div class="flex justify-center items-center">
        <div class="relative flex justify-center items-end rounded-3xl bg-neutral-700 h-[620px] w-[800px]">
            <!-- DOTS -->
            <div class="absolute top-4 left-6 flex gap-2 items-center">
                <div class="p-1 rounded-full bg-red-400 shadow-lg shadow-red-glow"></div>
                <div class="p-1 rounded-full bg-yellow-400 shadow-lg shadow-yellow-glow"></div>
                <div class="p-1 rounded-full bg-green-400 shadow-xlg shadow-green-glow"></div>
            </div>
            <!-- DOTS -->
            <!-- TERMINAL -->
            <div class="flex justify-center items-start flex-col rounded-b-2xl bg-neutral-900 h-[580px] w-[800px] p-24">
                <h1 class="text-3xl font-bold text-neutral-300">{{ $t('contact.description') }}</h1>
                <p class="text-neutral-500 text-sm">{{ $t('contact.subdescription') }}</p>
                <!-- INPUTS -->
                <form @submit.prevent="validateEmail" class="w-full">
                  <div class="flex flex-col gap-2 my-1 w-full">
                      <div class="text-neutral-500">{{ $t('contact.fullName') }}</div>
                      <input type="text" ref="nameInput" :placeholder="$t('contact.placeholder.name')" class=" w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg">
                  </div>

                  <div class="flex flex-col gap-2 my-1 w-full">
                      <div class="text-neutral-500">{{ $t('contact.emailAdd') }}</div>
                      <input type="email" v-model="email" :placeholder="$t('contact.placeholder.email')" class=" w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg" required>
                      <span v-if="emailError" class="error">{{ emailError }}</span>
                  </div>

                  <div class="flex flex-col gap-2 my-1 w-full">
                      <div class="text-neutral-500">{{ $t('contact.yourMessage') }}</div>
                      <textarea ref="messageInput" maxlength="500" type="text" :placeholder="$t('contact.placeholder.message')" class=" w-full border-b border-neutral-500 bg-neutral-700 p-1 rounded-lg h-[200px] resize-none"></textarea>
                  </div>
                  <p class="text-neutral-500 text-sm">{{ $t('contact.sizeText') }}</p>
                  <button type="submit" class="flex justify-center items-center w-full gap-2 p-2 rounded-full mt-2 bg-neutral-700 hover:bg-neutral-500 hover:text-neutral-900" id="black-send" @mouseenter="showBlackSend('send')" @mouseleave="hideBlackSend('send')">
                    <span class="text-xl">{{ $t('contact.sendBtn') }}</span>
                    <img id="send1" src="../assets/contact-icons/white-send.svg" class="h-8 -rotate-45 pb-2" alt="">
                    <img id="send2" src="../assets/contact-icons/black-send.svg" class="h-8 hidden opacity-70 -rotate-45 pb-2" alt="">
                  </button>
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
      dataContact: {
        title: 'dataContact.contact.title',
        description: 'dataContact.contact.description',
        subdescription: 'dataContact.contact.subdescription',
        fullName: 'dataContact.contact.fullName',
        emailAdd: 'dataContact.contact.emailAdd',
        yourMessage: 'dataContact.contact.yourMessage',
        sizeText: 'dataContact.contact.sizeText',
        sendBtn: 'dataContact.contact.sendBtd',
        placeholder: {
          name:'dataContact.contact.placeholder.name',
          email:'dataContact.contact.placeholder.email',
          message:'dataContact.contact.placeholder.message'
        }
      },
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
    },
    showBlackSend(id) {
      document.getElementById(`${id}1`).style.display = 'none';
      document.getElementById(`${id}2`).style.display = 'block';
    },
    hideBlackSend(id) {
      document.getElementById(`${id}1`).style.display = 'block';
      document.getElementById(`${id}2`).style.display = 'none';
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>