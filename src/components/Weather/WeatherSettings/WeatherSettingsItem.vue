<template>
  <div class="settingsItem">
    <div style="display: flex;">
      <MenuIcon />
      <div style="margin: auto 10px;">{{ weatherItem.name + ", " + weatherItem.sys.country }}</div>
    </div>

    <DeleteIcon @click="delWeatherInArray(weatherItem.id)" />
  </div>
</template>

<script>
import DeleteIcon from "vue-material-design-icons/Delete.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { mapMutations } from "vuex";
export default {
  name: "WeatherSettingsItem",
  components: {
    DeleteIcon,
    MenuIcon
  },
  props: {
    weatherItem: Object,
  },
  data() {
    return {};
  },
  computed: {},

  mounted() {},
  methods: {
    ...mapMutations("weather", ["deleteWeather"]),
    delWeatherInArray(id) {
      this.deleteWeather(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.settingsItem{
  display: flex;
  justify-content: space-between;
  background-color: rgb(230, 224, 216);
   margin-top: 10px;
   padding: 7px;
}</style>
