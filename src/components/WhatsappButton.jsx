import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'; // Puedes usar cualquier icono de flecha que prefieras
import { wsp } from "../assets";

const ScrollAndWhatsAppButton = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['#nosotros', '#premisas', '#management', '#lineas', "#negocios", "#entretenimiento", "#alianzass", "#contacto", "#hero" ]; // Lista de IDs de las secciones

  const handleScroll = () => {
    const nextSection = (currentSection + 1) % sections.length; // Calcula el siguiente índice
    document.querySelector(sections[nextSection]).scrollIntoView({
      behavior: 'smooth',
    });
    setCurrentSection(nextSection); // Actualiza el índice actual
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
        href="https://wa.me/541170985000" // Reemplaza "541170985000" con el número de WhatsApp al que quieres enviar mensajes
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
