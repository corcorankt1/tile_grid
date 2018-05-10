<template>
  <div id="app">
    <AlbumTiles msg="A Collection of Queen's Music"/>
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
  color: #000000;
  margin-top: 60px;
}
</style>
