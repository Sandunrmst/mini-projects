(function (){

    const APIKEY = "2e16d54d58f5222da129eb82c142b5ce";
    //please kindly make your own API key with and it's free -> https://openweathermap.org/
    const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIMG = document.querySelector(".info-main img");
    const cityError = document.querySelector(".city-error p")

    async function checkWeather(city){
        const response = await fetch(APIURL + `&q=${city}` + `&appid=${APIKEY}`);
        
        if(response.status == 404 || response.status == 400){
            cityError.innerHTML = "Please enter valid city name";
        }
        else{
            cityError.innerHTML = "";
            var data = await response.json();
            console.log(data);
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.humi').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == 'Clouds'){
                weatherIMG.src = "images/clouds.png";
            }
            else if(data.weather[0].main == 'Clear'){
                weatherIMG.src = "images/clear.png";
            }
            else if(data.weather[0].main == 'Rain'){
                weatherIMG.src = "images/rain.png";
            }
            else if(data.weather[0].main == 'Drizzle'){
                weatherIMG.src = "images/drizzel.png";
            }
            else if(data.weather[0].main == 'Mist'){
                weatherIMG.src = "images/mist.png";
            }

        }

        
    }

    searchBtn.addEventListener('click', () =>{
        checkWeather(searchBox.value);
    });

    

}());


