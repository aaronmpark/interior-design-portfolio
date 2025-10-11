<template>
    <div class="projects">
        <Navbar />
        <div class="project-list">
            <h1>Projects</h1>
            <ul>
                <li>
                    Casa Tequila
                    <ul>
                        <li class="location">Alexandria, VA</li>
                    </ul>
                </li>
                <li>
                    Hangry Joes
                    <ul>
                        <li class="location">VA Beach, VA</li>
                        <li class="location">Gainsville, VA</li>
                        <li class="location">Ashburn, VA</li>
                    </ul>
                </li>
                <li>
                    WNB Factory
                    <ul>
                        <li class="location">Alexandria, VA</li>
                        <li class="location">Newington, VA</li>
                        <li class="location">Jessup, MD</li>
                    </ul>
                </li>
                <li>
                    Ramen Shop
                    <ul>
                        <li class="location">Fredericksburg, VA</li>
                    </ul>
                </li>
                <li>
                    Ice Cream Shop
                    <ul>
                        <li class="location">Annandale, VA</li>
                    </ul>
                </li>
                <li>
                    Etc.
                </li>
            </ul>
        </div>
        <div class="project-collage">
            <h2>All Photos</h2>
            <div class="collage">
                <img v-for="(image, index) in images" :key="index" :src="image" @click="openGallery(index)" class="collage-image" />
            </div>
        </div>
        <div v-if="isGalleryOpen" class="gallery-popup" @click="closeGallery">
            <div class="gallery-content" @click.stop>
                <button class="gallery-nav left" @click="prevImage">&#9664;</button>
                <img :src="images[currentImage]" class="gallery-image" />
                <button class="gallery-nav right" @click="nextImage">&#9654;</button>
                <button class="gallery-close" @click="closeGallery">&times;</button>
                <div class="gallery-thumbnails">
                    <img 
                        v-for="(image, index) in images" 
                        :key="index" 
                        :src="image" 
                        :class="{'active-thumbnail': index === currentImage}" 
                        @click="goToImage(index)" 
                        class="thumbnail-image" 
                    />
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';

function importAll(r) {
    return r.keys().map(r);
}

const portfolioImages = importAll(require.context('../assets/portfolio-pictures', false, /\.(png|jpe?g|PNG)$/));

export default {
  name: 'DefaultProjects',  
  components: {
    Navbar
  },
  data() {
    return {
      images: portfolioImages,
      isGalleryOpen: false,
      currentImage: 0
    };
  },
  methods: {
    openGallery(index) {
      this.isGalleryOpen = true;
      this.currentImage = index;
      window.addEventListener('keydown', this.handleKeydown);
    },
    closeGallery() {
      this.isGalleryOpen = false;
      window.removeEventListener('keydown', this.handleKeydown);
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    goToImage(index) {
      this.currentImage = index;
    },
    handleKeydown(event) {
      if (event.key === 'ArrowLeft') {
        this.prevImage();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'Escape') {
        this.closeGallery();
      }
    }
  }
};
</script>

<style scoped>
.projects {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100vw;
  min-height: 100vh; 
  padding: 0;
  box-sizing: border-box;
  overflow: hidden; 
  background: url('../assets/about_background.jpg') no-repeat center center fixed; 
  background-size: cover;
  background-color: rgba(28, 28, 28, 0.3); 
  background-blend-mode: lighten; 
}

.project-list {
  margin-bottom: 2rem;
  text-align: left;
  padding: 0; 
  align-self: flex-start; 
  color: white;
}

.project-list h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.project-list ul {
  list-style: none;
  padding: 0;
  color: white;
}

.project-list ul ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.project-list li {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.project-list .location {
  font-weight: bold;
  color:  #9c9c9c; 
}

.project-collage {
  margin-top: 2rem;
  width: 100%;
  margin-bottom: 3rem; 
  color:  #3B3B3B;
}

.project-collage h2 {
  color: white;
}

.collage {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: flex-start;
}

.collage-image {
  width: 100%;
  height: 300px; 
  object-fit: cover; 
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s;
}

.collage-image:hover {
  transform: scale(1.05);
}

.gallery-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.gallery-content {
  position: relative;
  background: rgba(0, 0, 0, 1);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.gallery-image {
  max-width: 90vw;
  max-height: 80vh;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1001;
}

.gallery-nav.left {
  left: -2rem;
}

.gallery-nav.right {
  right: -2rem;
}

.gallery-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.gallery-thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.thumbnail-image {
  width: 50px;
  height: auto;
  margin: 0 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: border-color 0.2s;
}

button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

</style>
