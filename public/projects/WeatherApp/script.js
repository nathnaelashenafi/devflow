//08e22ac720be1266cbc1f382dd96fcb4
const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("tempImg");
const description = document.getElementById("description");
const tempMax = document.getElementById("tempMax");
const tempLow = document.getElementById("tempLow");

const months = [
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
let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById("app");

const weatherApi = async () => {
  try {
    const cityName = document.getElementById("searchBarInput").value;
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=08e22ac720be1266cbc1f382dd96fcb4&units=metric`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );
    const weatherDataJson = await weatherData.json();
    console.log(weatherDataJson);
    city.innerHTML = weatherDataJson.name;
    tempLow.innerHTML = `${Math.round(weatherDataJson.main.temp_min)} °C`;
    tempMax.innerHTML = `${Math.round(weatherDataJson.main.temp_max)} °C`;
    description.innerHTML = weatherDataJson.weather[0].main;
    tempImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherDataJson.weather[0].icon}.png">`;
    temp.innerHTML = `<h2>${Math.round(weatherDataJson.main.temp)} °C</h2>`;
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("searchIcon").addEventListener("click", weatherApi);
