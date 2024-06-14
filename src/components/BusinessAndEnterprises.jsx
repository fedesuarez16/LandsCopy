import React from 'react';
import { negocios } from "../assets";

const BusinessAndEnterprises = () => {
  return (
    <div className="block mx-auto relative t p-0.5 bg-no-repeat bg-[length:100%_100%]">
      <div className="relative z-2 flex flex-col min-h-[22rem] lg:items-center p-[2.4rem]">
        <h5 className="h5 lg:text-5xl lg:w-[490px] py-2 px-2 mb-10 text-center mx-auto mt-24 text-white bg-brown">Negocios y Empresas</h5>
        <div className="flex justify-center items-center mb-10">
          <img src={negocios} alt="Imagen 1" className="w-22 mx-1" />
        </div>
        {/* items 2 */}
        <div className="grid font-code lg:pl-[15rem] lg:w-[76rem] text-start items-center lg:grid-cols-2 gap-2 mb-2">
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Incendio</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Cauciones </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Flota de Vehículos</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Integral de Comercio </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">·Transporte de Mercaderías </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Integral de Consorcio </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Comprensiva y Producto</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· ART</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Responsabilidad Civil Directores y Operaciones</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Accidentes Personales </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Todo Riesgo Operativo</p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Vida Ley Contrato de Trabajo </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Todo Riesgo Construcción y Montaje </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Vida Colectivo </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Seguros Técnicos </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Protección y Continuidad Societaria </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Planes Financieros Societarios y Corporativos </p>
          </div>
          <div className="flex items-center">
            <p className="body-2 font-semibold text-brown">· Beneficios Empleados Claves </p>
          </div>
        </div>
        <div
          onClick={() => {
            const contactoElement = document.getElementById('contacto');
            if (contactoElement) {
              contactoElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex bg-bordo cursor-pointer lg:mr-[38rem] w-32 py-3 px-6 rounded-md items-center mt-2"
        >
          <p id="entretenimiento" className="font-code text-[15px] font-semibold text-white tracking-wider">
            Escribinos
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessAndEnterprises;
