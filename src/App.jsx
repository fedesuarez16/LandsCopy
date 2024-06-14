import React from "react";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Carousel from "./components/Carousel";
import CarouselTwo from "./components/CarouselTwo";
import CarouselThree from "./components/CarouselThree";
import Contact from "./components/Contact";
import WorkWithUs from "./components/WorkWithUs";
import Data from "./components/Data";
import Info from "./components/Info";
import InfoTwo from "./components/InfoTwo";
import Subtitles from "./components/Subtitles";
import NavigationButton from "./components/NavigationButton"; // Import the new NavigationButton component
import Servicios from "./components/Servicios";
import PersonalLines from "./components/PersonalLines";
import BusinessAndEnterprises from "./components/BusinessAndEnterprises";
import Alianzas from "./components/Alianzas";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <div id="hero"><Hero /></div>
      <div id="pricing"><Pricing /></div>
      <div id="info"><Info /></div>
      <div id="collaboration"><Collaboration /></div>
      <div id="info-two"><InfoTwo /></div>
      <div id="roadmap"><Roadmap /></div>

      <div ><Benefits/></div>
      <div ><Subtitles /></div>
      <Alianzas/>
      <div id="carousel"><Carousel /></div>
      <div id="carousel-two"><CarouselTwo /></div>
      <div id="carousel-three"><CarouselThree /></div>
      <div id="contact"><Contact /></div>
      <div id="work-with-us"><WorkWithUs /></div>
      <div id="data"><Data /></div>
      <Footer />
      <NavigationButton /> {/* Add the NavigationButton component */}
    </div>
  );
};

export default App;
