import "./index.css";
import flower from "../images/flower.png";
import image1 from "../images/couple-image.png";
import { useState } from "react";

export default function Landing() {
  var countDownDate = new Date("April 27, 2024 07:00:00").getTime();

  const [dayValue, setDayValue] = useState();
  const [hourValue, setHourValue] = useState();
  const [minuteValue, setMinuteValue] = useState();
  const [secondValue, setSecondValueValue] = useState();

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setDayValue(days);
    setHourValue(hours);
    setMinuteValue(minutes);
    setSecondValueValue(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <div className="layout">
      <div className="left">
        <img src={flower} alt="" />
        <h2 className="name">Rita & Bukayo</h2>
        <p>We Are Getting Married April 27, 2024</p>
        <div className="timer">
          <div className="time-unit">
            <p className="time">{dayValue}</p>
            <p className="label">Days</p>
          </div>
          <div className="time-unit">
            <p className="time">{hourValue}</p>
            <p className="label">hours</p>
          </div>
          <div className="time-unit">
            <p className="time">{minuteValue}</p>
            <p className="label">Mins</p>
          </div>
          <div className="time-unit">
            <p className="time">{secondValue}</p>
            <p className="label">Sec</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="image-container">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
}
