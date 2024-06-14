import React from 'react';
import { entretenimiento } from "../assets";

const EntertainmentAndLeisure = () => {
  return (
    <div className="block mx-auto relative t p-0.5 bg-no-repeat bg-[length:100%_100%]">
      <div className="relative z-2 flex flex-col min-h-[22rem] lg:items-center p-[2.4rem]">
        <h5 className="h5 lg:text-5xl lg:w-[540px] mb-10 py-2 px-2 mx-auto mt-24 text-white bg-bordo">Entretenimiento y Ocio</h5>
        <div className="flex justify-center items-center mb-10">
          <img src={entretenimiento} alt="Imagen 1" className="w-22 mx-1" />
        </div>
        {/* items */}
        <div className="grid text-start font-code lg:ml-[14rem] lg:w-[49rem] gap-2 mb-6">
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Seguros NO tradicionales</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Accidentes Personales Deportistas </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Deportes <span className="font-thin hidden lg:inline">(Golf, aventura, deporte de riesgo)</span></p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Responsabilidad Civil - Eventos y Ferias <span className="font-thin hidden lg:inline">(Clubes, Asociaciones etc)</span></p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Seguros de espectáculos <span className="font-thin hidden lg:inline">(seguros para participantes u organizadores)</span></p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Obras de arte y Objetos de Valor</p>
          </div>
        </div>
        <div
          onClick={() => {
            const contactoElement = document.getElementById('contacto');
            if (contactoElement) {
              contactoElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex bg-bordo cursor-pointer lg:mr-[26rem] w-32 py-3 px-6 rounded-md items-center mt-2"
        >
          <p className="font-code text-[15px] font-semibold text-white tracking-wider">Llamanos</p>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentAndLeisure;
