// weatherApi.js
function fetchWeatherData(city, apiKey) {
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return fetch(queryURL).then(response => response.json());
}

function fetchTemperatureData(city, apiKey) {
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return $.get(queryURL);
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}