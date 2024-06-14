import React from 'react';
import { casa } from "../assets";

const PersonalLines = () => {
  return (
    <div id="lineas" className="block mx-auto relative t p-0.5 bg-no-repeat bg-[length:100%_100%]">
      <div className="relative z-2 flex flex-col min-h-[22rem] lg:items-center p-[2.4rem]">
        <h5 className="h5 lg:text-5xl mx-auto lg:w-[440px] mb-14 lg:mb-10 py-2 px-2 text-white bg-verde">Líneas personales</h5>
        <div className="flex justify-center items-center mb-14">
          <img src={casa} alt="Imagen 1" className="w-22 mx-1" />
        </div>
        {/* items */}
        <div className="grid font-code lg:ml-16 lg:w-[52rem] text-start items-start lg:grid-cols-2 gap-2 mb-2">
          <div className="flex items-center text-start">
            <p className="body-2 font-semibold text-brown">· Automotores</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Accidentes Personales</p>
          </div>
          <div className="flex items-center text-start">
            <p className="body-2 font-semibold text-brown">· Moto</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Responsabilidad Civil y Mala Praxis Profesional </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Embarcaciones </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Vida y Salud </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Hogar </p>
          </div>
          <div className="flex items-start">
            <p className="body-2 font-semibold text-brown">· Planes De Pensión y Jubilación </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Movilidad <span className="font-thin hidden lg:inline">(Bicicletas, monopatín, etc)</span></p>
          </div>
          <div className="flex items-center ">
            <p className="body-2 font-semibold text-brown">· Asistencia al Viajero</p>
          </div>
          <div className="flex items-start">
            <p className="body-2 font-semibold text-brown">· Equipos electrónicos portátiles <span className="font-thin hidden lg:inline">(Computadoras, Celulares, tablets, otros.)</span></p>
          </div>
        </div>
        <div
          onClick={() => {
            const contactoElement = document.getElementById('contacto');
            if (contactoElement) {
              contactoElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex mr-[39.5rem] cursor-pointer bg-bordo w-32 py-3 rounded-md items-center mt-2"
        >
          <p id="negocios" className="font-code text-[15px] mx-auto font-semibold text-white tracking-wider">
            Contactate
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalLines;
