const apiKey = 'VXLJLCQT92VC5HT8PEU6FCJ5D';
const baseUrl =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

const getWeather = async (location) => {
  const response = await fetch(
    `${baseUrl}/${location}?unitGroup=metric&key=${apiKey}&contentType=json`,
    { mode: 'cors' }
  );
  return response.json();
};

const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export default { getWeather, getFormattedDate };
