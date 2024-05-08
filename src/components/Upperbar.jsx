import React from 'react';
import { instagram, linkedin , ig, lkdn} from "../assets";

const UpperBar = () => {
  return (
    <div className="flex justify-between items-center bg-bg px-5 py-2 lg:px-7.5 xl:px-10">
      <div className="flex items-center">
        <p className="text-white text-lg">(5411) 7098-5000</p> {/* Reemplaza '123-456-789' con tu número de teléfono real */}
      </div>
      <div className="flex items-center">
        <a href="https://www.instagram.com/lands.broker/" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram" className="w-6 h-6 mx-4" /> {/* Ajusta el tamaño y el margen según sea necesario */}
        </a>
        <a href="https://www.linkedin.com/company/landsbroker/" target="_blank" rel="noopener noreferrer">
          <img src={lkdn} alt="LinkedIn" className="w-6 h-6" /> {/* Ajusta el tamaño según sea necesario */}
        </a>
      </div>
    </div>
  );
};

export default UpperBar;
