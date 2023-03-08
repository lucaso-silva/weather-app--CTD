# Weather-app--CTD

![weather-app](https://user-images.githubusercontent.com/97140968/223601731-e1456158-dc14-4a2d-91f0-d0d4171ffd48.png)
<p align="center"> See in the <a href="https://lucaso-silva.github.io/weather-app--CTD/"> link </a></p>

## Overview
Weather app developed looking for improving my skills in JavaScript programming using asynchronous functions.

The page is integrated with the [OpenWeather API](https://openweathermap.org/api) which provides the weather information.

> Status: Concluded 
- Deadline: 03.07.23 ✅
---

### Objectives
Users should be able to:
- View the optimal layout for the site depending on their device's screen size ✅
- Receive weather information about the searched city ✅
- Receive an error message when the input is submitted if:
  - The input field is empty ✅
  - The app doesn't find any information about the city informed ✅

## Built with
- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties
- CSS-grid
- Flexbox
- JavaScript

## What I learned 💡
This project was really useful to provide and strengthen the necessary basis for how to get and use data provided by a third API.

Data about temperature and weather conditions were provided by [OpenWeather API](https://openweathermap.org/api), and the country's flag image was provided by [Country Flags API](https://flagsapi.com/).

Different from my previous project using API, this time, if the user put in an invalid city, what impossibility the request successful, a message related to error 404 will be shown.
I also set a "Searching" message to be shown while the request is processing.
```JavaScript 
const showWeatherInfo = async (city) => {
  const loadingMsg = document.querySelector(".searching-msg");

  loadingMsg.classList.remove("hide");
  title.classList.add("hide");
  mainCard.classList.add("hide");
  moreInfo.classList.add("hide");
  errorMsg.classList.add("hide");

  const data = await getWeatherInfo(city);

  if (data.cod === "404") {
    errorMsg.classList.remove("hide");
    loadingMsg.classList.add("hide");

    title.classList.add("hide");
    mainCard.classList.add("hide");
    moreInfo.classList.add("hide");
  }
```
During the development of this page, I could work with CSS Grid Layout, and improve my knowledge about display grid properties: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-area`.
```CSS
.header-mobile--open {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: 
    "logo search-icon"
    "input input";
    row-gap: .75em;
    width: 100%;
    box-sizing: border-box;
}

.logo-mobile--open {
    grid-area: logo;
}
```
I learned to use the selector `::before`, and so deal with background properties without interfering with the properties of main elements.
```CSS
.title::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--bg-color);
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    z-index: -1;
    opacity: .5;
}
```

### 🛠️ Continued development
<p>The next steps will be focused on coding refactoring.</p>

---
### Useful resources
- [CSS-Tricks Guides](https://css-tricks.com/guides/) - Useful guides to learn and consult about CSS custom properties.
- [Como aplicar opacidade em background-image sem afetar textos](https://dev.to/sucodelarangela/como-aplicar-opacidade-em-background-image-sem-afetar-textos-31fj) - This is an amazing and easy-understanding article that helped me to set background image opacity correctly without interfering with other elements' properties.
