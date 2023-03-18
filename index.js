const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(" .loading-container");

// initially required variable

let currentTab = userTab;
let API_key = "3ca6a433f8ea8fd1d3a1986a896148d3";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){

    if(clickedTab!=currentTab)
    {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

    if(!searchForm.classList.contains("active"))
    { 
        userContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
    }

    else
    {
        // pehle search wale tab pr tha but ab user wala tab visible krwana hai
          searchForm.classList.remove("active");
          userContainer.classList.remove("active");
          getfromSessionStorage();
    }
  }

}

userTab.addEventListener("click", () => {
  switchTab(userTab);
});


searchTab.addEventListener("click", ()=>{
    switchTab(searchTab);
})



    //check if coordinates are already present in session storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-Coordinates")
   if(!localCoordinates){ 
     grantAccessContainer.classList.add("active");
   }
    else
   {
     const coordinates = JSON.parse(localCoordinates);
     fetchUserWeatherInfo(coordinates);
   }
}

async function fetchUserWeatherInfo(coordinates)
{
    const{lat,lon} = coordinates;
    //make grant container invisible 
    grantAccessContainer.classList.remove("active");
    // make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try{
        const response = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);
        const data = await response.json();

        loadingScreen.classList.remove("active");
        userContainer.classList.add("active");

        renderWeatherInfo(data);
    }

    catch(err)
    {
        //HW
        loadingScreen.classList.remove("active")
    }
}

function renderWeatherInfo(weatherInfo)                                            // optional chaining operator
{  //firstly, we have to fetch the data element
  const cityName = document.querySelector("[data-cityName]");             
  const countryIcon = document.querySelector("[data-countryIcon]");
  const desc = document.querySelector("[data-weatherDesp]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windSpeed]");
  const humidity = document.querySelector("[data-Humidity]");
  const cloudiness = document.querySelector("[data-Cloudiness]");


  //fetch value from the WeatherInfo and put it in UI

  cityName=weatherInfo?.name;
  countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  desc.innerText = weatherInfo?.weather?.[0]?.description;
  weatherIcon = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = weatherInfo?.main?.temp;
  windspeed.innerText = weatherInfo?.wind?.speed;
  humidity.innerText = weatherInfo?.main?.humidity;
  cloudiness.innerText = weatherInfo?.clouds?.all;

}

function getlocation()
{
  if(navigator.geolocation)
  {
    Navigator.geolocation.getCurrentPosition(showPosition);
  }

  else{
    //show an alert for no geolocation
  }

}

function showPosition(position)
{  
  const userCoordinates = {
    lat:position.coords.latitude,
    lon:position.coords.longitude
   }

   sessionStorage.setItem("user-Coordinates",JSON.stringify(userCoordinates));
   fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess");
grantAccessButton.addEventListener("click",getlocation);
