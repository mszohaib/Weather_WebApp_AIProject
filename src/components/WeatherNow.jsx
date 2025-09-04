export default function WeatherNow({ currentWeather, units }) {
  //Weather Now functions should be here
  const unitHelper = () => {
    return units === "metric" ? "°C" : "°F";
  };
  console.log("Unit label:-", unitHelper());
  return !currentWeather || !currentWeather?.main || !currentWeather.weather ? (
    <p>No Weather Details available right now !</p>
  ) : (
    <div className="WeatherNow">
      {/* Displaying all the values from the api with the current values below are all the values */}
      <h2>Below are the weather details::-</h2>
      <h3>The city:- {currentWeather.name}</h3>
      <h3>
        The Temperature:- {currentWeather.main.temp},{unitHelper()}
      </h3>
      <h3>The Humidity:- {currentWeather.main.humidity}</h3>
      <h3>The Wind speed at the moment is:- {currentWeather.wind.speed}</h3>
      <h3>The weather seems like :- {currentWeather.weather[0].description}</h3>
      {/* Displying the image of the weather from the api */}
      <img
        src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        alt={"weatherIcon"}
      ></img>
    </div>
  );
}
