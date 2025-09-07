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
      <h1>Current Weather </h1>
      <h3>City: {currentWeather.name}</h3>
      {/* Adding the big temp for the current weather page */}
      <div className="now-hero">
        {Math.round(currentWeather?.main?.temp)}
        {unitHelper()}
        <div />
        <div className="now-sub">
          🔼{Math.round(currentWeather?.main?.temp_max)}° /🔽
          {Math.round(currentWeather?.main?.temp_min)}°
        </div>

        <h3 className="weatherDes">{currentWeather?.weather[0].description}</h3>

        {/* <h3>The Humidity:- {currentWeather.main.humidity}</h3>

        <h3>The Wind speed at the moment is:- {currentWeather.wind.speed}</h3> */}

        {/* Displying the image of the weather from the api */}
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt={"weatherIcon"}
        ></img>
      </div>
    </div>
  );
}
