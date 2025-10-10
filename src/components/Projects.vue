<template>
    <div class="projects">
        <Navbar />
        <h1>Projects</h1> 
        <div class="space"></div>
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'DefaultProjects',  
  components: {
    Navbar
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
  height: 2000px; /* Adds space to allow scrolling */
}
</style>
