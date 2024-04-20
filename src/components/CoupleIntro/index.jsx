import IntroCard from "./IntroCard";
import "./index.css";
import bride from "../images/bride.jpeg";
import groom from "../images/groom.jpeg";

export default function CoupleIntro() {
  return (
    <div className="couple-intro-layout">
      <div className="left">
        <IntroCard image={bride} label="BRIDE" value="RITA SENAMI" />
      </div>
      <div className="right">
        <IntroCard image={groom} label="GROOM" value="BUKAYO OYEDELE" />
      </div>
    </div>
  );
}
