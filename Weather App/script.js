getWeatherData = (city) => {
  
    const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b2c81e49e9msh940e47d27f4e24cp1d67d5jsnd917bad73c60',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
  
    return fetch(url, options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
    
}

const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    console.log(city)
    const data = await getWeatherData(city)
    showWeatherData(data)
}
  
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9
}
  
const showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('temp').innerText = fahrenheitToCelsius(weatherData.main.temp).toFixed(2)
    document.getElementById('min-temp').innerText = fahrenheitToCelsius(weatherData.main.temp_min).toFixed(2)
    document.getElementById('max-temp').innerText = fahrenheitToCelsius(weatherData.main.temp_max).toFixed(2)
}
  
  