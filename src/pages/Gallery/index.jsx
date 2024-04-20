import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import image1 from "../../components/images/image1.png";
import image2 from "../../components/images/couple-image.png";

import "./index.css";
import Intro from "../../components/Intro";
import DateLocation from "../../components/DateLocation";

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <Intro />
      <div className="content">
        <div className="img-container">
          <img src={image1} alt="" />
        </div>
        <div className="img-container">
          <img src={image2} alt="" />
        </div>
        <div className="img-container">
          <img src={image1} alt="" />
        </div>
        <div className="img-container">
          <img src={image2} alt="" />
        </div>
        <div className="img-container">
          <img src={image1} alt="" />
        </div>
        <div className="img-container">
          <img src={image2} alt="" />
        </div>
      </div>
      <DateLocation />
      <Footer />
    </div>
  );
}
