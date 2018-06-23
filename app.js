// init weather object
const weather = new Weather('Boston', 'MA');

// get weather on dom load
document.addEventListener('DOMContetntLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
}
