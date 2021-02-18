const weatherFiveDayForecast = async () => {
  let location = input.value;

  const dateOne = document.querySelector('.date-one');
  const dateTwo = document.querySelector('.date-two');
  const dateThree = document.querySelector('.date-three');
  const dateFour = document.querySelector('.date-four');
  const dateFive = document.querySelector('.date-five');

  const forecastIconOne = document.querySelector('.forecastIcon-one');
  const forecastIconTwo = document.querySelector('.forecastIcon-two'); 
  const forecastIconThree = document.querySelector('.forecastIcon-three'); 
  const forecastIconFour = document.querySelector('.forecastIcon-four'); 
  const forecastIconFive = document.querySelector('.forecastIcon-five');  

  const tempOne = document.querySelector('.temp-one');
  const tempTwo = document.querySelector('.temp-two');
  const tempThree = document.querySelector('.temp-three');
  const tempFour = document.querySelector('.temp-four');
  const tempFive = document.querySelector('.temp-five');

  humidityOne = document.querySelector('.humidity-one');
  humidityTwo = document.querySelector('.humidity-two');
  humidityThree = document.querySelector('.humidity-three');
  humidityFour = document.querySelector('.humidity-four');
  humidityFive = document.querySelector('.humidity-five');

  windOne = document.querySelector('.wind-one');
  windTwo = document.querySelector('.wind-two');
  windThree = document.querySelector('.wind-three');
  windFour = document.querySelector('.wind-four');
  windFive = document.querySelector('.wind-five');

  const responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=40&appid=48985e051479462361abf058526853cd`, { mode: 'cors' });
  
  const data = await responce.json();
  console.log(data);

  dateOne.innerHTML = data.list[6].dt_txt.slice(0, -8);
  dateTwo.innerHTML = data.list[14].dt_txt.slice(0, -8);
  dateThree.innerHTML = data.list[21].dt_txt.slice(0, -8);
  dateFour.innerHTML = data.list[29].dt_txt.slice(0, -8);
  dateFive.innerHTML = data.list[39].dt_txt.slice(0, -8);


  iconOne = data.list[6].weather[0].icon;
  forecastIconOne.innerHTML = `<img src="icons/${iconOne}.png">`;

  iconTwo = data.list[14].weather[0].icon;
  forecastIconTwo.innerHTML = `<img src="icons/${iconTwo}.png">`;

  iconThree = data.list[25].weather[0].icon;
  forecastIconThree.innerHTML = `<img src="icons/${iconThree}.png">`;

  iconFour = data.list[29].weather[0].icon;
  forecastIconFour.innerHTML = `<img src="icons/${iconFour}.png">`;

  iconFive = data.list[39].weather[0].icon;
  forecastIconFive.innerHTML = `<img src="icons/${iconFive}.png">`;


  tempOne.innerHTML = data.list[6].main.temp_max.toFixed(0) + '&deg;';
  tempTwo.innerHTML = data.list[14].main.temp_max.toFixed(0) + '&deg;';
  tempThree.innerHTML = data.list[21].main.temp.toFixed(0) + '&deg;';
  tempFour.innerHTML = data.list[29].main.temp.toFixed(0) + '&deg;';
  tempFive.innerHTML = data.list[39].main.temp.toFixed(0) + '&deg;';

  humidityOne.innerHTML = data.list[6].main.humidity + '%';
  humidityTwo.innerHTML = data.list[14].main.humidity + '%';
  humidityThree.innerHTML = data.list[21].main.humidity + '%';
  humidityFour.innerHTML = data.list[29].main.humidity + '%';
  humidityFive.innerHTML = data.list[39].main.humidity + '%';

  windOne.innerHTML = data.list[6].wind.speed.toFixed(0) + 'м/с';
  windTwo.innerHTML = data.list[14].wind.speed.toFixed(0) + 'м/с';
  windThree.innerHTML = data.list[21].wind.speed.toFixed(0) + 'м/с';
  windFour.innerHTML = data.list[29].wind.speed.toFixed(0) + 'м/с';
  windFive.innerHTML = data.list[39].wind.speed.toFixed(0) + 'м/с';
}

const weatherFiveDayForecastDefault = async () => {
  let location = input.value;

  const dateOne = document.querySelector('.date-one');
  const dateTwo = document.querySelector('.date-two');
  const dateThree = document.querySelector('.date-three');
  const dateFour = document.querySelector('.date-four');
  const dateFive = document.querySelector('.date-five');

  const forecastIconOne = document.querySelector('.forecastIcon-one');
  const forecastIconTwo = document.querySelector('.forecastIcon-two'); 
  const forecastIconThree = document.querySelector('.forecastIcon-three'); 
  const forecastIconFour = document.querySelector('.forecastIcon-four'); 
  const forecastIconFive = document.querySelector('.forecastIcon-five');  

  const tempOne = document.querySelector('.temp-one');
  const tempTwo = document.querySelector('.temp-two');
  const tempThree = document.querySelector('.temp-three');
  const tempFour = document.querySelector('.temp-four');
  const tempFive = document.querySelector('.temp-five');

  humidityOne = document.querySelector('.humidity-one');
  humidityTwo = document.querySelector('.humidity-two');
  humidityThree = document.querySelector('.humidity-three');
  humidityFour = document.querySelector('.humidity-four');
  humidityFive = document.querySelector('.humidity-five');

  windOne = document.querySelector('.wind-one');
  windTwo = document.querySelector('.wind-two');
  windThree = document.querySelector('.wind-three');
  windFour = document.querySelector('.wind-four');
  windFive = document.querySelector('.wind-five');

  const responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Sofia&units=metric&cnt=40&appid=48985e051479462361abf058526853cd`, { mode: 'cors' });
  
  const data = await responce.json();
  console.log(data);

  dateOne.innerHTML = data.list[6].dt_txt.slice(0, -8);
  dateTwo.innerHTML = data.list[14].dt_txt.slice(0, -8);
  dateThree.innerHTML = data.list[21].dt_txt.slice(0, -8);
  dateFour.innerHTML = data.list[29].dt_txt.slice(0, -8);
  dateFive.innerHTML = data.list[39].dt_txt.slice(0, -8);


  iconOne = data.list[6].weather[0].icon;
  forecastIconOne.innerHTML = `<img src="icons/${iconOne}.png">`;

  iconTwo = data.list[14].weather[0].icon;
  forecastIconTwo.innerHTML = `<img src="icons/${iconTwo}.png">`;

  iconThree = data.list[21].weather[0].icon;
  forecastIconThree.innerHTML = `<img src="icons/${iconThree}.png">`;

  iconFour = data.list[32].weather[0].icon;
  forecastIconFour.innerHTML = `<img src="icons/${iconFour}.png">`;

  iconFive = data.list[39].weather[0].icon;
  forecastIconFive.innerHTML = `<img src="icons/${iconFive}.png">`;


  tempOne.innerHTML = data.list[6].main.temp_max.toFixed(0) + '&deg;';
  tempTwo.innerHTML = data.list[14].main.temp.toFixed(0) + '&deg;';
  tempThree.innerHTML = data.list[21].main.temp.toFixed(0) + '&deg;';
  tempFour.innerHTML = data.list[29].main.temp.toFixed(0) + '&deg;';
  tempFive.innerHTML = data.list[39].main.temp.toFixed(0) + '&deg;';

  humidityOne.innerHTML = data.list[6].main.humidity + '%';
  humidityTwo.innerHTML = data.list[14].main.humidity + '%';
  humidityThree.innerHTML = data.list[21].main.humidity + '%';
  humidityFour.innerHTML = data.list[29].main.humidity + '%';
  humidityFive.innerHTML = data.list[39].main.humidity + '%';

  windOne.innerHTML = data.list[6].wind.speed.toFixed(0) + 'м/с';
  windTwo.innerHTML = data.list[14].wind.speed.toFixed(0) + 'м/с';
  windThree.innerHTML = data.list[21].wind.speed.toFixed(0) + 'м/с';
  windFour.innerHTML = data.list[29].wind.speed.toFixed(0) + 'м/с';
  windFive.innerHTML = data.list[39].wind.speed.toFixed(0) + 'м/с';
}

window.onload = weatherFiveDayForecastDefault();

btn.addEventListener('click', weatherFiveDayForecast);

document.getElementById('name').addEventListener('keyup', function(e) {
    if (e.code === 'Enter') {
      e.preventDefault();
      weatherFiveDayForecast();
    }
  });