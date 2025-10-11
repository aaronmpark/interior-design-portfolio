<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="/" @click.prevent="goHome">
            Golden MS
        </a>
      </div>
      <ul class="navbar-links">
        <li v-for="link in navLinks" :key="link.id" @click="setActive(link.title)" :class="{ active: active === link.title }">
          <a :href="`/${link.id}`">{{ link.title }}</a>
        </li>
      </ul>
      <div class="navbar-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ul class="navbar-links-mobile" v-if="isMenuOpen">
      <li v-for="link in navLinks" :key="link.id" @click="setActive(link.title); toggleMenu()" :class="{ active: active === link.title }">
        <a :href="`/${link.id}`">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DefaultNavbar',
  data() {
    return {
      active: '',
      isMenuOpen: false,
      navLinks: [
        { id: 'about', title: 'ABOUT' },
        { id: 'projects', title: 'PROJECTS' },
        { id: 'contact', title: 'CONTACT' },
      ]
    };
  },
  methods: {
    setActive(title) {
      this.active = title;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
      this.setActive('');
    },
    goHome() {
      window.location.href = '/';
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #1C1C1C;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  max-width: 1500px;
}

.navbar-logo {
  margin-left: 1rem;
}

.navbar-logo a {
  color: #FFB606;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  cursor: pointer;
  position: relative;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
}

.navbar-links a::after {
  content: '';
  position: absolute;
  bottom: -5px; 
  left: 50%; 
  transform: translateX(-50%) scaleX(0);
  transform-origin: center; 
  width: 100%; 
  height: 2px; 
  background-color: #ffffff; 
  transition: transform 0.3s ease; 
}

.navbar-links a:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.navbar-toggle span {
  width: 25px;
  height: 3px;
  background-color: white;
}

.navbar-links-mobile {
  list-style: none;
  padding: 0;
  margin: 0; 
  background-color: #1C1C1C;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
}

.navbar-links-mobile li {
  text-align: center;
  padding: 0.5rem 0; 
}

.navbar-links a,
.navbar-links-mobile a {
  text-decoration: none; 
  color: white; 
}

.navbar-links a:hover,
.navbar-links a:focus,
.navbar-links a:active,
.navbar-links-mobile a:hover,
.navbar-links-mobile a:focus,
.navbar-links-mobile a:active {
  text-decoration: none; 
  color: #FFB606; 
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: row;
  }

  .navbar-links {
    display: none;
  }

  .navbar-toggle {
    display: flex;
  }
}
</style>