import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/541170985000" // Reemplaza "xxxxxxxxxx" con el número de WhatsApp al que quieres enviar mensajes
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-10 right-0 bottom-0 p-4   text-white rounded-tr-md  cursor-pointer flex items-center justify-center"
    >
      <FaWhatsapp size={44}
      color='green' />
    </a>
  );
};

export default WhatsAppButton;
