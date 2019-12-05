<template>
  <div id="app">
    <router-view />
    <!-- <Header /> -->
    <!-- <HomePage /> -->
  </div>
</template>

<script>
// import Header from './components/Layout/Header.component';
// import HomePage from './components/Featured Components/HomePage';


export default {
  name: 'app',
  components: {
    // Header,
    // HomePage
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
