import windDirectionFunction from "./wind-direction";
const showData = (data) => {
  const dataList = document.querySelector(".data-list");
  const temperature = document.querySelector(".temperature");

  const cityAndCoutry = document.createElement("li");
  cityAndCoutry.textContent = `${data.name}, ${data.sys.country}`;

  const wind = document.createElement("ul");
  wind.classList.add("wind-list");
  wind.textContent = `Wind:`;
  const windSpeed = document.createElement("li");
  const windDirection = document.createElement("li");
  windSpeed.textContent = `Speed: ${data.wind.speed}`;
  windDirection.textContent = `Direction: ${windDirectionFunction(data)}`;
  wind.append(windSpeed, windDirection);

  const minMaxTemp = document.createElement("ul");
  minMaxTemp.textContent = "Temperature:";
  const minTemp = document.createElement("li");
  minTemp.textContent = `Min: ${Math.round(data.main.temp_min * 10) / 10}`;
  const maxTemp = document.createElement("li");
  maxTemp.textContent = `Max: ${Math.round(data.main.temp_max * 10) / 10}`;
  minMaxTemp.append(minTemp, maxTemp);

  const humidity = document.createElement("li");
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  const visibility = document.createElement("li");
  visibility.textContent = `Visibility: ${data.visibility / 1000}km`;

  dataList.append(cityAndCoutry, wind, minMaxTemp, humidity, visibility);

  temperature.textContent = `${Math.round(data.main.temp * 10) / 10}°C`;
};
export default showData;
