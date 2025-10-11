<template>
    <div class="about">
        <Navbar />
        <img :src="about_image" alt="WNB Factory" class="about-image" />
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';
import about_image from '../assets/wnb_factory.jpeg';
export default {
  name: 'DefaultAbout',  
  components: {
    Navbar
  },
  props: {
  },
  data() {
    return {
      about_image
    };
  }
}

</script>

<style scoped>
.about {
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100vw;
  height: 100vh;
}


.about-image {
  width: 85vw;
  height: 85vh;
  object-fit: cover;
  display: block;
}
</style>
