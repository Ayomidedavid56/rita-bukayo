import DateLocation from "../../components/DateLocation";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Navbar from "../../components/Navbar";
import "./index.css";

export default function GiveaGift() {
  return (
    <div className="gift-container">
      <Navbar />
      <Intro />
      <div style={{ marginTop: "20px" }}>
        We will appreciate motitized gifts,
        <br />
        please make tranfers to the account below.
      </div>
      <div className="account-info">
        <span className="value">A/C No: 0818401154</span>
        <span className="value">Bank: Access Bank</span>
        <span className="value">A/C Name: Rita Zannu</span>
        <span className="value"></span>
      </div>
      <div style={{ marginTop: "20px" }}>Thanks for sharing in our joy.</div>
      <DateLocation />
      <Footer />
    </div>
  );
}
