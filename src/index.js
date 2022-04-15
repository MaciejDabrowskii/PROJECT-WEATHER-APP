import "./style.css";
import showData from "./show-data";
import showIcon from "./images";
import classMenager from "./class-menager";
import searchByCityName from "./search-city";

async function getData() {
  let units = "metric";
  let counter = 0;
  document.querySelector(".units").textContent = `UNITS: ${units}`;

  // IF USER REJECT GEOLOCATION SHOW DEFAULT:
  const getDefaultWeatherDataMetric = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=metric`,
    { mode: "cors" }
  ).catch((error) => {
    console.log(error);
  });
  const defaultWeatherDataMetric = await getDefaultWeatherDataMetric.json();

  // GET USER COORDINATES
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch((error) => {
    console.log(error);
    showData(defaultWeatherDataMetric, units);
    showIcon(defaultWeatherDataMetric.weather[0].icon);
    classMenager(defaultWeatherDataMetric);
  });
  console.log(position);
  //FETCH WEATHER DATA WITH API
  const getWeatherDataMetric = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${await position.coords
      .latitude}&lon=${await position.coords
      .longitude}&appid=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=metric`,
    { mode: "cors" }
  ).catch((error) => {
    console.log(error);
  });

  const getWeatherDataImperial = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${await position.coords
      .latitude}&lon=${await position.coords
      .longitude}&appid=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=imperial`,
    { mode: "cors" }
  ).catch((error) => {
    console.log(error);
  });

  // CONVERT DATA TO JSON AND SAVE IN VARIABLE
  const weatherDataMatric = await getWeatherDataMetric.json();
  const weatherDataImperial = await getWeatherDataImperial.json();
  let weatherData = weatherDataMatric;

  // CREATE DIVS AND POPULATRE THEM WITH DATA FROM API
  showData(weatherData, units);
  showIcon(weatherData.weather[0].icon);
  classMenager(weatherData);

  //EVENT FOR SEARCH FORM
  document.getElementById("search-btn").addEventListener("click", async () => {
    weatherData = await searchByCityName(units);
    await showData(weatherData, units);
    await showIcon(weatherData.weather[0].icon);
    classMenager(weatherData);
    counter++;
  });

  document
    .getElementById("switch-units")
    .addEventListener("click", async () => {
      console.log(weatherData);
      if (units === "metric") {
        if (counter === 0) {
          weatherData = weatherDataImperial;
        } else weatherData = await searchByCityName(units);
        units = "imperial";

        showData(weatherData, units);
        document.querySelector(".units").textContent = `UNITS: ${units}`;
        console.log(units);
      } else {
        console.log(weatherData);
        if (counter === 0) {
          weatherData = weatherDataMatric;
        } else weatherData = await searchByCityName(units);
        units = "metric";
        showData(weatherData, units);
        document.querySelector(".units").textContent = `UNITS: ${units}`;
      }
    });

  console.log(weatherData);
}

getData();
