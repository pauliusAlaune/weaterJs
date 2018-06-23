// init weather object
const weather = new Weather('Boston', 'MA');
// init ui
const ui = new UI();

// get weather on dom load
//document.addEventListener('DOMContetntLoaded', getWeather);
getWeather();

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
