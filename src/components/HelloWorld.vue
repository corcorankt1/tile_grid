<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="item in items">
      <div>
        <img v-bind:src='item.artworkUrl100'>
        <h2><a v-bind:href='item.collectionViewUrl'>{{item.collectionName}}</a></h2>
        <p>Genre - {{item.primaryGenreName}}</p>
        <p># of tracks - {{item.trackCount}}</p>
        <p>Copyright - {{item.copyright}}</p>
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
        this.items.shift();
      })
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
