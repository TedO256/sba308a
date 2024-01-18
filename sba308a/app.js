

$(document).ready(function(){
    const apiKey = "a43c51f7ac795ad915ee4e55eb5e50bb";
//api bizz
    const addCityToCarousel = function(city, temperature) {
        $('.slick-carousel').slick('slickAdd', `<div>${city}<br>Temperature: ${temperature.toFixed(2)}°F</div>`);
    };

    $('#addCityBtn').click(function() {
        const city = $('#cityInput').val();
        if (city.trim() !== '') {
            
            fetchWeatherData(city, apiKey)
                .then(data => {
                    
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
//carousel stuff
    $('.slick-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });

    
    $('.slick-prev').click(function(){
        $('.slick-carousel').slick('slickPrev');
    });

    $('.slick-next').click(function(){
        $('.slick-carousel').slick('slickNext');
    });

    function fetchWeatherData(city, apiKey) {
        const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        return fetch(queryURL).then(response => response.json());
    }

    function fetchTemperatureData(city, apiKey) {
        const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        return $.get(queryURL);
    }
//I found how to do this later through the api but thought it was a cool function
    function kelvinToFahrenheit(kelvin) {
        return (kelvin - 273.15) * 9/5 + 32;
    }
});

