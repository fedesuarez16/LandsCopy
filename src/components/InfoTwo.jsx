import Section from "./Section";
import { seguros, Raices, check3, curve } from "../assets";
import { collabContent, collabText } from "../constants";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const InfoTwo = () => {
  return (
    <Section id="nosotros" className="bg-custom   ">
        <div className="absolute opacity-30 h-full w-full">
        <img src={Raices} alt="Background" className="w-full h-full object-cover" />

      </div>
      
      <div className="container  mt-12 lg:flex">

        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center mx-auto gap-0  lg:w-[28rem] lg:pl-14 lg:mr-8 mt-4 mb-10 md:mt-0"
        >

          <h4 className="text-3xl uppercase text-start text-brown">Primero el Cliente
            <img src={curve} alt="Subrayado" className="w-32 relative lg:left-48 mb-2" />
          </h4>

          <ul className="w-[25rem] mx-auto text-black mb-10 md:mb-14">
              <li  className="max-w-[39rem] ">
                <div className="font-code flex items-center">
                  <img src={check3} width={8} height={8} alt="check3" />
                  <h6 className="body-2 text-[18px] ml-5"> Tenemos vocación de servicio</h6>
                </div>
              </li>
              <li  className="">
                <div className="font-code flex items-center">
                  <img src={check3} width={8} height={8} alt="check3" />
                  <h6 className="body-2 text-[18px] ml-5"> Contamos con capacidad de adaptación</h6>
                </div>
              </li>
              <li  className="">
                <div className="font-code flex items-center">
                  <img src={check3} width={8} height={8} alt="check3" />
                  <h6 className="body-2 text-[18px] ml-5">  Atendemos con agilidad y dinamismo</h6>
                </div>
              </li>
              <li  className="">
                <div className="font-code flex items-center">
                  <img src={check3} width={8} height={8} alt="check" />
                  <h6 className="body-2 text-[18px] ml-5">  Asesoramos profesionalmente</h6>
                </div>
              </li>
          </ul>

        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-center lg:w-[44rem] lg:pl-44 lg:mr-8 mt-4 mb-10 md:mt-0"
        >
          <div className="flex w-[28rem] items-center justify-normal">
            <img src={seguros} alt="" />
          </div>
        </motion.div>
      </div>

      <div id="alianzas" ></div>

    </Section>
  );
};

export default InfoTwo;
