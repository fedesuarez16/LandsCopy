import React from 'react';
import Section from "./Section";
import { direction, email, wpp , Raices} from "../assets";

const ThreeElementsCarousel = () => {
  return (
    <Section id='contacto' className='bg-brown'>
      <div className="absolute inset-0 w-full opacity-50 z-0 left-auto right-0">
        <img src={Raices} alt="Background" className="w-full brightness-50 h-full object-cover" />
      </div>
      <div className='max-w-[1000px] mx-auto'>
        <div className="lg:flex justify-between">
          {/* First element */}
          <div className='flex mb-4 flex-col items-center'>
            <img src={direction} alt='Element 1' className='w-24 h-24 object-contain mb-2' />
            <p className='text-center'>Av. Del Libertador 6570, <br /> 4º Piso Oficina “B”, <br /> CABA, CP C1428ARV</p>
          </div>
          
          {/* Second element */}
          <div className='flex flex-col items-center'>
            <img src={email} alt='Element 2' className='w-24 h-24 object-contain mb-2' />
            <p className='text-center'>Contacto@landsbroker.com.ar</p>
          </div>
          
          {/* Third element */}
          <div className='flex flex-col items-center'>
            <a href="https://wa.me/5491170985000" target="_blank" rel="noopener noreferrer">
              <img src={wpp} alt='Element 3' className='w-24 h-24 object-contain mb-2' />
            </a>
            <p className='text-center'>(5411) 7098-5000</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ThreeElementsCarousel;
