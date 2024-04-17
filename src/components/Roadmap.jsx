import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { person1, person2, person3 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden bg-custom " id="roadmap">
    <div className="container text-center mt-0 lg:mt-10 text-black">
      <Heading title="Management Lands" />
      
      <div className="lg:grid lg:grid-cols-3 gap-4  font-code font-thin ">
        <div className="flex mb-[40px]  flex-col items-center">
          <div className="  w-29 h-40 mb-4">
            <img src={person1} alt="Person 1" className="w-full h-full object-contain" />
          </div>
          <h5 className="text-xl text-black font-bold mb-1">Gastón Marengo</h5>
          <p className="text-sm text-gray-400">Jefe Operativo</p>
        </div>
        <div className="flex mb-[40px] flex-col items-center">
          <div className="  w-29 h-40 mb-4">
            <img src={person2} alt="Person 2" className="w-full h-full object-cover" />
          </div>
          <h5 className="text-xl font-bold text-black mb-1">Sebastián Cancela  </h5>
          <p className="text-sm text-gray-400">Socio y Director General </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="  w-29 h-40 mb-4">
            <img src={person3} alt="Person 3" className="w-full h-full object-cover" />
          </div>
          <h5 className="text-xl font-bold mb-1">Francisco Pla Cárdenas</h5>
          <p className="text-sm  text-center text-gray-400">Socio y Director o Gerente de Administración y Finanzas</p>
        </div>
      </div>
      
      {/* Frase centrada */}
      <p className="text-center mb-10 mt-10 text-2xl lg:text-5xl p-14 font-light">Contamos con más de <b> 20 años de Experiencia </b> en la <b> Industria Financiera </b> y de <b> Seguros</b></p>
    </div>
  </Section>
);

export default Roadmap;
