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
       
        if(searchCity.value.trim()=== ""){
            console.error("please enter a city name")
        }
        else{
        const city = searchCity.value.trim();
   
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
            const errorExists = document.querySelector(".error")
            if(errorExists){
                errorExists.remove()
            }
            
           
            cityName.textContent = data.location.name;
             
              weatherTemperature.textContent = data.current.temp_c;
             
              weatherDescription.textContent = data.current.condition.text;
           
    }}
)
    .catch(error =>{
        console.error(error)
    })
    }
    function displayError(){
        
        const error = document.createElement("h2")
        error.classList.add("error")
        const errorExists = document.querySelector(".error")
        if(errorExists){

        }
        else{
        error.textContent = "could not get the data"
        weatherCard.appendChild(error);
    }}