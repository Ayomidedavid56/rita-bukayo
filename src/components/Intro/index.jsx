import "./index.css";
import flower from "../images/flower.png";

export default function Intro() {
  return (
    <div className="intro-layout">
      <img src={flower} alt="" />
      <h2 className="name">Rita & Bukayo</h2>
      <p> April 27, 2024 . Lagos, Nigeria</p>
    </div>
  );
}
