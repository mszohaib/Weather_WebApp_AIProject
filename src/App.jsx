import React from "react";
import SearchBar from "./components/SearchBar";
import ErrorBanner from "./components/ErrorBanner";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";
import ThemeToggle from "./components/ThemeToggle";
import UnitToggle from "./components/UnitToggle";
import WeatherNow from "./components/WeatherNow";

function App() {
  //declared all the states to stores
  const [city, setCity] = React.useState(""); //The city that the user will search
  const [error, setError] = React.useState(null); //To display any error messages
  const [units, setUnits] = React.useState("metric"); //The temperature in degree celius
  const [theme, setTheme] = React.useState("light"); //The theme of the app - light or dark
  const [loading, setLoading] = React.useState(true); //true or false for the spinner
  const [currentWeather, setcurrentWeather] = React.useState(null); //Will hold the weather objects
  const [forecastDaily, setforecastDaily] = React.useState([]); //Array to holds summaries

  const handleSearch = (searchedCity) => {
    console.log("User searched city:-", searchedCity);
    setCity(searchedCity);
  };
  //To set the error in the use state- to store there every error
  const handleError = (errorMessage) => {
    setError(errorMessage);
  };
  console.log("Current error state:", { error });
  return (
    <>
      <p>Hello this is my first Weather App -Api project !!</p>
      <SearchBar handleSearch={handleSearch} />
      <ErrorBanner errorMessage={error} />
      {/* <ForecastCard />
      <Loader />
      <ThemeToggle />
      <UnitToggle />
      <WeatherNow /> */}
    </>
  );
}

export default App;
