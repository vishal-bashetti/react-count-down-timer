import React, { useState, useEffect } from "react";

const App = () => {
  const [days, setDays] = useState([10]);
  const [hours, setHours] = useState([0]);
  const [minutes, setMinutes] = useState([0]);
  const [seconds, setSeconds] = useState([0]);
  const [isLoading, setIsLoading] = useState(true);

  const countdown = () => {
    const endDate = new Date("January 01, 2022 00:03:00").getTime();
    const today = new Date().getTime();

    const timediff = endDate - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timedays = Math.floor(timediff / days);
    let timehours = Math.floor((timediff % days) / hours);
    let timeminutes = Math.floor((timediff % hours) / minutes);
    let timeseconds = Math.floor((timediff % minutes) / seconds);

    timedays = timedays < 10 ? "0" + timedays : timedays;
    timehours = timehours < 10 ? "0" + timehours : timehours;
    timeminutes = timeminutes < 10 ? "0" + timeminutes : timeminutes;
    timeseconds = timeseconds < 10 ? "0" + timeseconds : timeseconds;
    setDays(timedays);
    setHours(timehours);
    setMinutes(timeminutes);
    setSeconds(timeseconds);
    setIsLoading(false);
  };

  useEffect(() => {
    setInterval(countdown, 1000);
  });

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="container">
          <h1>React Count Down Timer</h1>
          <div className="countdown">
            <div className="art">
              <p>{days}</p>
              <h3>Days</h3>
            </div>
            <div className="art">
              <p>{hours}</p>
              <h3>Hours</h3>
            </div>
            <div className="art">
              <p>{minutes}</p>
              <h3>minutes</h3>
            </div>
            <div className="art">
              <p>{seconds}</p>
              <h3>seconds</h3>
            </div>
          </div>
          <h2>For New Year 2022 </h2>
        </section>
      )}
    </>
  );
};

export default App;
