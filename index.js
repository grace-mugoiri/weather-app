const myKey = 'c6ee67c2af79dc6be8e156787df2cbfe';
const form = document.querySelector('form');

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropDown = dropdowns[i];
            if (openDropDown.classList.contains('show')) {
                openDropDown.classList.remove('show');
            }
        }
    }
};

const displayWeather = (weather, temp) => {
    document.getElementById('the-weather').innerText = `${Math.round((temp - 273.15) * 1.8) + 32}\u2109 and ${weather}`;
};

const fetchWeather = (cities) => {
	const city = cities;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ myKey }`, { mode: 'cors' })
	.then(response => response.json())
    .then((response) => {
        let weather = response.name;
        displayWeather(response.weather[0].description, response.main.temp);
    })
    .catch(() => {
        document.getElementById('the-weather').innerText = "THAT IS NOT A VALID CITY. CHOOSE AGAIN PLEASE!";
    });
};
form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetchWeather(form.elements.city.value);
});
