<template>
  <header class="flex flex-col items-center justify-center gap-2 h-[650px] relative font-roboto">
    <h1 class="text-3xl"> {{ $t('header.title') }}</h1>
    <div class="flex items-center">
      <span id="typed-text" class="text-5xl text-neutral-300 font-bold">{{ typeValue }}</span>
      <span id="cursor" class="text-4xl text-neutral-300" :class="{ cursor : true, typing : typeStatus}">|</span>
    </div>
    <!-- IMAGES 
    <img src="../assets/Notebook.svg" class="h-[400px]" alt="Notebook.svg">
    <img src="../assets/vuejs-icon.svg" class="h-20 absolute top-10 left-10" alt="tec-icon1.png">
    <img src="../assets/typescript-icon.svg" class="h-20 absolute top-10 right-10 " alt="tec-icon2.png">
    <img src="../assets/docker-icon.svg" class="h-20 absolute bottom-10 left-10" alt="tec-icon3.png">
    <img src="../assets/vitejs-icon.svg" class="h-20 absolute bottom-10 right-10" alt="tec-icon4.png">
    -->
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['SOFTWARE DEVELOPER', 'WEB DEVELOPER'],
      typingSpeed: 70,
      erasingSpeed: 70,
      newTextDelay: 3000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  mounted(){
    this.startTyping();
  },
  methods: {
    startTyping() {
      this.typeStatus = true;
      this.typeNextCharacter();
    },
    typeNextCharacter(){
      const currentText = this.typeArray[this.typeArrayIndex];
      if(this.charIndex < currentText.length){
        this.typeValue += currentText[this.charIndex];
        this.charIndex++;
        setTimeout(this.typeNextCharacter, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText(){
      this.typeStatus = true;
      if(this.charIndex > 0){
        this.typeValue = this.typeValue.slice(0, -1);
        this.charIndex--;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex = (this.typeArrayIndex + 1) % this.typeArray.length;
        this.startTyping();
      }
    }
  },
}
</script>

<style scoped>
.cursor {
  font-size: 50px;
  display: inline-block;
  background-color: black;
  animation: blink 1s step-end infinite;
}

.cursor.typing {
  animation: none;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>