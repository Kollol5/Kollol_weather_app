const inputBox = document.querySelector(".input-box")
const searchBtn = document.getElementById("searchbtn")
const weather_img = document.querySelector(".weather-image")
const temperature = document.querySelector(".temperature")
const humidity = document.getElementById("humidity")
const description = document.querySelector(".description")
const wind_speed = document.getElementById("wind-speed")


async function checkWeather(city){
    const api_key="8721d5069758426f4611654f9437a6b7";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    // console.log(weather_data);

    switch(weather_data.weather[0].main){
        case 'Clouds' :
            weather_img.src="/cloud.png"
            break;
        case 'Clear' :
            weather_img.src="/clear.png"
            break;
        case 'Mist' :
            weather_img.src="/mist.png"
            break;
        case 'Rain' :
            weather_img.src="/rain.png"
            break
        case 'snow' :
            weather_img.src="/snow.png"
            break;
    }
}

searchBtn.addEventListener('click',() =>{
    checkWeather(inputBox.value);
});