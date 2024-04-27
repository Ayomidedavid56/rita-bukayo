/* eslint-disable react/no-unescaped-entities */
import "./index.css";
import flower from "../images/flower.png";
import image1 from "../images/home-img.JPG";
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
    setDayValue(0);
    setHourValue(0);
    setMinuteValue(0);
    setSecondValueValue(0);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <div>
      <div className="landing-layout">
        <div className="left" style={{ padding: "5%" }}>
          <img src={flower} alt="" />
          <h2 className="name">Rita & Bukayo</h2>
          <p style={{ textAlign: "center" }}>
            We Are Getting Married <br /> April 27, 2024
          </p>
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
      <div className="welcome-text">
        <p>Dear Family and Friends,</p>
        <p style={{ marginTop: "20px" }}>
          We are delighted to welcome you to our wedding website, where love,
          laughter, and lifelong memories await. As we embark on this beautiful
          journey together, we invite you to join us in celebrating the
          beginning of #TheForeverProject.
        </p>
        <p>
          Here, you'll find all the details about our special day, from the
          story of how we met to the exciting plans we have in store. Explore
          our love story, live stream and upload memories captured and discover
          how you can be a part of our big day.
        </p>
        <p>
          Thank you for being a part of our lives and for sharing in this joyous
          occasion with us. We can't wait to celebrate with you and create
          memories that will last a lifetime.
        </p>
        <p>
          <span>With love and gratitude, </span> <br />
          <span>Rita Bukayo Adeleke</span>
        </p>
      </div>
    </div>
  );
}
