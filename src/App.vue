<template>
  <div id="app">
    <Weather />
    <!-- <notifications group="error" position='bottom center'/> -->
  </div>
</template>

<script>
import store from './store/'
import Weather from "./pages/Weather.vue";

export default {
  store,
  name: "App",
  components: {
    Weather,
  },

  async mounted() {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
