<template>
    <div class="about">
        <Navbar />
        <div class="about-content">
            <div class="about-text">
                <h1>About Golden MS</h1>
                <hr />
                <p>
                    At Golden MS, we specialize in restaurant design and construction. From concept to completion, we deliver tailored solutions that combine functionality and aesthetics.<br />
                    Our team of experts works closely with clients to understand their vision and bring it to life with innovative designs and high-quality craftsmanship. 
                    <br />
                    Let us help you transform your space into an unforgettable experience for your customers.
                </p>
                <router-link to="/projects" class="about-button">PROJECTS</router-link>
            </div>
            <img :src="about_image" alt="WNB Factory" class="about-image" />
        </div>
        <img :src="additional_image" alt="Additional Design" class="additional-image" />
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';
import about_image from '../assets/wnb_factory.jpeg';
import additional_image from '../assets/example.jpg';

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
      additional_image
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
  width: 100vw;
}

.about-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
}

.additional-image {
  width: 100%; /* Make the image stretch across the whole width */
  height: auto; /* Maintain the aspect ratio */
  display: block;
}

.about-text {
  flex: 1;
  color: black;
  text-align: left;
  padding-right: 2rem;
}

.about-text h1 {
  font-size: 2.5rem;
  color: #1C1C1C;
  margin-bottom: 1rem;
}

.about-text hr {
  width: 20%; /* Adjust the width to match the text */
  margin: 0; /* Remove extra margins */
  border-top: 3px solid #FFB606; /* Keep the same style */
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
  transform: scale(1.1); /* Slight zoom effect */
}

.about-image {
  flex: 1;
  max-width: 50%; /* Reduce the maximum width of the image */
  height: auto;
  object-fit: cover;
}
</style>