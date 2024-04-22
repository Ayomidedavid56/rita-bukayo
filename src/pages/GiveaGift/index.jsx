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
      <div
        style={{
          marginTop: "20px",
          padding: "0px 20px",
          textAlign: "justify",
          maxWidth: "800px",
        }}
      >
        If you were thinking of giving a gift to help us on our way, a gift of
        cash towards our future together would really make our day.
      </div>
      <div className="account-info">
        <span className="value">Bank: Zenith Bank</span>
        <span className="value">A/C Name: Rita Zannu</span>
        <span className="value">A/C No(Euro): 5060499559</span>
        <span className="value">A/C No(Pounds): 5080490907</span>
        <span className="value">A/C No(USD): 5071961850</span>
        <span className="value">A/C No(Naira): 2208991887</span>
      </div>
      <div style={{ marginTop: "100px" }}>Thanks for sharing in our joy.</div>
      <DateLocation />
      <Footer />
    </div>
  );
}
