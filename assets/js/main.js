import closeInput from "./closeInput.js";
import openInput from "./openInput.js";

const btnMobile = document.querySelector(".search-icon");
const searchBtn = document.querySelector(".btn-src");
const input = document.querySelector(".input");

const cityElement = document.querySelector("#city");
const tempConditions = document.querySelector(".temp-condition");
const temperature = document.querySelector("#temperature");
const temperatureIcon = document.querySelector(".temp-img");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const maxTemp = document.querySelector("#max-temp");
const minTemp = document.querySelector("#min-temp");
const feelsLike = document.querySelector("#feels-like");
const title = document.querySelector(".title");
const mainCard = document.querySelector(".main-card");
const moreInfo = document.querySelector(".more-info");
const errorMsg = document.querySelector(".error-msg");

let inputIsOpen = false;

const apiKey = "fa2e6e57dabe312d59e71999ddcd4ce6";
// const apiCountryURL = "https://countryflagsapi.com/png/"

const getWeatherInfo = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(apiWeatherURL);
  const data = response.json();

  return data;
};

const showWeatherInfo = async (city) => {
  const data = await getWeatherInfo(city);

  if (data.cod === "404") {
    errorMsg.classList.remove("hide");
    
    title.classList.add("hide");
    mainCard.classList.add("hide");
    moreInfo.classList.add("hide");

  } else {
    title.classList.add("hide");
    errorMsg.classList.add("hide");

    mainCard.classList.remove("hide");
    moreInfo.classList.remove("hide");

    cityElement.innerHTML = data.name;
    tempConditions.innerHTML = data.weather[0].description;
    temperature.innerHTML = parseInt(data.main.temp);
    temperatureIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    wind.innerHTML = data.wind.speed;
    humidity.innerHTML = data.main.humidity;
    maxTemp.innerHTML = parseInt(data.main.temp_max);
    minTemp.innerHTML = parseInt(data.main.temp_min);
    feelsLike.innerHTML = parseInt(data.main.feels_like);
  }
};

btnMobile.addEventListener("click", () => {
  if (!inputIsOpen) {
    openInput();
    inputIsOpen = true;
  } else {
    closeInput();
    inputIsOpen = false;
  }
});

searchBtn.addEventListener("click", () => {
  const city = input.value;

  if (city.length > 0) {
    input.classList.remove("input-empty");
    input.setAttribute("placeholder", "Search for a place..");
    showWeatherInfo(city);

    input.value = "";
  } else {
    input.classList.add("input-empty");
    input.setAttribute("placeholder", "Input can't be empty..");
    title.classList.remove("hide");
    mainCard.classList.add("hide");
    moreInfo.classList.add("hide");
  }
});

input.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherInfo(city);
  }
});
