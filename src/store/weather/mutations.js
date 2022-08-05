export const setWeatherFromLocalStorage = (state) => {
  const weatherArray = JSON.parse(localStorage.getItem("weatherArray"));
  state.weatherArray = weatherArray;
};

const syncStateToLocalStorage = (state) =>
  localStorage.setItem("weatherArray", JSON.stringify(state.weatherArray));

export const setWeather = (state, weather) => {
  const cityIndex = state.weatherArray.findIndex((w) => w.id == weather.id);
  if (cityIndex !== -1) state.weatherArray[cityIndex] = weather;
  else state.weatherArray.push(weather);
  syncStateToLocalStorage(state);
};

export const deleteWeather = (state, weatherId) => {
  state.weatherArray = state.weatherArray.filter((w) => w.id != weatherId);
  syncStateToLocalStorage(state);
};

export const updateWeatherList = (state, weatherArrayNew) => {
  state.weatherArray = weatherArrayNew;
  syncStateToLocalStorage(state);
};
