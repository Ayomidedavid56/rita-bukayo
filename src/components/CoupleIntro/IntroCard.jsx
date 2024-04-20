import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./index.css";

// eslint-disable-next-line react/prop-types
export default function IntroCard({ image, label, value }) {
  return (
    <div className="about_content">
      <div className="left12_first">
        <span className="names_titles">THE {label}</span>
        <h2>{value}</h2>
        <div className="about_pic_container">
          <span className="about_picframe"></span>
          <div className="about_social">
            <a href="#">
              <FaInstagram size={30} style={{ color: "#ffffff" }} />
            </a>
            <a href="#">
              <FaFacebook size={30} style={{ color: "#ffffff" }} />
            </a>
            <a href="#">
              <FaTwitter size={30} style={{ color: "#ffffff" }} />
            </a>
          </div>
          <div className="about_pic">
            <img src={image} alt="" title="" />
          </div>
        </div>

        <p>
          Love is friendship that has caught fire. It is quiet understanding,
          mutual confidence, <a href="#">sharing and forgiving</a>. It is
          loyalty through good and bad times. It settles for less than
          perfection and <strong>makes allowances</strong> for human weaknesses
        </p>
      </div>
    </div>
  );
}
