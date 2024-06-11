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
import ScrollAndWhatsAppButton from "./components/WhatsappButton";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <ScrollAndWhatsAppButton />
      <Header />
      <div id="hero"><Hero /></div>
      <div id="pricing"><Pricing /></div>
      <div id="info"><Info /></div>
      <div id="collaboration"><Collaboration /></div>
      <div id="infoTwo"><InfoTwo /></div>
      <div id="management" ><Roadmap /></div>
      <div id="benefits"><Benefits /></div>
      <div ><Subtitles /></div>
      <div id=""><Carousel /></div>
      <div id="carouselTwo"><CarouselTwo /></div>
      <div id="carouselThree"><CarouselThree /></div>
      <div id="contact"><Contact /></div>
      <div id="workWithUs"><WorkWithUs /></div>
      <div id="data"><Data /></div>
      <div id="footer"><Footer /></div>
    </div>
  );
};

export default App;
