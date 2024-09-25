let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=f520e7479fcd85fe6de91feb2dc23afa";

async function checkWeather() {
  let city = document.querySelector(".input1").value;
  const response = await fetch(apiUrl + `&q=${city}`);
  weatherIcon = document.querySelector(".weather-icon");

  var res = await response;
  console.log(res);
  if (res.status == 404) {
    weatherIcon.src = "404.png";
    document.querySelector(".location").innerHTML = "Invalid City";
    document.querySelector(".location-icon").style.display = "none";
    document.querySelector(".bottom").style.display = "none";
    document.querySelector(".temp").style.display = "none";
  }

  var data = await response.json();

  console.log(data);
  console.log(data.cod + " cod");

  place = data.name;
  document.querySelector(".location").innerHTML = place.toUpperCase();
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
  document.querySelector(".humidity-per").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed").innerHTML =
    Math.round(data.wind.speed) + "km/h";

  document.querySelector(".location-icon").style.display = "";
  document.querySelector(".bottom").style.display = "flex";
  document.querySelector(".temp").style.display = "";

  weather = data.weather[0].main;
  document.querySelector(".weather").innerHTML = weather;
  console.log(weather);

  if (weather == "Clouds") {
    weatherIcon.src = "cloud.png";
  }
  if (weather == "Rain") {
    weatherIcon.src = "rain2.png";
  }
  if (weather == "Snow") {
    weatherIcon.src = "snow.png";
  }
  if (weather == "Clear") {
    weatherIcon.src = "clear.png";
  }
}
document.querySelector(".search").addEventListener("click", () => {
  checkWeather();
});
