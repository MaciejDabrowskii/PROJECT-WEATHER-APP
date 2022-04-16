import windDirectionFunction from "./wind-direction";
// CREATE DIVS AND POPULATE THEM WITH DATA
const showData = (data, units) => {
  if (units === "metric") {
    document.querySelector(".units").textContent = `UNITS: ${units}`;
    const dataList = document.querySelector(".data-list");
    dataList.innerHTML = "";
    const temperature = document.querySelector(".temperature");

    const cityAndCoutry = document.createElement("li");
    cityAndCoutry.classList.add("cityAndCoutry");
    cityAndCoutry.textContent = `${data.name}, ${data.sys.country}`;

    const wind = document.createElement("ul");
    wind.classList.add("wind-list");
    wind.textContent = `Wind:`;
    const windSpeed = document.createElement("li");
    const windDirection = document.createElement("li");
    windSpeed.textContent = `Speed: ${data.wind.speed} m/s`;
    windDirection.textContent = `Direction: ${windDirectionFunction(data)}`;
    wind.append(windSpeed, windDirection);

    const minMaxTemp = document.createElement("ul");
    minMaxTemp.textContent = "Temperature:";
    const minTemp = document.createElement("li");
    minTemp.textContent = `Min: ${Math.round(data.main.temp_min * 10) / 10} °C`;
    const maxTemp = document.createElement("li");
    maxTemp.textContent = `Max: ${Math.round(data.main.temp_max * 10) / 10} °C`;
    minMaxTemp.append(minTemp, maxTemp);

    const humidity = document.createElement("li");
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    const visibility = document.createElement("li");
    visibility.textContent = `Pressure: ${data.main.pressure} hPa`;

    dataList.append(cityAndCoutry, wind, minMaxTemp, humidity, visibility);

    temperature.textContent = `${Math.round(data.main.temp * 10) / 10} °C`;
  } else {
    document.querySelector(".units").textContent = `UNITS: ${units}`;
    const dataList = document.querySelector(".data-list");
    dataList.innerHTML = "";
    const temperature = document.querySelector(".temperature");

    const cityAndCoutry = document.createElement("li");
    cityAndCoutry.classList.add("cityAndCoutry");
    cityAndCoutry.textContent = `${data.name}, ${data.sys.country}`;

    const wind = document.createElement("ul");
    wind.classList.add("wind-list");
    wind.textContent = `Wind:`;
    const windSpeed = document.createElement("li");
    const windDirection = document.createElement("li");
    windSpeed.textContent = `Speed: ${data.wind.speed} mi/h`;
    windDirection.textContent = `Direction: ${windDirectionFunction(data)}`;
    wind.append(windSpeed, windDirection);

    const minMaxTemp = document.createElement("ul");
    minMaxTemp.textContent = "Temperature:";
    const minTemp = document.createElement("li");
    minTemp.textContent = `Min: ${Math.round(data.main.temp_min * 10) / 10} °F`;
    const maxTemp = document.createElement("li");
    maxTemp.textContent = `Max: ${Math.round(data.main.temp_max * 10) / 10} °F`;
    minMaxTemp.append(minTemp, maxTemp);

    const humidity = document.createElement("li");
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    const visibility = document.createElement("li");
    visibility.textContent = `Pressure: ${data.main.pressure} hPa`;

    dataList.append(cityAndCoutry, wind, minMaxTemp, humidity, visibility);

    temperature.textContent = `${Math.round(data.main.temp * 10) / 10} °F`;
  }
};
export default showData;
