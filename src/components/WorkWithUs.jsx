import React from 'react';
import Section from "./Section";


const WorkWithUs = () => {
  return (
    <Section className='bg-verde'>
      <div className='max-w-[1000px] text-center mx-auto'>
         <h6 className='font-semibold font-code mx-auto text-2xl'>Trabajá con nosotros. <br /> Envianos tu CV. </h6>
         <div className="flex bg-bordo mx-auto text-center w-24 py-2 px-2 rounded-md  mt-[20px]">
                <p className="font-code text-xs text-center mx-auto font-bold text-white  ">
                  Contactar
                </p>
              </div>

      </div>
    </Section>
  );
};

export default WorkWithUs;
