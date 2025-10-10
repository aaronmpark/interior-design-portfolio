<template>
    <div class="career">
        <Navbar />
        <h1>Career</h1> 
        <div class="space"></div>
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'DefaultCareer',  
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
