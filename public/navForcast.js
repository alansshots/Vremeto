const weatherSofia = async () => {
    let outputSofiaTempMin = document.querySelector('.sofia-temp-min');
    let outputSofiaTempMax = document.querySelector('.sofia-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sofia&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputSofiaTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputSofiaTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherPlovdiv = async () => {
    let outputPlovdivTempMin = document.querySelector('.plovdiv-temp-min');
    let outputPlovdivTempMax = document.querySelector('.plovdiv-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Plovdiv&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputPlovdivTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputPlovdivTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherVarna = async () => {
    let outputVarnaTempMin = document.querySelector('.varna-temp-min');
    let outputVarnaTempMax = document.querySelector('.varna-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Varna&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputVarnaTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputVarnaTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherBurgas = async () => {
    let outputBurgasTempMin = document.querySelector('.burgas-temp-min');
    let outputBurgasTempMax = document.querySelector('.burgas-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Burgas&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputBurgasTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputBurgasTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherRuse = async () => {
    let outputRuseTempMin = document.querySelector('.ruse-temp-min');
    let outputRuseTempMax = document.querySelector('.ruse-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ruse&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputRuseTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputRuseTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherStaraZagora = async () => {
    let outputStaraZagoraTempMin = document.querySelector('.staraZagora-temp-min');
    let outputStaraZagoraTempMax = document.querySelector('.staraZagora-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stara Zagora&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputStaraZagoraTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputStaraZagoraTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherPleven = async () => {
    let outputPlevenTempMin = document.querySelector('.pleven-temp-min');
    let outputPlevenTempMax = document.querySelector('.pleven-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pleven&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputPlevenTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputPlevenTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherSliven = async () => {
    let outputSlivenTempMin = document.querySelector('.sliven-temp-min');
    let outputSlivenTempMax = document.querySelector('.sliven-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sliven&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputSlivenTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputSlivenTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherDobrich = async () => {
    let outputDobrichTempMin = document.querySelector('.dobrich-temp-min');
    let outputDobrichTempMax = document.querySelector('.dobrich-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dobrich&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputDobrichTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputDobrichTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherShumen = async () => {
    let outputShumenTempMin = document.querySelector('.shumen-temp-min');
    let outputShumenTempMax = document.querySelector('.shumen-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Shumen&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputShumenTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputShumenTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherHaskovo = async () => {
    let outputHaskovoTempMin = document.querySelector('.haskovo-temp-min');
    let outputHaskovoTempMax = document.querySelector('.haskovo-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Haskovo&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputHaskovoTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputHaskovoTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherPazargik = async () => {
    let outputPazargikTempMin = document.querySelector('.pazargik-temp-min');
    let outputPazargikTempMax = document.querySelector('.pazargik-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Пазарджик&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputPazargikTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputPazargikTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

const weatherVelikoTurnovo = async () => {
    let outputVelikoTurnovoTempMin = document.querySelector('.velikoTurnovo-temp-min');
    let outputVelikoTurnovoTempMax = document.querySelector('.velikoTurnovo-temp-max');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Veliko Turnovo&units=metric&appid=48985e051479462361abf058526853cd`);

    const data = await response.json();

    outputVelikoTurnovoTempMin.innerHTML = data.main.temp_min.toFixed(0) + '&deg;';
    outputVelikoTurnovoTempMax.innerHTML = data.main.temp_max.toFixed(0) + '&deg;';
};

window.onload = weatherVelikoTurnovo();
window.onload = weatherPazargik();
window.onload = weatherHaskovo();
window.onload = weatherShumen();
window.onload = weatherDobrich();
window.onload = weatherSliven();
window.onload = weatherPleven();
window.omload = weatherStaraZagora();
window.onload = weatherRuse();
window.onload = weatherBurgas();
window.onload = weatherVarna();
window.onload = weatherPlovdiv();
window.onload = weatherSofia();