"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const CountDownTimer = () => {
  return (
    <>
      {/* <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} /> */}
      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 10,
          fontWeight: 500,
          textTransform: "uppercase",
        }}
        digitBlockStyle={{ width: 80, height: 90, fontSize: 60 }}
        dividerStyle={{ color: "white", height: 1 }}
        separatorStyle={{ color: "black", size: "10px" }}
        duration={0.7}
      />
    </>
  );
};

export default CountDownTimer;
