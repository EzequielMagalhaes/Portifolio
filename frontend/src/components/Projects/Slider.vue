<template>
  <div>
    <h1>Heading</h1>
    <transition name="fade" mode="out-in">
      <img :src="currentImg" :key="currentImg" alt="slider-image">
    </transition>
    <a class="prev" @click="prev">&#10094;</a>
    <a class="next" @click="next">&#10095;</a>
  </div>
</template>

<script>
import toDoListImage from '../assets/to-do-list.png';
import kanbanBoardImage from '../assets/kanban-board.png';
import rpsImage from '../assets/rock-paper-scissor.png';

export default {
  name: "Slider",
  data() {
    return {
      images: [
        toDoListImage,
        kanbanBoardImage,
        rpsImage,
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },
    next: function() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev: function() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  },
  computed: {
    currentImg: function() {
      return this.images[this.currentIndex];
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 600px;
  width: 100%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>