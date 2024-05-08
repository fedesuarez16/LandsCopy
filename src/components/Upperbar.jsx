import React from 'react';
import { instagram, linkedin , ig, lkdn} from "../assets";

const UpperBar = () => {
  return (
    <div className="flex justify-between items-center bg-bg px-5 py-2 lg:px-7.5 xl:px-10">
      <div className="flex items-center">
        <p className="text-white text-lg">(5411) 7098-5000</p> {/* Reemplaza '123-456-789' con tu número de teléfono real */}
      </div>
      <div className="flex items-center">
      <img src={ig} className="w-6 h-6 mx-4" /> {/* Ajusta el tamaño y el margen según sea necesario */}
        <img src={lkdn} className="w-6 h-6" /> {/* Ajusta el tamaño según sea necesario */}
      </div>
    </div>
  );
};

export default UpperBar;
