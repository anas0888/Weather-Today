const searchForm = document.querySelector(".searchForm");
const searchBtn = document.querySelector(".searchBtn");
const weatherCard = document.querySelector(".weatherCard");
const cityName = document.querySelector(".city");
const weatherTemperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".description");
const searchCity = document.querySelector(".searchCity");

searchForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("form submitted");
    const city = searchCity.value;
console.log(city);
});
