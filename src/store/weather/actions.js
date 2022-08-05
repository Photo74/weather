import axios from "axios";
// import Vue from 'vue'
export async function updateAllWeather({ commit }) {
  try {
    const response = await Promise.all(
      JSON.parse(localStorage.getItem("weatherArray")).map(({ name }) => {
        return axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9db9055cd148bc1876fdb710f36e9108&units=metric`
        );
      })
    );
    return response.forEach(({ data }) => commit("setWeather", data));
  } catch (error) {
    console.log(error);
  }
}

export async function addWeather({ commit }, value) {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=9db9055cd148bc1876fdb710f36e9108&units=metric`
    ) //9db9055cd148bc1876fdb710f36e9108  6401b0ca50405455ad6775904fbd945b
    .then((res) => {
      commit("setWeather", res.data);
    })
    .catch(() => {
        // Vue.notify({
        //     group: 'error',
        //     title: 'Incorrect city',
        //     text: 'Enter another city',
        //     speed: 1000,
        //     type: 'error'
        // })
    });
}

export async function addWeatherCurrentGeolocation({ commit }, { lat, lon }) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=9db9055cd148bc1876fdb710f36e9108&units=metric`
    ) 
    .then((res) => {
      commit("setWeather", res.data);
    })
    .catch(() => {
    });
}
