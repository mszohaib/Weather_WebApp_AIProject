import React, { useEffect } from "react";

export default function ForecastList({ fiveDayForecast, units }) {
  //This will hold the 5 day forestCast card to the user and should get the data and display it to the user
  // //Checking if the forecast data has been received or not
  //Checking if the units align correctly or not
  const unitHelper = () => {
    return units === "metric" ? "°C" : "°F";
  };
  console.log("Five Day Forecast form the API:-", fiveDayForecast);
  return (
    <div>
      {/* The conditon to map over the array of fore  cast items(objects ) thats why you are using the items below */}
      <h2>The forecast List component-Five day forecasts!</h2>
      {fiveDayForecast && fiveDayForecast.length > 0 ? (
        fiveDayForecast.map((item, index) => (
          <div item={item} key={index}>
            {/* The html tags that you want to display */}
            <h3>The Day -{index + 1}</h3>
            {/* To display the day number*/}
            <h3></h3>
            <h3>The date and time -{item?.dt_txt}</h3>
            {/* To display the date*/}
            <h3>
              The Temperature-{item?.main?.temp}
              {unitHelper()}
            </h3>
            {/* To display the temp with symbol*/}
            <h3>Feels like -{item?.main?.feels_like}</h3>
            {/* To display the humidity*/}
            <h3>Humidity -{item?.main?.humidity}</h3>
            {/* To display the weather description*/}

            <h3>The weather -{item?.weather[0]?.description}</h3>
            {/* To display the day icon*/}
            {/* Displying the image of the weather from the api */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={"weatherIcon"}
            ></img>
          </div>
        ))
      ) : (
        <p>No forecast Data available right now!</p>
      )}
    </div>
  );
}
