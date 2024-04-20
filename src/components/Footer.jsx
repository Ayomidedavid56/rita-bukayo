import { paths } from "../constants";
import "./Footer.css";
// import birdIcon from "./images/birds_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="abreviation-container">
        <div className="abreviation">
          <span> R & B</span>
        </div>
      </div>
      <div className="container">
        <ul>
          {paths.map((path) => (
            <li key={path} className="nav-item">
              <a
                className={` ${
                  location.pathname.replace("/", "") ==
                  path.toLowerCase().replaceAll(" ", "-").replace("home", "")
                    ? "nav-item-active"
                    : ""
                }`}
                href={`/${
                  path == "Home" ? "" : path.toLowerCase().replaceAll(" ", "-")
                }`}
              >
                {path}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
