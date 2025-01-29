<template>
  <div class="p-5 px-5 md:px-10 lg:px-20 flex flex-col gap-5">
    <Navbar />
    <hr class="border-t-2 border-gray-300">
    
    <section id="header">
      <Header />
    </section>
    
    <section id="about">
      <About />
    </section>
    
    <section id="projects">
      <Project />
    </section>
    
    <section id="experience">
      <Experience />
    </section>
    
    <section id="contact">
      <Contact />
    </section>
    
    <Footer />
    
    <ScrollToTopButton :visible="showScrollButton" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTopButton from './components/ScrollToTopButton.vue'

const showScrollButton = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      showScrollButton.value = !entry.isIntersecting
    })
  }, {
    threshold: 0,
    rootMargin: '-70px 0px 0px 0px' // Adjust based on your header height
  })

  const header = document.getElementById('header')
  if (header) {
    observer.observe(header)
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>