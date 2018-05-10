<template>
  <div id="app">
    <img src="./assets/logo.png">
    <AlbumTiles msg="Welcome to Your Vue App"/>
  </div>
</template>

<script>
import AlbumTiles from './components/albumTiles.vue'

export default {
  name: 'app',
  components: {
    AlbumTiles
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
