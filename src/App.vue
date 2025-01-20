<template>
  <div class="p-5 px-20 flex flex-col gap-5">
    <Navbar/>
    <hr class="border-t-2 border-gray-300"/>
    <section id="home">
      <Header/>
    </section>
    <section id="about">
      <About/>
    </section>
    <section id="projects">
      <Project/>
    </section>
    <section id="clients">
      <Clients/>
    </section>
    <section id="experience">
      <Experience/>
    </section>
    <section id="contact">
      <Contact/>
    </section>
    <Footer/>
    <transition name="fade">
      <button v-show="showScrollButton" @click="scrollToTop" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="fixed bottom-5 right-5 bg-neutral-300 p-3 rounded-full hover:bg-black">
        <img :src="scrollButtonImage" class="h-6 -rotate-45" alt="teste">
      </button>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Clients from './components/Clients.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
export default {
  components: { Navbar, Header, About, Project, Clients, Experience, Contact, Footer },
  data() {
    return {
      showScrollButton: false,
      scrollButtonImage: '/src/assets/black-site-arrow.png'
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        this.showScrollButton = rect.top <= window.innerHeight;
      }
    },
    handleMouseEnter() {
      this.scrollButtonImage = '/src/assets/white-site-arrow.png';
    },
    handleMouseLeave() {
      this.scrollButtonImage = '/src/assets/black-site-arrow.png';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
button:hover {
  background-color: black;
}
button:hover img {
  content: url('/src/assets/white-site-arrow.png');
}
</style>