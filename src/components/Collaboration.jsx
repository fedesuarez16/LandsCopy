import { brainwaveSymbol, check, imagetwo } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const   Collaboration = () => {
  return (
    <Section className="bg-custom  lg:mb-20" crosses>
      <div className="container  lg:flex">
        <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
         className="max-w-[85rem] lg:px-12">
          <h2 className="h2 text-bg mb-4 mt-12 md:mb-8">
            Nuestra Experiencia
          </h2>

          <ul className="max-w-[22rem] text-black mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-6" key={item.id}>
                {item.text && (
                  <p className="body-2 mb-12 font-code text-black">{item.text}</p>
                )}
                <div className="flex font-code items-center">
                  <img src={check} width={12} height={12} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="bg-bg text-white px-4 py-2 rounded-lg shadow-md"
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

        <motion.div 
         variants={fadeIn('left', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
        className="lg:ml-auto xl:w-[38rem] mt-4">
          <div>
            <img src={imagetwo} alt="" />
          </div>
         
        </motion.div>
      </div>
    </Section>
  );
};

export default Collaboration;
