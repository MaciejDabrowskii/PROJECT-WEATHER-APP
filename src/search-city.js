// SEARCH FUNCTION, WHICH DOWNLOAD API DATA BY SEARCHING BY CITY NAME AND RETURN DATA
const searchByCityName = async (units) => {
  const search = async () => {
    if (units === "metric") {
      let searchValue = document.getElementById("search-city").value;

      const getSearchWeatherDataMetric = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=metric`,
        { mode: "cors" }
      ).catch((error) => {
        alert("Invalid city!");
        console.log(error);
      });
      const SearchWeatherDataMetric = await getSearchWeatherDataMetric.json();

      return SearchWeatherDataMetric;
    } else {
      let searchValue = document.getElementById("search-city").value;

      if (units === "imperial") {
        const getSearchWeatherDataImperial = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=b28f3971f9895a1eb3ed3d2c2b3fdd63&units=imperial`,
          { mode: "cors" }
        ).catch((error) => {
          alert("Invalid city!");
          console.log(error);
        });
        const SearchWeatherDataImperial =
          await getSearchWeatherDataImperial.json();
        return SearchWeatherDataImperial;
      }
    }
  };
  return search();
};
export default searchByCityName;
