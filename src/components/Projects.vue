<template>
    <div class="projects">
        <Navbar />
        <div class="project-list">
            <h1>Projects</h1>
            <div class="project-grid">
                <div class="project-item">
                    <a href="https://www.casatequilarestaurant.com/" class="project-link" target="_blank" rel="noopener noreferrer">Casa Tequila</a>
                    <ul>
                        <li class="location">Alexandria, VA</li>
                    </ul>
                </div>
                <div class="project-item">
                    <a href="https://hangryjoes.com/" class="project-link" target="_blank" rel="noopener noreferrer">Hangry Joes</a>
                    <ul>
                        <li class="location">VA Beach, VA</li>
                        <li class="location">Gainsville, VA</li>
                        <li class="location">Ashburn, VA</li>
                    </ul>
                </div>
                <div class="project-item">
                    <a href="https://www.wnbfactory.com/" class="project-link" target="_blank" rel="noopener noreferrer">WNB Factory</a>
                    <ul>
                        <li class="location">Alexandria, VA</li>
                        <li class="location">Newington, VA</li>
                        <li class="location">Jessup, MD</li>
                    </ul>
                </div>
                <div class="project-item">
                    <a>Ramen Shop</a>
                    <ul>
                        <li class="location">Fredericksburg, VA</li>
                    </ul>
                </div>
                <div class="project-item">
                    <a>Ice Cream Shop</a>
                    <ul>
                        <li class="location">Annandale, VA</li>
                    </ul>
                </div>
                <div class="project-item">
                    <a>Etc.</a>
                </div>
            </div>
        </div>
        <div class="project-collage">
            <h1>All Photos</h1>
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
  align-items: center;
  justify-content: flex-start;
  width: 100%; 
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(135deg, #1C1C1C, #333);
  overflow-x: hidden; 
}

.project-list {
  align-self: stretch;
  border-bottom: 2px solid #FFB606;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.project-list h1 {
  font-family: 'Poppins', sans-serif; 
  font-size: 2.5rem;
  color: #FFB606;
}

.project-grid {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr; 
  gap: 2rem; 
  justify-content: center; 
  margin-top: 1.5rem;
}

.project-item {
  font-family: 'Roboto', sans-serif; 
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
}

.project-item ul {
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
}

.project-item .location {
  color: #b2b1b1;
}

.project-link {
  text-decoration: none;
  color: inherit;
}

.project-collage {
  margin-top: 2rem;
  width: 100%;
  margin-bottom: 2rem;
  color:white; 
}

.collage {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: flex-start;
}

.collage-image {
  width: 100%;
  height: 350px; 
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s; 
}

.collage-image:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  max-width: 100%;
  max-height: 70vh; 
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7); 
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.2rem; 
  z-index: 1001;
}

.gallery-nav.left {
  left: 1rem; 
}

.gallery-nav.right {
  right: 1rem;
}

.gallery-close {
  position: absolute;
  top: 2rem;
  right: 1rem;
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
}

@media (max-width: 768px) {
  .gallery-close {
    top: 3rem;
  }
}

.gallery-thumbnails {
  flex-wrap: wrap; 
  gap: 0.5rem; 
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

.thumbnail-image.active-thumbnail {
  border-color: #FFB606;
}



.project-list li a.project-link {
  text-decoration: none; 
  color: inherit;
}

@media (max-width: 768px) {
  .project-list h1 {
    font-size: 2rem; 
  }

  .project-grid {
    grid-template-columns: 1fr; 
    gap: 1.5rem; 
  }

  .project-item {
    font-size: 1rem; 
    text-align: center; 
  }

  .project-item ul {
    padding: 0;
    margin: 0.5rem 0;
  }

  .project-item .location {
    font-size: 0.9rem; 
  }

  .project-collage h1 {
    font-size: 1.8rem; 
    text-align: center;
  }

  .collage {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    gap: 1rem;
  }

  .collage-image {
    height: 200px; 
  }
}
</style>
