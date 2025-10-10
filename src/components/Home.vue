<template>
    <div class="home">
        <Navbar />
        <h1>sup</h1> 
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'DefaultHome',  
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
