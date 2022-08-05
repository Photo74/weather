<template>
  <div>
    <div style="font-weight: 700; margin-bottom: 20px;">Settings</div>
    <draggable
      v-model="weatherArrayComputed"
      group="weather"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group>
        <WeatherSettingsItem
          v-for="weatherItem in weatherArray"
          :key="weatherItem.id"
          :weatherItem="weatherItem"
        />
      </transition-group>
    </draggable>
    <WeatherSettingsItemAdd />
  </div>
</template>

<script>
import WeatherSettingsItem from "./WeatherSettings/WeatherSettingsItem.vue";
import WeatherSettingsItemAdd from "./WeatherSettings/WeatherSettingsItemAdd.vue";
import draggable from "vuedraggable";
import { mapState, mapMutations } from "vuex";
export default {
  name: "WeatherSettings",
  components: {
    draggable,
    WeatherSettingsItem,
    WeatherSettingsItemAdd,
  },
  methods: {
    ...mapMutations("weather", ["updateWeatherList"]),
  },
  computed: {
    ...mapState("weather", ["weatherArray"]),
    weatherArrayComputed: {
      get() {
        return this.weatherArray;
      },
      set(value) {
        this.updateWeatherList(value);
      },
    },
  },

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flexBetween {
  display: flex;
  justify-content: space-between;
}
</style>
