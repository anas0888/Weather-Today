
const card = document.querySelector(".weatherCard")
const searchBtn = document.querySelector(".searchBtn");
const searchBar = document.querySelector(".searchCity");
const cityName  = document.querySelector(".city");
const temp = document.querySelector(".temperature");
const discriptionWeather = document.querySelector(".discription");
const apiKey = `e526affb06905071c9b36ceaa2922194`
const weatherForm = document.querySelector(".searchForm")

weatherForm.addEventListener("submit", async event => {
event.preventDefault();
const city = cityName.value;
if(city){
try{
const weatherData = await getWeatherData(city)
displayWeatherInfo(weatherData);

}
catch(error){
console.error(error);
displayError(error)
}
}
else displayError("please enter a city")
});


async function getWeatherData(cityName){
    const apiUrl= `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    const response = await fetch(apiUrl)
    const data = response.json()
console.log(data);
return data;
}
function displayWeatherInfo(data){

}
function displayError(message){
const errorDisplay = document.createElement('p')
errorDisplay.textContent = message;
card.innerHTML = "";
card.appendChild(errorDisplay);
}