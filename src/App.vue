<template>
  <div class="p-5 px-20 flex flex-col gap-5">
    <Navbar/>
    <hr class="border-t-2 border-gray-300"/>
    <Header/>
    <About/>
    <Project/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
export default {
  components: { Navbar, Header, About, Project },
}
</script>
