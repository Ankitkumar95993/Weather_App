// console.log("how was your day");

// const appid = "3ca6a433f8ea8fd1d3a1986a896148d3";

// function renderWeatherInfo(data)
// {
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)}`;
//     document.body.appendChild(newPara);
// }

// async function fetchWeatherDetails(){

//     try
//     {
//         let city = 'goa' ;
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`);
    
//         const data = await response.json();
//         console.log("weather data",data);
//         renderWeatherInfo(data);
//     }
//     catch(err){
    
//     }
// }

// async function getCustomweatherDetails()
// {
//     try{
//         let lat = 123427.6333;
//         let lon = 18323.3333;
//         let API_key = "3ca6a433f8ea8fd1d3a1986a896148d3";
    
//         const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);
//         let data = await result.json();
    
//         console.log(data);
//     }
//     catch(err){
//         console.log(" Error Found "+ err)
//     }
// }

// function getLocation(){

//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//        console.log("no geolocation supported to this device");
//     }
// }

// function showPosition(position)
// {
//      let lat = position.coords.latitude;
//      let longi = position.coords.longitude;
//      console.log(lat);
//      console.log(longi); 
// }

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    positions = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
    
}

