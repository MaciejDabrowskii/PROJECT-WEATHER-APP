// FUNCTION WHICH ADD CLASS OF WETHER FROM API DATA TO ICON DIV
const classMenager = (data) => {
  const container = document.getElementById("image-temp-container");
  container.className = "";
  const className = `${data.weather[0].main}`;
  className.toLowerCase();
  container.classList.add(`${className.toLowerCase()}`);
};
export default classMenager;
