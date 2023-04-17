import "./Timer.scss";
import React, { useEffect, useState } from "react";

const Timer = ({ data }) => {
  const [timer, setTimer] = useState();

  const getChrono = () => {
    const now = new Date().getTime();
    const countdownDate = new Date(data.net).getTime();
    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)  );
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    setTimer(
      <>
        <div className="timer">
          <div>
            <h2>T-</h2>
          </div>
          <div>
            <h2>{days}</h2>
            <p>Days</p>
          </div>
          <div>
            <h2>:</h2>
          </div>
          <div>
            <h2>{hours}</h2>
            <p>Hours</p>
          </div>
          <div>
            <h2>:</h2>
          </div>
          <div>
            <h2>{minutes}</h2>
            <p>Mins</p>
          </div>
          <div>
            <h2>:</h2>
          </div>
          <div>
            <h2>{seconds}</h2>
            <p>Secs</p>
          </div>
        </div>
      </>
    );
  };

  const countDownInterval = setInterval(() => {
    getChrono();
  }, 1000);

  useEffect(() => {
    countDownInterval;
  }, []);
  return <>{timer}</>;
};

export default Timer;
