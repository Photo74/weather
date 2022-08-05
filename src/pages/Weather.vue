<template>
  <div class="container" style="position: relative">
    <SettingsIcon
      v-if="!settingsFlag"
      @click="settingsFlag = !settingsFlag"
      class="settingsBtn"
    />
    <CloseIcon
      v-if="settingsFlag"
      @click="settingsFlag = !settingsFlag"
      class="settingsBtn"
    />
    <div v-if="!settingsFlag">
      <WeatherCard
        v-for="weatherItem of weatherArray"
        :key="weatherItem.id"
        :weatherItem="weatherItem"
      />
    </div>
    <WeatherSettings v-if="settingsFlag" />
  </div>
</template>

<script>
import WeatherCard from "../components/Weather/WeatherCard.vue";
import WeatherSettings from "../components/Weather/WeatherSettings.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import SettingsIcon from "vue-material-design-icons/CogOutline.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
export default {
  name: "WeatherContainer",
  components: {
    WeatherCard,
    WeatherSettings,
    SettingsIcon,
    CloseIcon,
  },
  data() {
    return {
      settingsFlag: false,
    };
  },
  computed: {
    ...mapState("weather", ["weatherArray"]),
  },

  mounted() {
    // https://api.openweathermap.org/data/2.5/onecall?lat=53.3529419&lon=59.0038211&exclude=minutely,hourly,daily,alerts&appid=9db9055cd148bc1876fdb710f36e9108
    if (!localStorage.getItem("weatherArray")) {
      localStorage.setItem("weatherArray", "[]");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          this.addWeatherCurrentGeolocation({lat: position.coords.latitude, lon: position.coords.longitude})
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
    this.setWeatherFromLocalStorage();
    this.updateAllWeather();
    this.getNewWeatherWithInterval();
  },
  methods: {
    ...mapActions("weather", ["updateAllWeather", "addWeatherCurrentGeolocation"]),
    ...mapMutations("weather", ["setWeatherFromLocalStorage"]),
    getNewWeatherWithInterval() {
      if (localStorage.getItem("weatherArray")) {
        setInterval(this.updateAllWeather, 1 * 20 * 1000);
      }
    },
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}
.settingsBtn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
