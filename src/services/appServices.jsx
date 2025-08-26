//Api call
const appServices = async (cityName, APIKey) => {
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error");
  }
};
export default appServices;
