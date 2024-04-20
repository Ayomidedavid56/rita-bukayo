/* eslint-disable react/no-unescaped-entities */
import DateLocation from "../../components/DateLocation";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Navbar from "../../components/Navbar";

import "./index.css";

export default function OurStory() {
  return (
    <div>
      <Navbar />
      <Intro />
      <div className="our-story">
        <h3> Our Love Story</h3>
        <p>
          Once upon a time, in the bustling city of Lagos, two hearts found each
          other in the most unexpected of places. Here's our story of
          serendipity, laughter, and love:
        </p>
        <h4>Chapter 1:</h4>
        <p>
          The Chance Encounter It was a sunny Sunday in August when our paths
          first crossed at Harvesters International Christian Center, Gbagada
          Campus. After the 4th service, amidst the chatter of friends and the
          hustle and bustle of churchgoers, fate intervened in the form of a
          chance encounter.
        </p>
        <h4>Chapter 2:</h4>
        <p>
          The Meeting As we mingled with friends outside the church, I caught
          sight of a gorgeous babe who walked up to me, requesting assistance
          with taking some photos. Enchanted by her beauty and grace, I eagerly
          obliged, capturing every angle to immortalize her radiance.
        </p>
        <h4>Chapter 3:</h4>
        <p>
          Discovering Connections As we conversed, we discovered a shared
          passion for technology and mutual membership in online tech
          communities. Amidst the hustle and bustle of Gbagada Express, I seized
          the opportunity to assist her on her journey back to Ogudu, igniting a
          spark of connection between us.
        </p>
        <h4>Chapter 4:</h4>
        <p>
          The Beginning of Something Beautiful Though initial interactions were
          sporadic, our connection blossomed over time. Our first dates were
          filled with laughter and shared interests, culminating in a
          spontaneous late-night outing to Ogudu Fish Farm, where a simple act
          of kindness ignited the flames of love.
        </p>
        <h4>Chapter 5:</h4>
        <p>
          The Journey Together From changing flat tires to late-night beach
          walks, our journey together has been filled with countless adventures
          and shared moments. Through highs and lows, laughter and tears, our
          love has only grown stronger, guiding us towards a future filled with
          endless possibilities. Epilogue: Forever and Always As we stand on the
          brink of forever, I am grateful for the serendipitous moment that
          brought us together and the love that continues to bind us as one.
          Here's to a lifetime of love, laughter, and happily ever after.
        </p>
      </div>
      <DateLocation />
      <Footer />
    </div>
  );
}
