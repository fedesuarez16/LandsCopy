import React from 'react';
import Section from "./Section";

const WorkWithUs = () => {
  return (
    <section className='bg-verde py-10'>
      <div className='max-w-[1000px]   text-center mx-auto'>
         <h6 className='font-semibold font-code mx-auto  text-2xl'>Trabajá con nosotros. <br /> Envianos tu CV. </h6>
         {/* Enlace de WhatsApp */}
         <a  href="https://wa.me/541170985000" target="_blank" rel="noopener noreferrer">
           <div  className="flex bg-bordo mx-auto  w-32 py-4  rounded-md items-center mt-6">
              <p className="font-code text-[15px] mx-auto font-semibold text-white  tracking-wider">
                  Contactate
                </p>
           </div>
         </a>
      </div>
    </section>
  );
};

export default WorkWithUs;
