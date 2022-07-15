// Format current date
function getCurrentDay(dateFormat) {
  let date = new Date(dateFormat);
  let currentDate = new Date();
  let time = currentDate.getHours();
  if (time < 10) {
    time = `0${time}`;
  }
  let min = currentDate.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satruday",
  ];
  let day = days[date.getDay()];

  return `${day} ${time}:${min}`;
}

// search city
function showData(response) {
  let dateElement = document.querySelector("#current-day");
  let tempCurrentMax = document.querySelector("#temp-current-max");
  let tempCurrentMin = document.querySelector("#temp-current-min");
  let tempCurrentFeels = document.querySelector("#temp-current-feels");
  let currentHumidity = document.querySelector("#humidity");
  let currentWind = document.querySelector("#wind");
  let currentWeatherDes = document.querySelector("#weater-description");
  let currentCity = document.querySelector("#current-city");
  let currentIcon = document.querySelector("#current-icon");

  tempCurrentMax.innerHTML = Math.round(response.data.main.temp_max);
  tempCurrentMin.innerHTML = Math.round(response.data.main.temp_min);
  tempCurrentFeels.innerHTML = Math.round(response.data.main.feels_like);
  currentHumidity.innerHTML = Math.round(response.data.main.humidity);
  currentWind.innerHTML = Math.round(response.data.wind.speed);
  currentCity.innerHTML = response.data.name;
  currentWeatherDes.innerHTML = response.data.weather[0].main;
  dateElement.innerHTML = getCurrentDay(response.data.dt * 1000);
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  currentIcon.setAttribute(
    "alt",
    `http://openweathermap.org/img/wn/${response.data.weather[0].main}@2x.png`
  );
}

function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#current-city");
  let searchCity = document.querySelector("#search-city");
  let city1 = document.querySelector("#city-1");
  let city2 = document.querySelector("#city-2");
  let city3 = document.querySelector("#city-3");
  let city4 = document.querySelector("#city-4");
  let city5 = document.querySelector("#city-5");
  let city6 = document.querySelector("#city-6");

  city6.innerHTML = city5.innerHTML;
  city5.innerHTML = city4.innerHTML;
  city4.innerHTML = city3.innerHTML;
  city3.innerHTML = city2.innerHTML;
  city2.innerHTML = city1.innerHTML;
  city1.innerHTML = currentCity.innerHTML;
  currentCity.innerHTML = searchCity.value;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let cityApi = currentCity.innerHTML;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

// current weather
let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
let currentCity = document.querySelector("#current-city");
let cityApi = currentCity.innerHTML;
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showData);

// conversion temp

function conversionF() {
  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let currentCity = document.querySelector("#current-city");
  let cityApi = currentCity.innerHTML;
  units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);

  let metricC = document.querySelector(".C");
  let metricF = document.querySelector(".F");

  metricC.classList.toggle("metricColor");
  metricF.classList.toggle("metricColor");

  let windDimen = document.querySelector("#wind-dimension");
  windDimen.innerHTML = "m/h";
}

function conversionC() {
  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let currentCity = document.querySelector("#current-city");
  let cityApi = currentCity.innerHTML;
  units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);

  let metricC = document.querySelector(".C");
  let metricF = document.querySelector(".F");
  let windDimen = document.querySelector("#wind-dimension");
  windDimen.innerHTML = "m/sec";
  metricF.classList.toggle("metricColor");
  metricC.classList.toggle("metricColor");
}

let metricConverF = document.querySelector(".F");
let metricConverC = document.querySelector(".C");

metricConverF.addEventListener("click", conversionF);
metricConverC.addEventListener("click", conversionC);

// weather current location
function getPosition(position) {
  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

function getLoc(event) {
  navigator.geolocation.getCurrentPosition(getPosition);
}

let currentLoc = document.querySelector("#current-location");
currentLoc.addEventListener("click", getLoc);

// weather saved cities
function getWeather1(event) {
  let city = document.querySelector("#city-1");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city1 = document.querySelector("#city-1");
city1.addEventListener("click", getWeather1);

function getWeather2(event) {
  let city = document.querySelector("#city-2");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city2 = document.querySelector("#city-2");
city2.addEventListener("click", getWeather2);

function getWeather3(event) {
  let city = document.querySelector("#city-3");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city3 = document.querySelector("#city-3");
city3.addEventListener("click", getWeather3);

function getWeather4(event) {
  let city = document.querySelector("#city-4");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city4 = document.querySelector("#city-4");
city4.addEventListener("click", getWeather4);

function getWeather5(event) {
  let city = document.querySelector("#city-5");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city5 = document.querySelector("#city-5");
city5.addEventListener("click", getWeather5);

function getWeather6(event) {
  let city = document.querySelector("#city-6");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city6 = document.querySelector("#city-6");
city6.addEventListener("click", getWeather6);
