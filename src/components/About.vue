<template>
    <div class="about">
        <Navbar />
        <div class="about-content">
            <div class="about-text">
                <h1>About Golden MS</h1>
                <hr />
                <p>
                    At Golden MS, we specialize in restaurant design and construction. 
                    From concept to completion, we deliver tailored solutions that combine functionality and aesthetics.<br />
                    Our team of experts works closely with clients to understand their vision and bring it to life with innovative designs and high-quality craftsmanship. 
                    
                    Let us help you transform your space into an unforgettable experience for your customers.
                </p>
                <router-link to="/projects" class="about-button">PROJECTS</router-link>
            </div>
            <img :src="about_image" alt="WNB Factory" class="about-image" />
        </div>
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
      about_image,
    };
  }
}
</script>

<style scoped>
.about {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  background: url('../assets/about_background.jpg') no-repeat center center fixed; 
  background-size: cover;
  background-color: rgba(28, 28, 28, 0.3); 
  background-blend-mode: lighten; 
  overflow-x: hidden;
}

.about-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  width: 100vw;
  height: 100vh;
  margin: 0;
  gap: 5rem; 
  transform: translateY(-5rem); 
}

.about-text {
  flex: 1;
  max-width: 40%;
  color: white;
  text-align: left; 
  margin-left: 2rem; 
}

.about-text h1 {
  font-size: 2.5rem;
  color: #FFE002;
  margin-bottom: 1rem;
}

.about-text hr {
  width: 20%; 
  margin: 0; 
  border-top: 3px solid #FFE002; 
}

.about-text p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about-button {
  background-color: #FFB606; 
  color: #1C1C1C; 
  border: none;
  padding: 1rem 1.75rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin: 1rem 0 0 ;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

.about-button:hover {
  transform: scale(1.1); 
}

.about-image {
  flex: 1;
  max-width: 40%; 
  height: auto;
  object-fit: cover;
}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    gap: 2rem;
    height: auto;
    transform: translateY(0);
    padding: 2rem;
  }

  .about-text {
    max-width: 90%;
    text-align: center;
    margin: 0;
  }

  .about-text h1 {
    font-size: 2rem;
  }
  
  .about-text hr {
    width: 50%; 
    margin: 0 auto;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-image {
    max-width: 90%;
    width: 100%;
  }
}
</style>