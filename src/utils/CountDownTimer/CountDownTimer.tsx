"use client";

// import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
// import "@leenguyen/react-flip-clock-countdown/dist/index.css";

// const CountDownTimer = () => {
//   return (
//     <>
//       {/* <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} /> */}
//       <FlipClockCountdown
//         to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
//         labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
//         labelStyle={{
//           fontSize: 10,
//           fontWeight: 500,
//           textTransform: "uppercase",
//         }}
//         digitBlockStyle={{ width: 80, height: 90, fontSize: 60 }}
//         dividerStyle={{ color: "white", height: 1 }}
//         separatorStyle={{ color: "black", size: "10px" }}
//         duration={0.7}
//       />
//     </>
//   );
// };

// export default CountDownTimer;

import React, { useState, useEffect } from "react";
import "./CountDownTimer.css";

function CounterDownTimer({ initialSeconds }: any) {
  const [timeRemaining, setTimeRemaining] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const formatTime = (time: any) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  return (
    <div className="flip-down-counter max-w-[700px] mx-auto">
      <div className="time-block">
        <div className="label">Days</div>
        <div className="digit">{formatTime(timeRemaining).days}</div>
      </div>
      <div className="time-block">
        <div className="label">Hours</div>
        <div className="digit">{formatTime(timeRemaining).hours}</div>
      </div>
      <div className="time-block">
        <div className="label">Minutes</div>
        <div className="digit">{formatTime(timeRemaining).minutes}</div>
      </div>
      <div className="time-block">
        <div className="label">Seconds</div>
        <div className="digit">{formatTime(timeRemaining).seconds}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CounterDownTimer
        initialSeconds={3600 * 24 * 3 + 3600 * 2 + 60 * 25 + 45}
      />{" "}
      {/* 3 days, 2 hours, 25 minutes, 45 seconds */}
    </div>
  );
}

export default App;
