import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import j1 from "../../components/images/1.JPG";
import j2 from "../../components/images/2.JPG";
import j3 from "../../components/images/3.JPG";
import j4 from "../../components/images/4.JPG";
import j5 from "../../components/images/5.jpeg";
import j6 from "../../components/images/6.JPG";
import j7 from "../../components/images/7.JPG";
import j8 from "../../components/images/8.JPG";
import j9 from "../../components/images/9.JPG";

import "./index.css";
import Intro from "../../components/Intro";
import DateLocation from "../../components/DateLocation";

export default function Gallery() {
  const images = [j1, j2, j3, j4, j5, j6, j7, j8, j9];
  const imgBaseUrl =
    "https://res.cloudinary.com/ducwugynu/image/upload/v1713579725/bukayo";
  const imageurls = [
    "lmf3fiezzqu6jhw34yvd.jpg",
    "umb5t8h1jk5tfkuvuqiz.jpg",
    "avnmt1xwp6v2knjmvhu4.jpg",
    "qepu21rzx0qz8vgzrefm.jpg",
    "ks1kts3abizfantpknmj.jpg",
    "kos512ajalpoec5w5aku.jpg",
  ];
  return (
    <div>
      <Navbar />
      <Intro />
      <div className="content">
        {images.map((i, k) => (
          <div key={k} className="img-container">
            <img src={i} alt="" />
          </div>
        ))}
        {imageurls.map((i, k) => (
          <div key={k} className="img-container">
            <img src={`${imgBaseUrl}/${i}`} alt="" />
          </div>
        ))}
      </div>
      <DateLocation />
      <Footer />
    </div>
  );
}
