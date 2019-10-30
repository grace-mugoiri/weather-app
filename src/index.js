window.addEventListener('load', () => {
  let lat;
  let long;
  const myKey = 'c6ee67c2af79dc6be8e156787df2cbfe';
  let city;

  const cityName = document.querySelector('#city-name');
  const mainContent = document.getElementById('main-content');
  const weatherDesc = document.querySelector('.weather-description');
  const currentTemp = document.querySelector('.temp-type');
  const weatherInfo = document.querySelector('.weather-location');
  const weatherType = document.querySelector('.temp');
  const tempSection = document.querySelector('.temp-section');
  const tempSectionSpan = document.querySelector('.temp-section span');

  mainContent.classList.remove('rainy', 'cloudy', 'clear');

  function displayWeather(description, temp, main, name) {
    const celsius = Math.round(temp - 273.15);
    const fahrenheit = Math.round((temp - 273.15) * 1.8 + 32);

    weatherDesc.textContent = description;
    weatherInfo.textContent = name;
    weatherType.textContent = main;
    currentTemp.textContent = `${celsius}`;

    alert('click degrees to see in °C or °F');

    tempSection.addEventListener('click', () => {
      if (tempSectionSpan.textContent === '°C') {
        tempSectionSpan.textContent = '°F';
        currentTemp.textContent = `${fahrenheit}`;
      } else {
        tempSectionSpan.textContent = '°C';
        currentTemp.textContent = `${celsius}`;
      }
    });

    if (description.includes('rain')) {
      mainContent.classList.add('rainy');
    } else if (description.includes('cloud')) {
      mainContent.classList.add('cloudy');
    } else {
      mainContent.classList.add('clear');
    }
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}`;
      fetch(weatherApi, { mode: 'cors' })
        .then(response => response.json())
        .then((data) => {
          const { temp } = data.main;
          const { main, description } = data.weather[0];
          const { name } = data;

          displayWeather(description, temp, name, main);
        });
    });
  }

  document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    mainContent.classList.remove('rainy', 'cloudy', 'clear');
    const location = document.querySelector('#city-name').value;
    cityName.textContent = `${city-name}`
    if (location.length > 0) {
      city = location;
      document.querySelector('#city-name').value = '';

      const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

      fetch(weatherApi, { mode: 'cors' })
        .then(response => response.json())
        .then((data) => {
          const { temp } = data.main;
          const { main, description } = data.weather[0];
          const { name } = data;

          displayWeather(description, temp, name, main);
        })
				.catch(e => e);
			}else {
				alert('Enter city')
			}
  });
});
