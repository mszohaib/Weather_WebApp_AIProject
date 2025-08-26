import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ErrorBanner from "./components/ErrorBanner";
import UnitToggle from "./components/UnitToggle";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";
import ThemeToggle from "./components/ThemeToggle";
import WeatherNow from "./components/WeatherNow";
import appServices from "./services/appServices";

function App() {
  //declared all the states to stores
  const [city, setCity] = React.useState(""); //The city that the user will search
  const [error, setError] = React.useState(null); //To display any error messages
  const [units, setUnits] = React.useState("Metric"); //The temperature in degree celius
  const [theme, setTheme] = React.useState("light"); //The theme of the app - light or dark
  const [loading, setLoading] = React.useState(true); //true or false for the spinner
  const [currentWeather, setcurrentWeather] = React.useState(null); //Will hold the weather objects
  const [forecastDaily, setforecastDaily] = React.useState([]); //Array to holds summaries

  const handleSearch = async (searchedCity) => {
    console.log("User searched city:-", searchedCity);
    setCity(searchedCity);
    //Here you are going to call the api
    const data = await appServices(
      searchedCity,
      "bc862fc810c8a0873046c48f5ff6d872"
    );
    setcurrentWeather(data);
  };
  //To set the error in the use state- to store there every error
  const handleError = (errorMessage) => {
    setError(errorMessage);
  };
  console.log("This is the currentWeather:-", currentWeather);

  //Function-You have to retrive the value from the state and pass+ update the state with string
  const handleUnitsChange = (selectUnits) => {
    console.log("The user clicked button for :- ", selectUnits);
    //Conditon if C btn press = metric and if F btn press = imperial
    if (selectUnits === "Metric") {
      console.log("Celcius btn selected by the user");
      setUnits(selectUnits);
    } else selectUnits === "Imperial";
    {
      console.log("Farenhiet btn selected by the user");
      setUnits(selectUnits);
    }
    console.log({ units });
  };
  //Function to flip the theme from the state when the button is pressed Light/Dark button
  const handleThemeChange = () => {
    //Ternary operater rather than the if else statement is better
    theme === "light"
      ? (console.log("Switch to :-", theme), setTheme("dark"))
      : (console.log("Switch to :-", theme), setTheme("light"));
  };

  return (
    <>
      <p>Hello this is my first Weather App -Api project !!</p>
      <SearchBar handleSearch={handleSearch} />
      <ErrorBanner errorMessage={error} />
      <UnitToggle units={units} onchangeUnits={handleUnitsChange} />
      <ThemeToggle theme={theme} handleThemeChange={handleThemeChange} />
      <Loader />
      {/* Calling the Api and calling the weather and from there i am calling the main */}
      {currentWeather ? (
        <h1>{currentWeather.weather[0].main}</h1>
      ) : (
        <p>No Weather Data</p>
      )}
      <WeatherNow />
      {/* <ForecastCard /> */}
    </>
  );
}

export default App;
