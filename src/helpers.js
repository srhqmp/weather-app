export const generateElement = ({
  type,
  textContent,
  className,
  id,
  src,
  alt,
  innerHTML,
}) => {
  const attributes = { type };
  if (textContent) {
    attributes.textContent = textContent;
  }
  if (className) {
    attributes.className = className;
  }
  if (id) {
    attributes.id = id;
  }
  if (type === 'img') {
    attributes.src = src;
    attributes.alt = alt || '';
  }
  if (innerHTML) {
    attributes.innerHTML = innerHTML;
  }

  const element = Object.assign(document.createElement(type), attributes);
  return element;
};

export const getDayOfWeek = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { weekday: 'long' });
};

export const weatherGradients = {
  snow: 'linear-gradient(to bottom, #E0F7FA, #B3E5FC)', // Light blue to white
  'snow-showers-day': 'linear-gradient(to bottom, #B3E5FC, #81D4FA)', // Light blue to lighter blue
  'snow-showers-night': 'linear-gradient(to bottom, #81D4FA, #4FC3F7)', // Darker blue
  'thunder-rain': 'linear-gradient(to bottom, #64B5F6, #90A4AE)', // Dark blue to gray
  'thunder-showers-day': 'linear-gradient(to bottom, #42A5F5, #B0BEC5)', // Bright blue to gray
  'thunder-showers-night': 'linear-gradient(to bottom, #2196F3, #90A4AE)', // Dark blue to darker gray
  rain: 'linear-gradient(to bottom, #B0BEC5, #78909C)', // Light gray to dark gray
  'showers-day': 'linear-gradient(to bottom, #B0BEC5, #81D4FA)', // Light gray to blue
  'showers-night': 'linear-gradient(to bottom, #78909C, #4A148C)', // Dark gray to dark blue
  fog: 'linear-gradient(to bottom, #CFD8DC, #E0E0E0)', // Light gray to white
  wind: 'linear-gradient(to bottom, #B3E5FC, #E0F7FA)', // Light blue to light gray
  cloudy: 'linear-gradient(to bottom, #CFD8DC, #B0BEC5)', // Light gray to darker gray
  'partly-cloudy-day': 'linear-gradient(to bottom, #FFEB3B, #80DEEA)', // Light yellow to light blue
  'partly-cloudy-night': 'linear-gradient(to bottom, #AB47BC, #6A1B9A)', // Dark purple to dark blue
  'clear-day': 'linear-gradient(to bottom, #FFEB3B, #FBC02D)', // Bright yellow to orange
  'clear-night': 'linear-gradient(to bottom, #0D47A1, #000000)', // Dark blue to black
};

export const setBackgroundColor = (condition) => {
  const gradient =
    weatherGradients[condition] ||
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)';

  document.body.style.backgroundImage = gradient;
};
