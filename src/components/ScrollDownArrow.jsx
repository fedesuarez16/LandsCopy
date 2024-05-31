import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'; // Puedes usar cualquier icono de flecha que prefieras

const ScrollDownArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Desplaza hacia abajo una altura de ventana completa desde la posición actual
      behavior: 'smooth',
    });
    setIsVisible(false); // Oculta la flecha después de hacer scroll
  };

  if (!isVisible) {
    return null; // No renderiza nada si no es visible
  }

  return (
    <div
      onClick={handleScroll}
      className="fixed z-50 left-0 m-4 bottom-0 p-4 bg-gray-400 rounded-full text-white cursor-pointer flex items-center justify-center"
    >
      <BsChevronDown size={20} />
    </div>
  );
};

export default ScrollDownArrow;
