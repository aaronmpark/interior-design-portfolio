<template>
    <div class="contact">
        <Navbar />
        <h1>Contact</h1> 
        <div class="space"></div>
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'DefaultContact',  
  components: {
    Navbar
  },
  props: {
  }
}
</script>

<style scoped>
</style>