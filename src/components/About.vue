<template>
    <div class="about">
        <Navbar />
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'DefaultAbout',  
  components: {
    Navbar
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
