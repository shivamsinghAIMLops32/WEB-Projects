const apikey = "f1eec72ad310699065480ab3d34a2742";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) =>{
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
  // try and catch method
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather? q=${cityValue}&appid =${apikey}&units= metric`)

    if(!response.ok){
      throw new Error("network response was not ok")
    }

    const data = await response.json()

    const temperature =Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;
    
    const details = [
      `feels like: ${Math.round(data.main.feels_like)}`
      `Humidity: $(data.main.humidity)`
      `Wind speed: ${data.wind.speed1}`
    ]

    weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`
  } catch (error) {
    
  }
}