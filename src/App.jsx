import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ErrorBanner from "./components/ErrorBanner";
import UnitToggle from "./components/UnitToggle";
import Loader from "./components/Loader";
import ThemeToggle from "./components/ThemeToggle";
import WeatherNow from "./components/WeatherNow";
import ForecastList from "./components/ForecastList";
import { appServices, getFiveDayForecast } from "./services/appServices";
const apikey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

function App() {
  //declared all the states to stores
  const [city, setCity] = React.useState(""); //The city that the user will search
  const [error, setError] = React.useState(null); //To display any error messages
  const [units, setUnits] = React.useState("metric"); //The temperature in degree celius
  const [theme, setTheme] = React.useState("light"); //The theme of the app - light or dark
  const [loading, setLoading] = React.useState(true); //true or false for the spinner
  const [currentWeather, setcurrentWeather] = React.useState(""); //Will hold the weather objects
  const [forecastDaily, setforecastDaily] = React.useState([]); //Array to holds summaries
  //Creating the new state to store the five day forecast filtered data only
  const [fiveDayForecast, setfiveDayForecast] = React.useState([]);

  const handleSearch = async (searchedCity) => {
    console.log("User searched city:-", searchedCity);
    setCity(searchedCity);

    //handling the error when the user clicks on the serach button
    setLoading(true);
    setError(""); //Removing all the old errors in the error state
    //Use the try catch method in order to display the errors if found
    try {
      //Calling the currect weather api key
      const data = await appServices(searchedCity, apikey, units);
      setcurrentWeather(data); //To store the data in the use state as well in the current weather use state
      //Check to see if the user enters wrong city name
      //Check if the data is valid or not
      if (!data || !data.coord) {
        // throw new Error("The coordinate are not available from the api call");
        //Entered wrong city name by theuser
        console.log(`The user entered the wrong city name :-${searchedCity}`);
        setError(
          `Please enter a Correct city name:-, you entered:- ${searchedCity}`
        );
        return;
      }
      //Getting the lat and longitude
      const lon = data.coord.lon; //To get the longitude and latitude from the weatherData which is the current weather
      const lat = data.coord.lat; ////To get the longitude and latitude from the weatherData which is the current weather
      //Api call for the five day forecast
      const forecastData = await getFiveDayForecast(lat, lon, apikey, units);
      setforecastDaily(forecastData); //Saving the 40 entries in the use state
    } catch (error) {
      setError(error.message);
      console.log("Error by calling the api calls");
    } finally {
      setLoading(false); //Setting the loading to false regardless of what will be the outcome from the above
    } //Even if it fails or pass from the above try and catch statment
    //Here you are calling the api to fetch and display the real data(Getting the current weather from the api)

    //Calling the 5-day forecast function from the Appservices file.js

    //Done as the check has been succesfull
    // console.log("Data received from the forecast Api call:-", forecastData);
    //Setting the value
    //You are storing the 40 entries of the forecast data into the setforecasat daily use state but you only want for the five days
  };

  //Function to get the only 5 day entries from the 40 entries of forecast data
  const handleForecastData = () => {
    if (
      forecastDaily &&
      forecastDaily?.list &&
      forecastDaily?.list?.length > 0
    ) {
      //using the filter method to run through the loop based on a condition
      const dateOnlyData = forecastDaily.list.filter((item) => {
        return item.dt_txt.includes("12:00:00");
      });
      setfiveDayForecast(dateOnlyData);

      //Setting the data data in the forcast five day sate and using it as props in the forecast list
      console.log(
        "This is the filtered Forecast Data with specific datesonly(5 - days):- ",
        dateOnlyData
      );
    } //If not or nothing in the forecast daiy.ist usestate just return an empty array thats it
  };

  // Use the use effect to show the console only when  this is a change in the currentweather use state.//Only show the console when there is an update in the use state function
  useEffect(() => {
    console.log("This is the currentWeather:-", currentWeather);
  }, [currentWeather]);
  // Use the use effect to show the console only when  this is a change in the forecastDaily use state.//Only show the console when there is an update in the use state function
  useEffect(() => {
    console.log("The forecast daily updated:- ", forecastDaily);
  }, [forecastDaily]);
  //using the u se effect to see the changes in the forecast daily and call the filter function(handeforecastdata function)
  useEffect(() => {
    //To check if there is data  in the forecast daily then only call the five day function and save it in the use state of the setfive day use state above
    if (
      forecastDaily &&
      forecastDaily?.list &&
      forecastDaily?.list?.length > 0
    ) {
      //Calling the handle forecast data funciton
      handleForecastData();
    }
  }, [forecastDaily]);
  //Using the use effect to update the units when there is a change in the units state
  useEffect(() => {
    city.length > 0 && handleSearch(city);
  }, [units]);

  //Function-You have to retrive the value from the state and pass+ update the state with string
  const handleUnitsChange = (selectUnits) => {
    //Conditon if C btn press = metric and if F btn press = imperial
    selectUnits === "metric"
      ? (console.log("Celcius btn selected by the user:-", selectUnits),
        setUnits(selectUnits))
      : console.log("Farenhiet btn selected by the user:-", selectUnits),
      setUnits(selectUnits);
  };
  //Function to flip the theme from the state when the button is pressed Light/Dark button
  const handleThemeChange = () => {
    //Ternary operater rather than the if else statement is better
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  //To render the loader page only when the loader in the use state is true
  // const handleLoader = () => {
  //   if (loading === true) {
  //     return handleError;
  //   } else console.log("Please wait there is an error: - ");
  // };
  return (
    <div className={`App ${theme}`}>
      {/* Displays all the things on the screen through the app file */}
      <h1>Weather Dashboard App🌡️</h1>
      <p>! MZS !</p>

      <header className="header">
        {/* <h1>Weather DashBoard</h1> */}
        <SearchBar handleSearch={handleSearch} />
        <UnitToggle units={units} onchangeUnits={handleUnitsChange} />
        <ThemeToggle theme={theme} handleThemeChange={handleThemeChange} />
      </header>

      <main className="main">
        <section className="errorbanner">
          <ErrorBanner errorMessage={error} />
        </section>

        <section className="card">
          <h1>Current Weather</h1>
          {!error && currentWeather?.main && (
            <WeatherNow currentWeather={currentWeather} units={units} />
          )}
        </section>

        <section className="forecast-list">
          {!error && fiveDayForecast?.length > 0 && (
            <ForecastList fiveDayForecast={fiveDayForecast} units={units} />
          )}
        </section>
      </main>

      {/* Only show the loader if loading use state is true */}
      {loading && <Loader />}

      <footer className="footer">
        Powered By Zohaib with the Help of OpenWeatherAPI
      </footer>
    </div>
  );
}

export default App;
