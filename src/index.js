import "./style.css";
import createBody from "./body.js";
async function getData() {
  const weatherImage = document.getElementById("weather-image");
  const dataList = document.querySelector(".data-list");
  const temperature = document.querySelector(".temperature");

  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const getWeatherDataMetric = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${await position.coords
      .latitude}&lon=${await position.coords
      .longitude}&appid=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=metric`,
    { mode: "cors" }
  );

  const getWeatherDataImperial = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${await position.coords
      .latitude}&lon=${await position.coords
      .longitude}&appid=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=imperial`,
    { mode: "cors" }
  );

  const weatherDataMatric = await getWeatherDataMetric.json();
  const weatherDataImperial = await getWeatherDataImperial.json();
  let weatherData = weatherDataMatric;

  const windDirectionFunction = () => {
    let winddegrees = weatherData.wind.deg;
    let direction = "";
    if (
      (winddegrees >= 0 && winddegrees < 31) ||
      (winddegrees >= 331 && winddegrees <= 360)
    ) {
      direction = "North";
    }
    if (winddegrees >= 31 && winddegrees <= 60) {
      direction = "North-East";
    }
    if (winddegrees >= 61 && winddegrees <= 120) {
      direction = "East";
    }
    if (winddegrees >= 121 && winddegrees <= 150) {
      direction = "East-South";
    }
    if (winddegrees >= 151 && winddegrees <= 210) {
      direction = "South";
    }
    if (winddegrees >= 211 && winddegrees <= 240) {
      direction = "South-West";
    }
    if (winddegrees >= 241 && winddegrees <= 300) {
      direction = "West";
    }
    if (winddegrees >= 301 && winddegrees <= 330) {
      direction = "North-West";
    }
    return direction;
  };

  const cityAndCoutry = document.createElement("li");
  cityAndCoutry.textContent = `${weatherData.name}, ${weatherData.sys.country}`;

  const wind = document.createElement("ul");
  wind.classList.add("wind-list");
  wind.textContent = `Wind:`;
  const windSpeed = document.createElement("li");
  const windDirection = document.createElement("li");
  windSpeed.textContent = `Speed: ${weatherData.wind.speed}`;
  windDirection.textContent = `Direction: ${windDirectionFunction()}`;
  wind.append(windSpeed, windDirection);

  const minMaxTemp = document.createElement("ul");
  minMaxTemp.textContent = "Temperature:";
  const minTemp = document.createElement("li");
  minTemp.textContent = `Min: ${
    Math.round(weatherData.main.temp_min * 10) / 10
  }`;
  const maxTemp = document.createElement("li");
  maxTemp.textContent = `Max: ${
    Math.round(weatherData.main.temp_max * 10) / 10
  }`;
  minMaxTemp.append(minTemp, maxTemp);

  const humidity = document.createElement("li");
  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
  const visibility = document.createElement("li");
  visibility.textContent = `Visibility: ${weatherData.visibility / 1000}km`;

  dataList.append(cityAndCoutry, wind, minMaxTemp, humidity, visibility);

  temperature.textContent = `${Math.round(weatherData.main.temp * 10) / 10}°C`;
  console.log(weatherData);
}
getData();

// http://openweathermap.org/img/w/10d.png
