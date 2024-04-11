import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import CarouselTwo from "./components/CarouselTwo";
import CarouselThree from "./components/CarouselThree";
import Contact from "./components/Contact";
import WorkWithUs from "./components/WorkWithUs";
import Data from "./components/Data";



const App = () => {
  return (
    <>
      <div className="pt-[4.75rem]  lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Pricing />
        <Collaboration />
        <Benefits />
        <Services />
        <Roadmap />
        <Carousel/>
        <CarouselTwo/>
        <CarouselThree/>
        <Contact/>
        <WorkWithUs/>
        <Data/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
