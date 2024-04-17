import React from 'react';
import Section from "./Section";
import { curve } from "../assets";


import Slider from 'react-slick';
import { companyLogos } from '../constants'; // Assuming companyLogos is an array of logo URLs
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsi, net } from '../assets'; // Agrega la ruta de la imagen de subrayado

const CarouselThree = () => {
  return (
    <Section className='bg-custom'>
      <div className='max-w-[1000px] mb-2 mx-auto'>
        <h2 className='text-center text-2xl text-black  font-bold mb-2'>Alianzas Estrategicas</h2>
        {/* Agrega la imagen de subrayado debajo del título */}
        <img src={curve} alt="Subrayado" className="mx-auto mb-6" />
        <div className="flex gap-8 px-32 justify-center items-center">
          <img src={gsi} alt="Logo 1" className="w-52 h-52 object-contain" />
          <img src={net} alt="Logo 2" className="w-52 h-52 object-contain" />
        </div>
      </div>
    </Section>
  );
};

export default CarouselThree;
