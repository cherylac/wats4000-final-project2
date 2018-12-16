<template>
  <div id="app">
    <h1>Decision Maker</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXO-4a-c6eWmhwvC4xiNL55nOG1Rfz-zIHptUoRGK77cVQFdyTQ">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Rock Salt', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
