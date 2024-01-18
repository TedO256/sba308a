// main.js
$(document).ready(function(){
    const apiKey = "a43c51f7ac795ad915ee4e55eb5e50bb";

    $('#addCityBtn').click(function() {
        const city = $('#cityInput').val();
        if (city.trim() !== '') {
            // weather fectching
            fetchWeatherData(city, apiKey)
                .then(data => {
                    // Fetch temp fetching
                    fetchTemperatureData(city, apiKey)
                        .then(temperatureData => {
                            const temperatureKelvin = temperatureData.main.temp;
                            const temperatureFahrenheit = kelvinToFahrenheit(temperatureKelvin);
                            addCityToCarousel(`${city}: ${data.weather[0].description}`, temperatureFahrenheit);
                        })
                        .catch(error => {
                            console.error(error.message);
                        });
                })
                .catch(error => {
                    console.error(error.message);
                });
        }
    });
});