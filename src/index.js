import './styles.css';
import { generateElement, getDayOfWeek, setBackgroundColor } from './helpers';
import weatherService from './services/weatherData';

const showLoading = () => {
  document.querySelector('.weather-card').style.display = 'none';
  document.getElementsByTagName('footer')[0].style.display = 'none';
  document.getElementById('loadingContainer').style.display = 'flex';
};
const hideLoading = () => {
  document.querySelector('.weather-card').style.display = 'block';
  document.getElementsByTagName('footer')[0].style.display = 'block';
  document.getElementById('loadingContainer').style.display = 'none';
};

const getData = async (location) => {
  try {
    showLoading();
    const res = await weatherService.getWeather(location);
    return res;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  } finally {
    hideLoading();
  }
};

// INFORMATION
const displayInformation = (data) => {
  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const weatherCard = document.querySelector('.weather-card');
  weatherCard.innerHTML = '';
  if (data === null || !data) {
    weatherCard.innerHTML = `<h1>404: NOT FOUND</h1>`;
  } else {
    const { currentConditions, days } = data;
    setBackgroundColor(currentConditions.icon);
    const locationDiv = generateElement({
      type: 'div',
      className: 'current-location',
      textContent: data.resolvedAddress,
      innerHTML: `<div>Results from <span>${data.resolvedAddress}</span></div>`,
    });

    const iconDiv = generateElement({
      type: 'div',
      className: 'current-icon',
      innerHTML: `<img width="150" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${currentConditions.icon}.svg" alt="${currentConditions.icon}" />`,
    });
    const temperatureDiv = generateElement({
      type: 'div',
      className: 'current-temperature',
      innerHTML: `<div>${currentConditions.temp} <span>°C</span></div>`,
    });
    const precipitationDiv = generateElement({
      type: 'div',
      innerHTML: `<div class="info">Precipitation: <span>${currentConditions.precip || 0} mm</span></div>`,
    });
    const humidityDiv = generateElement({
      type: 'div',
      innerHTML: `<div class="info">Humidity: <span>${currentConditions.humidity}%</span></div>`,
    });
    const windDiv = generateElement({
      type: 'div',
      innerHTML: `<div class="info">Windspeed: <span>${parseFloat(currentConditions.windspeed * 3.6).toFixed(2)} km/hr</span></div>`,
    });

    const infoDiv = generateElement({
      type: 'div',
      className: 'info-div',
    });
    const weatherInfo = generateElement({
      type: 'div',
      className: 'weather-info',
    });

    const todayInfo = generateElement({
      type: 'div',
      className: 'today-info',
      innerHTML: `<div class="weather-h">Weather</div><div>${currentDate}</div><div>${currentConditions.conditions}</div>`,
    });

    weatherInfo.appendChild(iconDiv);
    weatherInfo.appendChild(temperatureDiv);
    const weatherInfoData = generateElement({
      type: 'div',
      className: 'weather-info-data',
    });
    weatherInfoData.appendChild(precipitationDiv);
    weatherInfoData.appendChild(humidityDiv);
    weatherInfoData.appendChild(windDiv);
    weatherInfo.appendChild(weatherInfoData);

    infoDiv.appendChild(weatherInfo);
    infoDiv.appendChild(todayInfo);

    weatherCard.appendChild(locationDiv);
    weatherCard.appendChild(infoDiv);

    const forecast = generateElement({
      type: 'div',
      className: 'weather-forecast',
    });
    const today = new Date();

    const filteredDays = days
      .filter((day) => {
        const dayDate = new Date(day.datetime);
        return dayDate >= today;
      })
      .slice(0, 7);

    filteredDays.forEach((day) => {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day-forecast');

      const dayOfWeek = getDayOfWeek(day.datetime);
      dayDiv.innerHTML = `
                <h3>${dayOfWeek}</h3>
                <div>${day.datetime}</div>
                <img width="50" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${day.icon}.svg" alt="${day.icon}" />
                <p>${day.temp}°C</p>
            `;

      forecast.appendChild(dayDiv);
    });

    weatherCard.appendChild(forecast);
  }
};

// FORM
const form = document.querySelector('.form');
const handleSubmit = async (event) => {
  event.preventDefault();
  const input = form.querySelector('.form-location');
  const res = await getData(input.value);
  displayInformation(res);
};
form.addEventListener('submit', handleSubmit);

getData('manila').then((res) => {
  displayInformation(res);
});
