import "./style.css";
import showData from "./show data";
import showIcon from "./images";
import classMenager from "./class-menager";

async function getData() {
  // IF USER REJECT GEOLOCATION SHOW DEFAULT:
  const getDefaultWeatherDataMetric = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=metric`,
    { mode: "cors" }
  ).catch((error) => {
    console.log(error);
  });
  const defaultWeatherDataMetric = await getDefaultWeatherDataMetric.json();

  // GET USER POSITION
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch((error) => {
    console.log(error);
    showData(defaultWeatherDataMetric);
  });
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
  showData(weatherData);

  console.log(weatherData);

  showIcon(weatherData.weather[0].icon);
  classMenager(weatherData);
}

getData();
