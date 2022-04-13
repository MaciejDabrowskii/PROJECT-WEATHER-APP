async function getData() {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const weatherApi = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${await position.coords
      .latitude}&lon=${await position.coords
      .longitude}&appid=b28f3971f9895a1eb3ed3d2c2b3fdd63`,
    { mode: "cors" }
  );
  const data = await weatherApi.json();
  console.log(data);
}
getData();
