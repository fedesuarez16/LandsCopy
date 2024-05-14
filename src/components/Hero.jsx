import React from 'react';
import { background, Raices, BgDesktop } from "../assets";
import Section from './Section';
import WhatsAppButton from './WhatsappButton';

const Hero = () => {
  return (
    <section id='hero' className=" relative bg-cover   z-10 bg-center h-screen lg:h-[100vh] flex items-center">
      {/* Background image container positioned at the right side */}
      <div className="absolute inset-0 z-0 left-auto right-0">
        <img src={BgDesktop} alt="Background" className="w-full  h-full object-cover" />
      </div>

      <div className="lg:hidden absolute inset-0 z-0 left-auto right-0">
        <img src={background} alt="Background" className="w-full h-full  object-cover" />
      </div>
     
     
      <div className="absolute brightness-0  inset-0 z-10 lg:w-2/3">
        <img src={Raices} alt="Background" className="w-full opacity-60 h-full object-cover" />
      </div>
      {/* Custom color gradient overlay */}
      <div className="hidden md:block absolute inset-0 w-[83%] bg-gradient-to-r from-custom via-custom to-transparent"></div>

      {/* Content of the hero */}
      <div className="container py-8  mx-auto pb-[310px] lg:pb-0 text-center lg:text-start z-10">
        <h1 className="text-4xl font-light lg:text-7xl text-bg mb-4">
          Somos un <b> Broker</b>  <br /> con Fuerza Natural        </h1>
        <p className="text-xl lg:text-4xl leading-7 font-light w-full lg:w-2/3 text-bg mb-8">
Con <b  className='font-bold'>LANDS</b>, tu mundo está protegido.
        </p>
        {/* Other elements of the hero, such as buttons, etc. */}
      </div>
      <p className='absolute top-[650px] lg:top-[550px]' ></p>
    </section>
  );
};

export default Hero;
