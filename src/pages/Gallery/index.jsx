import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Modal from "react-modal";
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
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80vh",
    width: "min(90vw,800px)",
    marginTop: "5vh",
    padding: "0px",
    overflow: "visible",
  },
};

export default function Gallery() {
  const images = [j1, j2, j3, j4, j5, j6, j7, j8, j9];
  const imgBaseUrl =
    "https://res.cloudinary.com/ducwugynu/image/upload/v1713579725/bukayo";
  const imageurls = [
    "lmf3fiezzqu6jhw34yvd.jpg",
    "umb5t8h1jk5tfkuvuqiz.jpg",
    "kos512ajalpoec5w5aku.jpg",
    "vbygc5o5vwmhwhw2ml51.jpg",
    "bzkavscj5v0vvvhdvka3.jpg",
    "xu9nv8och5ri08hrsxji.jpg",
    "mu8twz5pxro1go6xew4h.jpg",
    "j8n2eqxtplqymjf41bkc.jpg",
    "ctgk0c944jb02x1cbfin.jpg",
    "sijaib0ele5pzsnzaefk.jpg",
    "medsimnm4zzy7f7qbqfi.jpg",
    "ruwtw4n0tjog89l1wkep.jpg",
    "jsr8fgunk4onegmgj5f5.jpg",
    "svyhljfsjmbkhjbiixl9.jpg",
    "pzuyusxuepnv6nruq6g9.jpg",
    "rw18cikkqrvifegwbn5p.jpg",
    "zptxuyzobkr7lhkucyk5.jpg",
    "cbpxktp9bz91k48zgvhq.jpg",
    "uvjnzrlss9cveyzjxjue.jpg",
  ];

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(data) {
    setIsOpen(data);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Navbar />
      <Intro />
      <div className="content">
        {images.map((i, k) => (
          <div onClick={() => openModal(i)} key={k} className="img-container">
            <img src={i} alt="" />
          </div>
        ))}
        {imageurls.map((i, k) => (
          <div
            onClick={() => openModal(`${imgBaseUrl}/${i}`)}
            key={k}
            className="img-container"
          >
            <img src={`${imgBaseUrl}/${i}`} alt="" />
          </div>
        ))}
      </div>
      <DateLocation />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="remove-btn" onClick={() => closeModal()}>
          <ImCancelCircle />
        </div>
        <div className="modal-img-container">
          <img src={modalIsOpen} alt="" />
        </div>
      </Modal>
      <Footer />
    </div>
  );
}
