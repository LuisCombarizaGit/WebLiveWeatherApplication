// Api key and url put into constant for easy manipulatio
const api = {
  key: "9241a84639ec50932c0a1c8d3b3e9434",
  base: "https://api.openweathermap.org/data/2.5/",
};

// What ever the user types becomes the query for API
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

// Function to check once user has pressed (key 13 "Enter") send to query
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    getImages(searchbox.value);
    console.log(searchbox.value);
  }
}

// Call API (fetch) with query done by user input
function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

// Retrieve data from .json received from API and manipulate UI
function displayResults(weather) {
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;
}

function dateBuilder(d) {
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
