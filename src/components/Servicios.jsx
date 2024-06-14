import React from 'react';
import PersonalLines from './PersonalLines';
import BusinessAndEnterprises from './BusinessAndEnterprises';
import EntertainmentAndLeisure from './EntertainmentAndLeisure';

const Servicios = () => {
  return (
    <section className="bg-custom">
      {/* Div vacío para anclaje preciso */}
      <div id="features" className="relative -top-40"></div>
      <div  className="container mt-10 lg:mt-0 text-center text-black relative z-2">
        <h3  id="lineas" className="text-5xl lg:text-6xl lg:mb-8 text-center text-yellow-950">Resguardo Patrimonial</h3>
        <div className="lg:gap-10 items-center lg:px-32">
          <PersonalLines />
          <BusinessAndEnterprises />
          <EntertainmentAndLeisure />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
