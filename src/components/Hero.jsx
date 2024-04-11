import React from 'react';
import { background, Raices, BgDesktop } from "../assets";
import Section from './Section';

const Hero = () => {
  return (
    <Section className="relative bg-cover  bg-bg  bg-center h-screen lg:h-screen flex items-center">
      {/* Background image container positioned at the right side */}
      <div className="absolute inset-0 z-0 left-auto right-0">
        <img src={BgDesktop} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="lg:hidden absolute inset-0 z-0 left-auto right-0">
        <img src={background} alt="Background" className="w-full h-full brightness-[70%] object-cover" />
      </div>
     
     
      <div className="absolute brightness-0  inset-0 z-10 w-2/3">
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
      </div>
      {/* Custom color gradient overlay */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-bg lg:via-bg to-transparent"></div>

      {/* Content of the hero */}
      <div className="container  mx-auto pb-[310px] lg:pb-0 text-center lg:text-start z-10">
        <h1 className="text-5xl font-bold lg:text-7xl text-white mb-4">
          Resguardamos <br /> tu patrimonio
        </h1>
        <p className="text-lg lg:text-xl leading-7 font-code lg:font-thin w-full lg:w-1/2 text-white mb-8">
        Brindamos vitalidad al mercado con un modelo único de negocios para nuestros clientes y productores asociados, ofreciendo una asesoría integral en <b className='font-bold'>Resguardo Patrimonial.</b>
        </p>
        {/* Other elements of the hero, such as buttons, etc. */}
      </div>
    </Section>
  );
};

export default Hero;
