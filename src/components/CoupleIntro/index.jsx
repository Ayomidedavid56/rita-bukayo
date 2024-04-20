import IntroCard from "./IntroCard";
import "./index.css";
// import flower from "../images/flower.png";
import image1 from "../images/image1.png";

export default function CoupleIntro() {
  return (
    <div className="couple-intro-layout">
      <div className="left">
        <IntroCard image={image1} label="BRIDE" value="RITA SENAMI" />
      </div>
      <div className="right">
        <IntroCard image={image1} label="GROOM" value="BUKAYO OYEDELE" />
      </div>
    </div>
  );
}
