async function getWeather() {
    let location = document.getElementById('location').value;
    if (!location) {
        alert("Please enter a location");
        return;
    }
    let apiKey = 'b9cba79c9b234c9dad5112722252102';
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById('weatherInfo').innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
        `;
    } catch (error) {
        alert("Could not fetch weather data");
    }
}