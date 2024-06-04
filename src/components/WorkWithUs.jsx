import React from 'react';
import Section from "./Section";

const WorkWithUs = () => {
  return (
    <section className='bg-verde py-10'>
      <div className='max-w-[1000px] text-center mx-auto'>
        <h6 className='font-semibold font-code mx-auto text-4xl'>Trabajá con nosotros. <br /> Envianos tu CV. </h6>
        {/* Enlace de correo electrónico */}
        <a href="mailto:contacto@landsbroker.com.ar" className="block z-50 mt-6">
          <div className="flex z-0 bg-bordo mx-auto w-32 py-4 rounded-md items-center">
            <p className="font-code z-0 text-[15px] mx-auto font-semibold text-white tracking-wider">
              Contactate
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WorkWithUs;
