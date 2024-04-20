import DateLocation from "../../components/DateLocation";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Navbar from "../../components/Navbar";

export default function OurStory() {
  return (
    <div>
      <Navbar />
      <Intro />
      <div style={{ height: "100vh" }}></div>
      <DateLocation />
      <Footer />
    </div>
  );
}
