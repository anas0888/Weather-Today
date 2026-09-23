    const searchForm = document.querySelector(".searchForm");
    const searchBtn = document.querySelector(".searchBtn");
    const weatherCard = document.querySelector(".weatherCard");
    const cityName = document.querySelector(".city");
    const weatherTemperature = document.querySelector(".temperature");
    const weatherDescription = document.querySelector(".description");
    const searchCity = document.querySelector(".searchCity");
    const apiKey = "75b162da8f9146a493d60222261909"
    searchForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("form submitted");
        if(searchCity.value.trim()== ""){
            console.error("please enter a city name")
        }
        else{
        const city = searchCity.value.trim();
    console.log(city);
weatherData(city)}
    });

    function weatherData(city){
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        fetch(apiUrl).then(response => {
            
            return response.json();
        })
        .then(data=>{ 
            if(data.error){
                displayError();
                console.log("could not get data")
            }
            else{
            weatherCard.textContent = "";
            console.log(data.location.name)
            cityName.textContent = data.location.name;
              console.log(data.current.temp_c)
              weatherTemperature.textContent = data.current.temp_c;
              console.log(data.current.condition.text)
              weatherDescription.textContent = data.current.condition.text;
            console.log(data);

    }
    })
    .catch(error =>{
        console.error(error)
    })

        console.log(apiUrl);
     console.log("i got the city name")
    }
    function displayError(){
        weatherCard.textContent = "";
        const error = document.createElement("h2")
        error.innerHTML = "could not get the data"
        weatherCard.appendChild(error);
    }