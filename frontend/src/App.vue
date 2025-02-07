<template>
  <Suspense>
    <template #default>
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
        <component :is="AnalyticsComponent" v-if="AnalyticsComponent" mode="production"/>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef } from 'vue'
import Navbar from './components/Navbar/Navbar.vue'
import Header from './components/Header/Header.vue'
import About from './components/About/About.vue'
import Project from './components/Projects/Project.vue'
import Experience from './components/Experience/Experience.vue'
import Contact from './components/Contact/Contact.vue'
import Footer from './components/Footer/Footer.vue'
import ScrollToTopButton from './components/Navbar/ScrollToTopButton.vue'

const AnalyticsComponent = shallowRef(null);

onMounted(async () => {
  if (import.meta.env.PROD) {
    const { Analytics } = await import('@vercel/analytics/vue');
    AnalyticsComponent.value = Analytics;
  }
});

const showScrollButton = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      showScrollButton.value = !entry.isIntersecting
    })
  }, {
    threshold: 0,
    rootMargin: '-70px 0px 0px 0px' // Ajuste baseado na altura do seu header
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