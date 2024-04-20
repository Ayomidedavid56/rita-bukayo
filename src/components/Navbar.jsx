import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
import { paths } from "../constants";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const location = useLocation();

  return (
    <div className="header">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {paths.map((path) => (
            <li key={path} className={`nav-item `}>
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
                onClick={closeMenu}
              >
                {path}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ToastContainer style={{ zIndex: 20 }} />
    </div>
  );
};

export default Navbar;
