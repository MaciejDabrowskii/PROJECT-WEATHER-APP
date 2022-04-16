import "./style.css";
import showData from "./show-data";
import showIcon from "./images";
import classMenager from "./class-menager";
import searchByCityName from "./search-city";

async function getData() {
  let units = "metric";
  let counter = 0;
  document.querySelector(".units").textContent = `UNITS: ${units}`;
  let geoRejected = "no";
  let weatherData;

  // IF USER REJECT GEOLOCATION FETCH DEFAULT LOCATION DATA:
  let getDefaultWeatherDataMetric = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=metric`,
    { mode: "cors" }
  )
    .then((resonse) => resonse.json())
    .catch((error) => {
      console.log(error);
    });
  const getDefaultWeatherDataImperial = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=imperial`,
    { mode: "cors" }
  )
    .then((resonse) => resonse.json())
    .catch((error) => {
      console.log(error);
    });

  const defaultWeatherDataMetric = await getDefaultWeatherDataMetric;

  // GET USER COORDINATES
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch((error) => {
    console.log(error);
    geoRejected = "yes";
    showData(defaultWeatherDataMetric, units);
    showIcon(defaultWeatherDataMetric.weather[0].icon);
    classMenager(defaultWeatherDataMetric);
  });

  //FETCH WEATHER DATA WITH API IF USER ALLOWED GEOLOCATION OR USED SEARCH
  let getWeatherDataMetric;
  let getWeatherDataImperial;
  let weatherDataMatric;
  let weatherDataImperial;

  if (geoRejected === "no") {
    getWeatherDataMetric = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${await position
        .coords.latitude}&lon=${await position.coords
        .longitude}&appid=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=metric`,
      { mode: "cors" }
    ).catch((error) => {
      console.log(error);
    });

    getWeatherDataImperial = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${await position
        .coords.latitude}&lon=${await position.coords
        .longitude}&appid=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=imperial`,
      { mode: "cors" }
    ).catch((error) => {
      console.log(error);
    });
    weatherDataMatric = await getWeatherDataMetric.json();
    weatherDataImperial = await getWeatherDataImperial.json();
    weatherData = weatherDataMatric;

    showData(weatherData, units);
    showIcon(weatherData.weather[0].icon);
    classMenager(weatherData);
  }

  //EVENT FOR SEARCH FORM
  document.getElementById("search-btn").addEventListener("click", async () => {
    counter++;
    geoRejected = "no";
    weatherData = await searchByCityName(units);
    // IF USER ENTERED WRONG CITY NAME AND API RETURNED ERROR
    if (weatherData.cod === "404") {
      showIcon("error");
      document.querySelector(".temperature").textContent = "City not found!";
      alert("City not found!");
    }

    await showData(weatherData, units);
    await showIcon(weatherData.weather[0].icon);
    classMenager(weatherData);
  });
  // SWITCH UNITS FUNCTIONS
  document
    .getElementById("switch-units")
    .addEventListener("click", async () => {
      if (units === "metric") {
        // IF USER REJECTED GEOLOCATION AT START AND APP DOWNLOADED DEFAULT DATA AND UNITS ARE METRIC, CHANGE DATA TO IMPERIAL UNITS AND DISPLAY NEW DATA:
        if (geoRejected === "yes" && counter === 0) {
          units = "imperial";
          document.querySelector(".units").textContent = `UNITS: ${units}`;
          weatherData = getDefaultWeatherDataImperial;

          showData(weatherData, units);
        }
        // IF USER ALLOWED GEOLOCATION AT START AND UNITS ARE METRIC, CHANGE GEOLOCATED DATA TO IMPERIAL UNITS AND DISPLAY NEW DATA:
        if (counter === 0 && geoRejected === "no") {
          weatherData = weatherDataImperial;
          units = "imperial";
          showData(weatherData, units);
        }
        // IF USER USED SEARCH AND UNITS ARE METRIC, CHANGE SEARCHED DATA TO IMPERIAL UNITS AND DISPLAY NEW DATA:
        else if (counter > 0 && geoRejected === "no") {
          units = "imperial";
          document.querySelector(".units").textContent = `UNITS: ${units}`;
          weatherData = await searchByCityName(units);
          showData(weatherData, units);
        }
      } else {
        // IF USER REJECTED GEOLOCATION AT START AND APP DOWNLOADED DEFAULT DATA AND UNITS ARE IMPERIAL, CHANGE DATA TO METRIC UNITS AND DISPLAY NEW DATA:
        if (geoRejected === "yes" && counter === 0) {
          units = "metric";
          document.querySelector(".units").textContent = `UNITS: ${units}`;
          weatherData = getDefaultWeatherDataMetric;

          showData(weatherData, units);
        }
        // IF USER ALLOWED GEOLOCATION AT START AND UNITS ARE IMPERIAL, CHANGE GEOLOCATED DATA TO METRIC UNITS AND DISPLAY NEW DATA:
        if (counter === 0 && geoRejected === "no") {
          weatherData = weatherDataMatric;
          units = "metric";
          document.querySelector(".units").textContent = `UNITS: ${units}`;
          showData(weatherData, units);
          // IF USER USED SEARCH AND UNITS ARE IMPERIAL, CHANGE SEARCHED DATA TO METRIC UNITS AND DISPLAY NEW DATA:
        } else if (counter > 0 && geoRejected === "no") {
          units = "metric";
          document.querySelector(".units").textContent = `UNITS: ${units}`;
          weatherData = await searchByCityName(units);
          showData(weatherData, units);
        }
      }
    });
}

getData();
