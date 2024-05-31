import { Raices, check, check2, imagetwo, curve, curveBordo, curveVerde } from "../assets";
import { collabApps, collabContent, collabText, premisas } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const     Collaboration = () => {
  return (
    <Section  className="bg-custom lg:mx-10  lg:mb-20" crosses>
         <div className="absolute lg:hidden opacity-30 h-full w-full">
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="container  lg:flex">
      <div className="absolute opacity-30   w-full">
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />
      </div>

      <motion.div 
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
        className="lg:mx-auto items-center lg:w-{30rem}  xl:w-[38rem] mt-4">
          <div className="">
            <img src={imagetwo} alt="" />
          </div>
         
        </motion.div>


        <motion.div
         variants={fadeIn('left', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
         className="max-w-[85rem]  lg:px-5">
          <h2 className="text-[1.3rem] font-extrabold text-bg mt-12 md:mb-2">
           NUESTRAS PREMISAS COMERCIALES  
          <img src={curveBordo} alt="Subrayado" className=" w-32  h-2 relative sm2:left-[240px] lg:left-[240px] " />
          </h2>


          <ul className="max-w-[22rem]  text-black mb-10 md:mb-8">
            {premisas.map((item) => (
              <li className="" key={item.id}>
                <div className="flex font-code items-center">
                  <img src={check2} width={8} height={8} alt="check" />
                  <h6 className="body-2 text-[15px] ml-5">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-[1.5rem] font-extrabold text-verde   md:mb-2">
           NUESTRA EXPERIENCIA
           <img src={curveVerde} alt="Subrayado" className=" w-32  relative left-32 " />

          </h2>


          <ul className="max-w-[22rem]  text-black mb-10 md:mb-8">
            {collabContent.map((item) => (
              <li className="" key={item.id}>
                <div className="flex font-code items-center">
                  <img src={check} width={8} height={8} alt="check" />
                  <h6 className="body-2 text-[15px] ml-5">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="bg-bordo text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => {
              const contactoElement = document.getElementById('contacto');
              if (contactoElement) {
                contactoElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contactanos
          </button>

        </motion.div>

   
      </div>
    </Section>
  );
};

export default Collaboration;
