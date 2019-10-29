const currentTemp = document.querySelector('#currentTemp');
const currentDesc = document.querySelector('#currentDesc');
const currentPlace = document.querySelector('#currentPlace');
const humidity = document.querySelector('#humidity');
const currentIcon = document.querySelector('#currentIcon');

const body = document.querySelector('body');
let city = '60608';

document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault();
	city = document.querySelector('input').value;
	loader();
});

function weather() {
	fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${city},us&units=imperial&APPID=c6ee67c2af79dc6be8e156787df2cbfe`, { mode: 'cors' })
	.then(function(response) {
		document.querySelector('.loader').style.display = 'none';
		return response.json();
	})
	.then(function(response) {
		let temps = Math.round(new Date().getTime() / 1000) + 86400;
		if (temps < response.sys.sunset) {
			body.backgroundImage = "url('./../assets/images/rainy.jpg')";
		}
		else {
			body.backgroundImage = "url('./../assets/images/sunny.jpg)";
		}
		const iconCode = response.weather[0].icon;
		const iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';
		currentIcon.src = iconUrl;
		currentTemp.innerHTML = response.main.temp.toFixed(0) + ' F';
		currentDesc.innerHTML = response.weather[0].description;
		humidity.innerHTML = 'Humidity: ' + response.main.humidity;
		currentPlace.innerHTML = response.name;
	})
	.catch(function(error) {
		alert('THAT IS NOT A VALID CITY. CHOOSE AGAIN PLEASE!');
	});
}

function loader() {
	document.querySelector('.loader').style.display = 'block';
	weather();
}

window.onload(weather());
