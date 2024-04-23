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
        <h4>Chapter 1: The Chance Encounter</h4>
        <p>
          It was a sunny Sunday in July when our paths first crossed at
          Harvesters International Christian Center, Gbagada Campus. After the
          4th service, amidst the chatter of friends and the hustle and bustle
          of churchgoers, fate intervened in the form of a chance encounter.
        </p>
        <h4>Chapter 2: The Meeting</h4>
        <p>
          As we mingled with friends outside the church, I caught sight of a
          gorgeous babe who walked up to me, requesting assistance with taking
          some photos. Enchanted by her beauty and grace, I eagerly obliged,
          capturing every angle to immortalize her radiance.
        </p>
        <p>
          After bidding her farewell, I couldn't shake the feeling of connection
          and curiosity. As she prepared to leave, I mustered the courage to
          approach her once more, introducing myself and complimenting her
          beauty. Our conversation flowed effortlessly, and in that moment, a
          spark ignited.
        </p>
        <h4>Chapter 3: Discovering Connections</h4>
        <p>
          As we conversed, we discovered a shared passion for technology and
          mutual membership in online tech communities. Amidst the hustle and
          bustle of Gbagada Express, I seized the opportunity to assist her on
          her journey back to Ogudu, a small gesture that left a lasting
          impression.
        </p>
        <h4>Chapter 4: The Beginning of Something Beautiful</h4>
        <p>
          Though initial interactions were sporadic, our connection blossomed
          over time. Our first dates were filled with laughter and shared
          interests, culminating in a spontaneous late-night outing to Ogudu
          Fish Farm, where a simple act of kindness ignited the flames of love.
        </p>
        <h4>Chapter 5: The Journey Together</h4>
        <p>
          From changing flat tires to late-night beach walks, our journey
          together has been filled with countless adventures and shared moments.
          Through highs and lows, laughter and tears, our love has only grown
          stronger, guiding us towards a future filled with endless
          possibilities.
        </p>
        <h4>Epilogue: Forever and Always</h4>
        <p>
          As we stand on the brink of forever, I am grateful for the
          serendipitous moment that brought us together and the love that
          continues to bind us as one. Here's to a lifetime of love, laughter,
          and happily ever after.
        </p>
      </div>
      <DateLocation />
      <Footer />
    </div>
  );
}
