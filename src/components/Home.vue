<template>
    <div class="home">
        <Navbar /> 
        <img :src="example" alt="Example Image" class="example-image" />
        <div class="space"></div>
    </div> 
</template>

<script>
import example from '../assets/example.jpg';
import Navbar from './Navbar.vue';

export default {
  name: 'DefaultHome',  
  components: {
    Navbar
  },
  props: {
  },
  data() {
    return {
      example
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space {
  height: 2000px; /* Adds space to allow scrolling */
}

.example-image {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
