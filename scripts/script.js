const appId = 'fd5910d5575fb44a7310ec96512c264e';
const units = 'metric';
let searchMethod;

const weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('windSpeed');
const cityHeader = document.getElementById('cityHeader');
const weatherIcon = document.getElementById('documentIconImg');

function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
        searchMethod = 'zip';
    }
    else {
        searchMethod = 'q';
    }
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFormServer) {
    console.log(resultFormServer);
    switch (resultFormServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url(images/clear.jpg)';
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url(images/cloudly.jpg)';
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url(images/rain.jpg)';
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url(images/storm.jpg)';
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url(images/snow.jpg)';
            break;
        default:
            break;
    }

    weatherIcon.src = `http://openweathermap.org/img/wn/${resultFormServer.weather[0].icon}.png`;

    const resultDescription = resultFormServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    temperatureElement.innerHTML = Math.floor(resultFormServer.main.temp) + '&#176' + 'C';
    windSpeedElement.innerHTML = 'Winds at ' + Math.floor(resultFormServer.wind.speed) + ' m/s';
    cityHeader.innerHTML = resultFormServer.name;
    humidityElement.innerHTML = 'Humidity levels at ' + resultFormServer.main.humidity + '%';

    setPositionforWeatherInfo();
}

function setPositionforWeatherInfo() {
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.style.visibility = 'visible';
}

document.getElementById('searchButton').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm) {
        searchWeather(searchTerm);
    }
})