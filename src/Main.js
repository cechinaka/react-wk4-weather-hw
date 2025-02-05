import React from "react";

export default function Main() {
  return (
    <div>
      <main>
        <div>
          <h1 id="cityNow">Honolulu</h1>
          <p>
            <span id="current-date">Tuesday 11:06</span>,{" "}
            <span id="conditionsDescription">scattered clouds</span>
            <br />
            Humidity:{" "}
            <span className="unit">
              <span id="humidityNow">88</span>%,
            </span>
            wind:{" "}
            <span className="unit">
              <span id="windNow">15</span> mph
            </span>
            <br />
          </p>
        </div>

        <div className="tempCurrent">
          <span id="icon"></span>
          <span id="tempNow" className="tempValue">
            12
          </span>
          <span className="degreeF">°F</span>
        </div>
      </main>

      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
