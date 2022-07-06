// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let cityName = prompt("Enter the city");
// cityName = cityName.trim().toLowerCase();

// let n = 0;

// for (let city in weather) {
//   if (city === cityName) {
//     console.log(weather[city].temp);
//     cityName = city.charAt(0).toUpperCase() + city.slice(1);
//     alert(
//       `It is currently ${weather[city].temp}°C (${
//         weather[city].temp + 32
//       }°F) in ${cityName} with a humidity of ${weather[city].humidity}%`
//     );
//     n = n + 1;
//   }
// }

// if (n === 0) {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`
//   );
// }

// let city = prompt("Enter city");
// city = city.toLowerCase();

// if (weather[city] !== undefined) {
//   let humidity = weather[city].humidity;
//   let temperature = weather[city].temp;
//   let celsiusTemp = Math.round(temperature);
//   let fehrenheitTemp = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemp}°C (${fehrenheitTemp}°F) in ${city} with a humidity of ${humidity}%`
//     );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//     );
//   }

// conversion temperature metrics
// function conversionF() {
//   let tempCurrentMax = document.querySelector("#temp-current-max");
//   let tempCurrentMin = document.querySelector("#temp-current-min");
//   let tempCurrentFeels = document.querySelector("#temp-current-feels");
//   let temperatureMax = 21;
//   let temperatureMin = 14;
//   let temperatureFeels = 24;
//   let fehrenheitTempMax = Math.round((temperatureMax * 9) / 5 + 32);
//   let fehrenheitTempMin = Math.round((temperatureMin * 9) / 5 + 32);
//   let fehrenheitTempFeels = Math.round((temperatureFeels * 9) / 5 + 32);

//   tempCurrentMax.innerHTML = fehrenheitTempMax;
//   tempCurrentMin.innerHTML = fehrenheitTempMin;
//   tempCurrentFeels.innerHTML = fehrenheitTempFeels;
//   debugger;
//   let metricC = document.querySelector(".C");
//   let metricF = document.querySelector(".F");

//   metricC.classList.toggle("metricColor");
//   metricF.classList.toggle("metricColor");
// }

// function conversionC() {
//   let tempCurrentMax = document.querySelector("#temp-current-max");
//   let tempCurrentMin = document.querySelector("#temp-current-min");
//   let tempCurrentFeels = document.querySelector("#temp-current-feels");
//   let temperatureMax = 70;
//   let temperatureMin = 57;
//   let temperatureFeels = 75;
//   let fehrenheitTempMax = Math.round(((temperatureMax - 32) * 5) / 9);
//   let fehrenheitTempMin = Math.round(((temperatureMin - 32) * 5) / 9);
//   let fehrenheitTempFeels = Math.round(((temperatureFeels - 32) * 5) / 9);

//   tempCurrentMax.innerHTML = fehrenheitTempMax;
//   tempCurrentMin.innerHTML = fehrenheitTempMin;
//   tempCurrentFeels.innerHTML = fehrenheitTempFeels;

//   let metricC = document.querySelector(".C");
//   let metricF = document.querySelector(".F");

//   metricF.classList.toggle("metricColor");
//   metricC.classList.toggle("metricColor");
// }

// let metricConverF = document.querySelector(".F");
// let metricConverC = document.querySelector(".C");

// metricConverF.addEventListener("click", conversionF);
// metricConverC.addEventListener("click", conversionC);

// Format current date
function getCurrentDay(dateFormat) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satruday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[dateFormat.getDay()];
  let month = months[dateFormat.getMonth()];
  let date = dateFormat.getDate();
  let time = dateFormat.getHours();
  if (time < 10) {
    time = `0${time}`;
  }

  let min = dateFormat.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  return `${day} ${time}:${min}`;
}

let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = getCurrentDay(new Date());

// search city
function showData(response) {
  let tempCurrentMax = document.querySelector("#temp-current-max");
  let tempCurrentMin = document.querySelector("#temp-current-min");
  let tempCurrentFeels = document.querySelector("#temp-current-feels");
  let currentHumidity = document.querySelector("#humidity");
  let currentWind = document.querySelector("#wind");
  let currentCity = document.querySelector("#current-city");

  tempCurrentMax.innerHTML = Math.round(response.data.main.temp_max);
  tempCurrentMin.innerHTML = Math.round(response.data.main.temp_min);
  tempCurrentFeels.innerHTML = Math.round(response.data.main.feels_like);
  currentHumidity.innerHTML = Math.round(response.data.main.humidity);
  currentWind.innerHTML = Math.round(response.data.wind.speed);
  currentCity.innerHTML = response.data.name;

  console.log(response.data);
}

function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#current-city");
  let searchCity = document.querySelector("#search-city");
  currentCity.innerHTML = searchCity.value;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let cityApi = currentCity.innerHTML;
  let units = "metric";
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
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);

  let metricC = document.querySelector(".C");
  let metricF = document.querySelector(".F");

  metricC.classList.toggle("metricColor");
  metricF.classList.toggle("metricColor");

  let windDimen = document.querySelector("#wind-dimension");
  windDimen.innerHTML = "mil/h";
}

function conversionC() {
  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let currentCity = document.querySelector("#current-city");
  let cityApi = currentCity.innerHTML;
  let units = "metric";
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
  let units = "metric";
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
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city1 = document.querySelector("#city-1");
city1.addEventListener("click", getWeather1);

function getWeather2(event) {
  let city = document.querySelector("#city-2");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city2 = document.querySelector("#city-2");
city2.addEventListener("click", getWeather2);

function getWeather3(event) {
  let city = document.querySelector("#city-3");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city3 = document.querySelector("#city-3");
city3.addEventListener("click", getWeather3);

function getWeather4(event) {
  let city = document.querySelector("#city-4");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city4 = document.querySelector("#city-4");
city4.addEventListener("click", getWeather4);

function getWeather5(event) {
  let city = document.querySelector("#city-5");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city5 = document.querySelector("#city-5");
city5.addEventListener("click", getWeather5);

function getWeather6(event) {
  let city = document.querySelector("#city-6");
  let cityApi = city.innerHTML;

  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showData);
}

let city6 = document.querySelector("#city-6");
city6.addEventListener("click", getWeather6);
