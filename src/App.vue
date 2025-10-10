<template>
  <router-view />
  <Footnote />
</template>

<script>
import Footnote from './components/Footnote.vue'
export default {
  name: 'App',
  components: {
    Footnote
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* change these values later -- not much else to change in this App.vue i believe*/
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
