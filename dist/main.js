!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){window.addEventListener("load",()=>{let e,t;const n="c6ee67c2af79dc6be8e156787df2cbfe";let o;const r=document.querySelector("#city-name"),c=document.getElementById("main-content"),a=document.querySelector(".weather-description"),i=document.querySelector(".temp-type"),u=document.querySelector(".weather-location"),l=document.querySelector(".temp"),d=document.querySelector(".temp-section"),s=document.querySelector(".temp-section span");function m(e,t,n,o){const r=Math.round(t-273.15),m=Math.round(1.8*(t-273.15)+32);a.textContent=e,u.textContent=o,l.textContent=n,i.textContent=`${r}`,alert("click degrees to see in °C or °F"),d.addEventListener("click",()=>{"°C"===s.textContent?(s.textContent="°F",i.textContent=`${m}`):(s.textContent="°C",i.textContent=`${r}`)}),e.includes("rain")?c.classList.add("rainy"):e.includes("cloud")?c.classList.add("cloudy"):c.classList.add("clear")}c.classList.remove("rainy","cloudy","clear"),navigator.geolocation&&navigator.geolocation.getCurrentPosition(o=>{e=o.coords.latitude,t=o.coords.longitude,fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=${n}`,{mode:"cors"}).then(e=>e.json()).then(e=>{const{temp:t}=e.main,{main:n,description:o}=e.weather[0],{name:r}=e;m(o,t,r,n)})}),document.querySelector("#search-form").addEventListener("submit",e=>{e.preventDefault(),c.classList.remove("rainy","cloudy","clear");const t=document.querySelector("#city-name").value;if(r.textContent=`${o-name}`,t.length>0){o=t,document.querySelector("#city-name").value="",fetch(`https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=${n}`,{mode:"cors"}).then(e=>e.json()).then(e=>{const{temp:t}=e.main,{main:n,description:o}=e.weather[0],{name:r}=e;m(o,t,r,n)}).catch(e=>e)}else alert("Enter a city")})})}]);