<template>
  <router-view />
  <Footnote v-if="$route.path !== '/contact'" />
</template>

<script>
import Footnote from './components/Footnote.vue'
export default {
  name: 'App',
  components: {
    Footnote
  },
  mounted() {
    document.title = "Golden MS - Interior Design";
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  scroll-behavior: smooth;
  color-scheme: dark;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
