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
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DefaultNavbar',
  data() {
    return {
      active: '',
      navLinks: [
        { id: 'about', title: 'ABOUT' },
        { id: 'projects', title: 'PROJECTS' },
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
  margin-left: 20rem;
}

.navbar-logo a {
  color: #FFB606;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}
.navbar-logo .logo-image {
  width: 15px; 
  height: 15px;
  margin-right: 0.2rem;
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
</style>