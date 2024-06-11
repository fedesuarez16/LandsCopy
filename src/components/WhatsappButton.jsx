import React, { useState, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { wsp } from "../assets";

const ScrollAndWhatsAppButton = () => {
  const sections = [
    '#hero', '#pricing', '#info', '#premisas', '#infoTwo', 
    '#management', '#lineas', '#negocios', '#entretenimiento', '#subtitles', 
    '#alianzass', '#contact', '#workWithUs', '#data', '#footer'
  ];
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((section) => section.substring(1) === entry.target.id);
            console.log(`Sección visible: ${entry.target.id}, Índice: ${index}`);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      { threshold: 0.1 } // Ajuste del umbral de visibilidad
    );
  
    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) {
        console.log(`Observando: ${section}`);
        observer.observe(element);
      }
    });
  
    return () => {
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);
  

  const handleScroll = () => {
    const nextSection = (currentSection + 1) % sections.length;
    const element = document.querySelector(sections[nextSection]);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Alinea el elemento al inicio de la ventana de visualización
      });
    }
  };

  return (
    <div className="fixed z-50 right-0 bottom-0 flex flex-col items-center m-4 space-y-2">
      <div
        onClick={handleScroll}
        className="p-4 bg-white rounded-full text-gray-400 opacity-75 cursor-pointer flex items-center justify-center"
      >
        <BsChevronDown size={20} />
      </div>
      <a
        href="https://wa.me/541170985000"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-green-500 rounded-full text-white cursor-pointer flex items-center justify-center"
      >
        <img src={wsp} alt="WhatsApp" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default ScrollAndWhatsAppButton;
