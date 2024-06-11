import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { person1, person2, Raices } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <section id="management" className="overflow-hidden h-auto bg-custom" >
    <div  className="absolute opacity-30 w-full h-full">       
      </div>
    <div  className="container text-2xl text-center mt-0 mb-20 lg:mt-10 text-bg">
      <Heading  title="Management Lands" />
      
      <div className="lg:grid lg:grid-cols-2 mx-auto font-code font-thin">
        {/* Primer bloque */}

       
        <div  id="#managementt" className="hidden lg:flex mx-auto h-[180px] bg-gris2 mb-10 w-[450px] gap-1 items-center justify-center">
        <div className="w-2/4 py-1 px-1 h-full">
          <img src={person2} alt="Person 1" className="w-full h-full object-cover" />
        </div>
        <div className="text-start w-3/4">
          <h5 className="text-xl text-white font-bold mb-1">Sebastián Cancela</h5>
          <p className="text-sm text-white">Socio y Director General</p>
        </div>
      </div>


        <div className="hidden lg:flex mx-auto h-[180px] bg-gris2 mb-10 w-[450px] gap-1 items-center justify-center">
        <div className="w-2/4 py-1 px-1 h-full">
          <img src={person1} alt="Person 1" className="w-full h-full object-cover" />
        </div>
        <div className="text-start w-3/4">
          <h5 className="text-xl text-white font-bold mb-1">Gastón Marengo</h5>
          <p className="text-sm text-white">Jefe Operativo</p>
        </div>
      </div>



        {/* Segundo bloque */}
       

        {/* Bloques para dispositivos móviles */}
        <div className="lg:hidden mx-auto mb-40px">
        <div className="flex flex-col items-center mb-12 bg-gris2 w-48 mx-auto  justify-center">
            <img src={person2} alt="Person 2" className="w-44 mt-1 h-44  object-contain" />
            <div className="text-center p-4">
              <h5 className="text-xl text-white font-bold mb-1">Sebastián Cancela</h5>
              <p className="text-sm text-white">Socio y Director General</p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gris2 w-48 mx-auto justify-center mb-8">
            <img src={person1} alt="Person 1" className="w-44 mt-2 h-44 mb-2 object-contain" />
            <div className="text-center  p-4">
              <h5 className="text-xl text-white font-bold mb-1">Gastón Marengo</h5>
              <p className="text-sm text-white">Jefe Operativo</p>
            </div>
          </div>
          
        
        </div>
      </div>
      

      {/* Frase centrada */}
    </div>

    <div className="container mb-20 text-center  text-bg">
                <p className="text-center text-bg   mt-20 text-2xl lg:text-5xl p-14 font-light">Contamos con más de <b>20 años de Experiencia</b> en la <b>Industria Financiera</b> y de <b>Seguros.</b></p>
            </div>
    
    
  </section>
);

export default Roadmap;
