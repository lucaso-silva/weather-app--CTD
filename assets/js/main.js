import closeInput from "./closeInput.js";
import { getWeatherInfo } from "./getWeatherInfo.js";
import openInput from "./openInput.js";
// import { getWeatherInfo } from "./getWeatherInfo.js";

const btnMobile = document.querySelector(".search-icon");
const searchBtn = document.querySelector(".btn-src");
let inputIsOpen = false;

const apiKey = "fa2e6e57dabe312d59e71999ddcd4ce6";
const apiCountryURL = "https://countryflagsapi.com/png/"

// const getWeatherInfo = async(city) => {
//     const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

//     const  response = await fetch(apiWeatherURL);
//     const data = response.json();

//     console.log(data);
// }


btnMobile.addEventListener("click", ()=> {
    if(!inputIsOpen) {
        openInput();
        inputIsOpen = true;
    } else {
        closeInput();
        inputIsOpen = false;
    }
});

searchBtn.addEventListener("click", ()=>{
    // e.preventDefault();

    const input = document.querySelector(".input")
    const city = input.value;

    getWeatherInfo(city); 
})