<template>
  <div class="p-10 px-20">
    <Navbar/>
    <hr class="border-t-2 border-gray-300 my-4"/>
    <Header/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
export default {
  components: { Navbar, Header },

}
</script>
