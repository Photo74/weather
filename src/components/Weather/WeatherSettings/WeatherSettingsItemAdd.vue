<template>
  <div>
    <div class="settings-label">Add location:</div>
    <div class="inputCountry">
      <input v-on:keyup.enter="addWeatherToArray()" v-model="weatherInputModel" />
      <ArrowRightBtn style="margin: auto 0 auto 10px;" @click="addWeatherToArray()" />
    </div>
  </div>
</template>

<script>
import ArrowRightBtn from "vue-material-design-icons/ArrowRight.vue";
import { mapActions } from "vuex";
export default {
  name: "WeatherSettingsItemAdd",
  components: {
    ArrowRightBtn,
  },
  data() {
    return {
      weatherInputModel: "",
    };
  },
  computed: {},

  mounted() {},
  methods: {
    ...mapActions("weather", ["addWeather"]),
    addWeatherToArray() {
      if (this.weatherInputModel) {
            this.addWeather(this.weatherInputModel);
            this.weatherInputModel = "";
      }

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 100%;
  padding: 10px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input:focus {
  border: 3px solid rgb(94, 186, 214);
}
.inputCountry {
  display: flex;
}
.settings-label {
  font-weight: 700; margin-top: 20px
}
</style>
