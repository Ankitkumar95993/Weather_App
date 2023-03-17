const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(" .loading-container");

// initially required variable

let currentTab = userTab;

currentTab.classList.add("current-tab");

function switchTab(clickedTab){

    if(clickedTab!=currentTab)
    {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }

}

userTab.addEventListener("click", () => {
  switchTab(userTab);
});


searchTab.addEventListener("click", ()=>{
    switchTab(searchTab);
})
