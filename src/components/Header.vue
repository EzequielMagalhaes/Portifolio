<template>
  <header class="flex flex-col items-center justify-center gap-2 h-[650px] relative font-roboto">
    <h1 class="text-3xl">Hi I'm Ezequiel</h1>
    <div class="flex items-center">
      <span id="typed-text" class="text-5xl text-gray-300 font-bold">{{ typeValue }}</span>
      <span id="cursor" class="text-4xl text-gray-300" :class="{'typing': typeStatus, 'blinking': !typeStatus}">&nbsp;</span>
    </div>
    <!-- IMAGES -->
    <img src="../assets/coding.png" class="h-[400px]" alt="coding.png">
    <img src="../assets/vuejs-icon.svg" class="h-20 absolute top-10 left-10" alt="tec-icon1.png">
    <img src="../assets/typescript-icon.svg" class="h-20 absolute top-10 right-10 " alt="tec-icon2.png">
    <img src="../assets/docker-icon.svg" class="h-20 absolute bottom-10 left-10" alt="tec-icon3.png">
    <img src="../assets/vitejs-icon.svg" class="h-20 absolute bottom-10 right-10" alt="tec-icon4.png">
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
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
}
</script>

<style scoped>
.typing {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: transparent;
}

.blinking {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #d1d5db;
  animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
  49% { background-color: #d1d5db; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}
</style>