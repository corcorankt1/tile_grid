<template>
  <div class="albums">
    <h1>{{ msg }}</h1>
    <div class="grid">
      <div v-for="item in items" class="tile grid-item">
        <div class="card">
          <img v-bind:src='item.artworkUrl100'>
          <h2><a v-bind:href='item.collectionViewUrl'>{{item.collectionName}}</a></h2>
          <div class="albumInfo">
            <p>Genre - {{item.primaryGenreName}}</p>
            <p># of tracks - {{item.trackCount}}</p>
            <p>Copyright - {{item.copyright}}</p>
          </div>
          <a v-bind:href="item.collectionViewUrl" target="_blank" class="cta">Check out on itunes</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },
  created () {
    fetch('https://itunes.apple.com/lookup?id=3296287&entity=album')
      .then(response => response.json())
      .then(json => {
        this.items = json.results;
        this.items.shift();ç
      })
  },
  name: 'AlbumTiles',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #92BBCF;
  text-decoration: none;
}
.grid { 
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
} 
.grid-item { 
  flex: 1 33%; 
  display: flex;
  justify-content: center;
}
.card {
  width: 300px;
  border: #D6D6D6 1px solid;
  margin: 25px;
  transition: all 0.5s;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px #D6D6D6;
}
.card img {
  width:150px;
  margin: 25px 15px 15px 15px;
}
.card .albumInfo p {
  margin: 2px 15px;
}
.card a.cta {
  display: block;
  text-transform: uppercase;
  border: #92BBCF 1px solid;
  width: 66%;
  padding: 15px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  transition: all 1s;
}
.card a.cta:hover {
  color: #fff;
  background-color:#92BBCF;
}
</style>
