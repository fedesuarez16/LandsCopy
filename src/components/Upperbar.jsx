import React from 'react';
import { instagram, linkedin } from "../assets";

const UpperBar = () => {
  return (
    <div className="flex justify-between items-center bg-bg px-5 lg:px-7.5 xl:px-10">
      <div className="flex items-center">
        <p className="text-white">123-456-789</p> {/* Reemplaza '123-456-789' con tu número de teléfono real */}
      </div>
      <div className="flex items-center">
      <img src={instagram} className="w-4 h-4 mx-4" /> {/* Ajusta el tamaño y el margen según sea necesario */}
        <img src={linkedin} className="w-4 h-4" /> {/* Ajusta el tamaño según sea necesario */}
      </div>
    </div>
  );
};

export default UpperBar;
