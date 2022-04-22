const windDirectionFunction = (weatherData) =>
{
  const winddegrees = weatherData.wind.deg;
  let direction = "";
  if (
    (winddegrees >= 0 && winddegrees < 31)
    || (winddegrees >= 331 && winddegrees <= 360)
  )
  {
    direction = "North";
  }
  if (winddegrees >= 31 && winddegrees <= 60)
  {
    direction = "North-East";
  }
  if (winddegrees >= 61 && winddegrees <= 120)
  {
    direction = "East";
  }
  if (winddegrees >= 121 && winddegrees <= 150)
  {
    direction = "East-South";
  }
  if (winddegrees >= 151 && winddegrees <= 210)
  {
    direction = "South";
  }
  if (winddegrees >= 211 && winddegrees <= 240)
  {
    direction = "South-West";
  }
  if (winddegrees >= 241 && winddegrees <= 300)
  {
    direction = "West";
  }
  if (winddegrees >= 301 && winddegrees <= 330)
  {
    direction = "North-West";
  }
  return direction;
};
export default windDirectionFunction;
