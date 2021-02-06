const btn = document.querySelector('.btn-city');
const input = document.querySelector('.input');

const weatherInfo = async () => {
    let weatherIcon = document.querySelector('.weather-icon');
    let feelsLike = document.querySelector('.feels-like');
    let humidity = document.querySelector('.humidity');
    let windSpeed = document.querySelector('.wind-speed');
    let locName = document.querySelector('.loc-name');
    let temp = document.querySelector('.temp');
    let location = input.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();
    console.log(data);

    icon = data.weather[0].icon;
    weatherIcon.innerHTML = `<img src="icons/${icon}.png">`;
    locName.innerHTML = location.toUpperCase();
    temp.innerHTML = data.main.temp.toFixed(0) + '&deg;';
    feelsLike.innerHTML = data.main.feels_like.toFixed(0) + '&deg;';
    humidity.innerHTML = data.main.humidity + '%';
    windSpeed.innerHTML = data.wind.speed.toFixed(0) + 'м/с';
}

const weatherInfoDefault = async () => {
  let weatherIcon = document.querySelector('.weather-icon');
  let feelsLike = document.querySelector('.feels-like');
  let humidity = document.querySelector('.humidity');
  let windSpeed = document.querySelector('.wind-speed');
  let locName = document.querySelector('.loc-name');
  let temp = document.querySelector('.temp');
  let location = input.value;

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=София&units=metric&appid=48985e051479462361abf058526853cd`);

  const data = await response.json();
  console.log(data);

  icon = data.weather[0].icon;
  weatherIcon.innerHTML = `<img src="icons/${icon}.png">`;
  locName.innerHTML = 'София';
  temp.innerHTML = data.main.temp.toFixed(0) + '&deg;';
  feelsLike.innerHTML = data.main.feels_like.toFixed(0) + '&deg;';
  humidity.innerHTML = data.main.humidity + '%';
  windSpeed.innerHTML = data.wind.speed.toFixed(0) + 'м/с';
}

window.onload = weatherInfoDefault();

btn.addEventListener('click', weatherInfo);

document.getElementById('name').addEventListener('keyup', function(e) {
    if (e.code === 'Enter') {
      e.preventDefault();
      weatherInfo();
    }
  });