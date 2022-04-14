const createBody = () => {
  //   <div class="main-container">
  //     <div class="image-temp-container">
  //       <img src="" id="weather-image" />
  //       <h2 class="temperature"></h2>
  //     </div>
  //     <div class="dataContainer">
  //       <ul class="data-list"></ul>
  //     </div>
  //   </div>;
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const imgTempContainer = document.createElement("div");
  imgTempContainer.classList.add("image-temp-container");

  const img = document.createElement("img");
  img.id = "weather-image";

  const temp = document.createElement("h1");
  temp.classList.add("temperature");

  const dataContainer = document.createElement("div");
  dataContainer.classList.add("dataContainer");

  const dataList = document.createElement("ul");
  dataList.classList.add("data-list");

  imgTempContainer.append(img, temp);
  dataContainer.append(dataList);
  mainContainer.append(imgTempContainer, dataContainer);

  document.body.append(mainContainer);
};
export { createBody };
