<template>
    <div class="home">
        <Navbar /> 
        <img :src="home_image" alt="Casa Tequila" class="home-image" />
        <div class="overlay"></div> 
        <div class="home-text">
            <h1>Golden MS - Interior Design</h1>
            <h2>Transforming Restaurants into Unique Experiences</h2>
            <router-link to="/about" class="home-button">GET STARTED</router-link>            
        </div>
    </div> 
</template> 

<script>
import home_image from '../assets/casa_tequila_upscale.png';
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
      home_image
    };
  }
}
</script>

<style scoped>

.home {
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.home-image {
  width: 100vw;
  height: 100vh;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1; 
}

.home-text {
  position: absolute;
  text-align: center; 
  color: white; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); 
  transform: translateY(0); 
  z-index: 2; 
  opacity: 0;
  animation: fadeIn 1s ease-in forwards; 
  padding: 1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.home-text h1 {
  font-size: 3rem; 
  margin: 0;
  font-weight: 400;
}

.home-text h2 {
  font-size: 1.5rem; 
  margin: 0.5rem 0;
  font-weight: 300;
}

.home-button {
  background-color: #FFB606; 
  color: #1C1C1C; 
  border: none;
  padding: 1rem 1.75rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none; 
  display: inline-block; 
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin: 1rem 0;
  text-shadow: none;
}

.home-button:hover {
  transform: scale(1.1); 
}

@media (max-width: 768px) {
  .home-text {
    padding: 2rem; 
  }

  .home-text h1 {
    font-size: 2.5rem; 
  }

  .home-text h2 {
    font-size: 1.2rem; 
  }
}
</style>