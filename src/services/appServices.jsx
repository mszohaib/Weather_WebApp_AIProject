//Api call
//function to get the current weather details from the api calls
const appServices = async (cityName, APIKey, units) => {
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  try {
    // Use the fetch statement to get the city name and api key from the open weather API{Builing the APi link to this function} returns the data and stores it in the response variable
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=${units}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error");
    return null;
  }
};

//Function to get the current weather details from the api calls
const getFiveDayForecast = async (lat, lon, APIKey, units) => {
  try {
    const getResponseAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${units}`
    );
    //Confirming the api call is been made or not
    const forecastApidata = await getResponseAPI.json();

    return forecastApidata;
  } catch (error) {
    console.log("Please wait, There is an error at the moment!");
  }
};

export { appServices, getFiveDayForecast };
