import i01d from "./icons/01d.svg";
import i01n from "./icons/01n.svg";
import i02d from "./icons/02d.svg";
import i02n from "./icons/02n.svg";
import i03d from "./icons/03d.svg";
import i03n from "./icons/03n.svg";
import i04d from "./icons/04d.svg";
import i04n from "./icons/04n.svg";
import i09d from "./icons/09d.svg";
import i09n from "./icons/09n.svg";
import i10d from "./icons/10d.svg";
import i10n from "./icons/10n.svg";
import i11d from "./icons/11d.svg";
import i11n from "./icons/11n.svg";
import i13d from "./icons/13d.svg";
import i13n from "./icons/13n.svg";
import i50d from "./icons/50d.svg";
import i50n from "./icons/50n.svg";
import error from "./icons/error.svg";

const showIcon = (code) => {
  const weatherImage = document.getElementById("weather-image");
  if (code === "01d") {
    weatherImage.src = i01d;
  }
  if (code === "01n") {
    weatherImage.src = i01n;
  }
  if (code === "02d") {
    weatherImage.src = i02d;
  }
  if (code === "02n") {
    weatherImage.src = i02n;
  }
  if (code === "03d") {
    weatherImage.src = i03d;
  }
  if (code === "03n") {
    weatherImage.src = i03n;
  }
  if (code === "04d") {
    weatherImage.src = i04d;
  }
  if (code === "04n") {
    weatherImage.src = i04n;
  }
  if (code === "09d") {
    weatherImage.src = i09d;
  }
  if (code === "09n") {
    weatherImage.src = i09n;
  }
  if (code === "10d") {
    weatherImage.src = i10d;
  }
  if (code === "10n") {
    weatherImage.src = i10n;
  }
  if (code === "11d") {
    weatherImage.src = i11d;
  }
  if (code === "11n") {
    weatherImage.src = i11n;
  }
  if (code === "13d") {
    weatherImage.src = i13d;
  }
  if (code === "13n") {
    weatherImage.src = i13n;
  }
  if (code === "50d") {
    weatherImage.src = i50d;
  }
  if (code === "50n") {
    weatherImage.src = i50n;
  }
  if (code === "error") {
    weatherImage.src = error;
  }
};
export default showIcon;
