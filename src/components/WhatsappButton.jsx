import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'; // Puedes usar cualquier icono de flecha que prefieras
import { wsp } from "../assets";

const ScrollAndWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Desplaza hacia abajo una altura de ventana completa desde la posición actual
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed z-50 right-0 bottom-0 flex flex-col items-center m-4 space-y-2">
      {isVisible && (
        <div
          onClick={handleScroll}
          className="p-4 bg-white opacity-80 rounded-full text-gray-500 cursor-pointer flex items-center justify-center"
        >
          <BsChevronDown size={20} />
        </div>
      )}
      <a
        href="https://wa.me/541170985000" // Reemplaza "541170985000" con el número de WhatsApp al que quieres enviar mensajes
        target="_blank"
        rel="noopener noreferrer"
        className=" rounded-full text-white cursor-pointer flex items-center justify-center"
      >
      <img src={wsp} size={44}/>
      </a>
    </div>
  );
};

export default ScrollAndWhatsAppButton;
