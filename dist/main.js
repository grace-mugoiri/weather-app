/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', () => {\n  let lat;\n  let long;\n  const myKey = 'c6ee67c2af79dc6be8e156787df2cbfe';\n  let city;\n\n  const cityName = document.querySelector('#city-name');\n  const mainContent = document.getElementById('main-content');\n  const weatherDesc = document.querySelector('.weather-description');\n  const currentTemp = document.querySelector('.temp-type');\n  const weatherInfo = document.querySelector('.weather-location');\n  const weatherType = document.querySelector('.temp');\n  const tempSection = document.querySelector('.temp-section');\n  const tempSectionSpan = document.querySelector('.temp-section span');\n\n  mainContent.classList.remove('rainy', 'cloudy', 'clear');\n\n  function displayWeather(description, temp, main, name) {\n    const celsius = Math.round(temp - 273.15);\n    const fahrenheit = Math.round((temp - 273.15) * 1.8 + 32);\n\n    weatherDesc.textContent = description;\n    weatherInfo.textContent = name;\n    weatherType.textContent = main;\n    currentTemp.textContent = `${celsius}`;\n\n    alert('click degrees to see in °C or °F');\n\n    tempSection.addEventListener('click', () => {\n      if (tempSectionSpan.textContent === '°C') {\n        tempSectionSpan.textContent = '°F';\n        currentTemp.textContent = `${fahrenheit}`;\n      } else {\n        tempSectionSpan.textContent = '°C';\n        currentTemp.textContent = `${celsius}`;\n      }\n    });\n\n    if (description.includes('rain')) {\n      mainContent.classList.add('rainy');\n    } else if (description.includes('cloud')) {\n      mainContent.classList.add('cloudy');\n    } else {\n      mainContent.classList.add('clear');\n    }\n  }\n\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition((position) => {\n      lat = position.coords.latitude;\n      long = position.coords.longitude;\n\n      const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}`;\n      fetch(weatherApi, { mode: 'cors' })\n        .then(response => response.json())\n        .then((data) => {\n          const { temp } = data.main;\n          const { main, description } = data.weather[0];\n          const { name } = data;\n\n          displayWeather(description, temp, name, main);\n        });\n    });\n  }\n\n  document.querySelector('#search-form').addEventListener('submit', (e) => {\n    e.preventDefault();\n    mainContent.classList.remove('rainy', 'cloudy', 'clear');\n    const location = document.querySelector('#city-name').value;\n    cityName.textContent = `${city-name}`\n    if (location.length > 0) {\n      city = location;\n      document.querySelector('#city-name').value = '';\n\n      const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;\n\n      fetch(weatherApi, { mode: 'cors' })\n        .then(response => response.json())\n        .then((data) => {\n          const { temp } = data.main;\n          const { main, description } = data.weather[0];\n          const { name } = data;\n\n          displayWeather(description, temp, name, main);\n        })\n\t\t\t\t.catch(e => e);\n\t\t\t}else {\n\t\t\t\talert('Enter city')\n\t\t\t}\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });