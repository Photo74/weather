<template>
  <div class="weather-card">
    <div class="card-name">
      {{ weatherItem.name + " " + weatherItem.sys.country }}
    </div>
    <div class="card-temp">
      <img
        width="100px"
        id="wicon"
        :src="`http://openweathermap.org/img/w/${weatherItem.weather[0].icon}.png`"
        alt=""
      />

      <div class="card-temp-right">{{ Math.round(weatherItem.main.temp) }}°C</div>
    </div>
    <div style="font-weight: 700">
      Feels like {{ weatherItem.main.feels_like }}.
      {{
        weatherItem.weather[0].description[0].toUpperCase() +
        weatherItem.weather[0].description.slice(1)
      }}
    </div>
    <div class="flex-between">
      <div>{{ weatherItem.wind.speed + "m/s" }}</div>
      <div>{{ weatherItem.main.pressure + "hPa" }}</div>
    </div>
    <div class="flex-between">
      <div>Humidity {{ weatherItem.main.humidity }}%</div>
      <div>Dew point: {{ weatherItem.main.temp_min + "°C" }}</div>
    </div>
    <div class="flex-between">
      <div>
        Visibility
        {{ (parseFloat(weatherItem.visibility) / 1000).toFixed(1) }}km
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weatherCard",
  props: {
    msg: String,
    weatherItem: Object,
  },
  components: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.flex-between {
  display: flex;
  justify-content: space-between;
}
.weather-card:not(:last-child) {
  margin-bottom: 30px;
}
.weather-card:first-child .card-name {
  padding-right: 35px;
}
.card-name {
font-weight: 700; font-size: 25px
}
.card-temp {
  display: flex; font-size: 36px; font-weight: 100;
}
.card-temp-right {
  margin: auto 0px auto 10px
}
</style>
