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

export default { getWeather };
