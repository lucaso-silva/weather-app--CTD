const apiKey = "fa2e6e57dabe312d59e71999ddcd4ce6"

export const getWeatherInfo = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    const  response = await fetch(apiWeatherURL);
    const data = response.json();

    console.log(data);
}