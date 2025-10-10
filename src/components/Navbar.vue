<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="/" @click.prevent="goHome">Home</a>
      </div>
      <ul class="navbar-links">
        <li v-for="link in navLinks" :key="link.id" @click="setActive(link.title)" :class="{ active: active === link.title }">
          <a :href="`#${link.id}`">{{ link.title }}</a>
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
        { id: 'about', title: 'About' },
        { id: 'projects', title: 'Projects' },
        { id: 'career', title: 'Career' }
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
  background-color: #333;
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
  margin: 0; /* Remove any default margin */
  box-sizing: border-box; /* Ensure padding is included in width */
}

.navbar-logo a {
  color: white;
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
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
}

.navbar-links li.active a {
  color: #00bcd4;
}

.navbar-links a:hover {
  color: #00bcd4;
}
</style>