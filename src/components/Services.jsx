import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check2, Raices } from "../assets";

import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section className="bg-custo " id="how-to-use">
      <div className="container text-black">
      

        <div className="relative lg:px-10  ">
          <div className="relative bg-bg z-1 flex items-center h-[49rem] mb-5 p-8  border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            
          <div className="absolute inset-0  z-0 left-auto right-0">
            <img src={Raices} alt="Background" className="w-full brightness-50  h-full object-cover" />
          </div>
            <div className="relative z-1 text-center mx-auto">
              <h4 className="h4 text-white font-bold text-5xl mb-6">Somos Land</h4>
              <p className="body-2 font-code font-thin mb-[3rem] text-[18px] lg:text-[20px] lg:leading-[36px] text-white">
              <strong className="font-semibold"> Brindamos vitalidad al mercado con un modelo único de negocios para nuestros clientes y productores asociados.</strong> <br /> <br />
                Nuestras raíces son parte de Grupo Loyalty y en nuestra búsqueda de crecimiento constante, desarrollamos una identidad propia con más de 20 años de trayectoria:  <strong className="font-bold">LANDS BROKER.</strong> Afianzándonos cada día más. <br /> <br />
                Somos una consultora en constante crecimiento comprometida a proporcionar los más altos estándares de servicio a nuestros clientes. <br /> <br />
                No somos un bróker de seguros tradicional porque tenemos un modelo de negocios innovador en el mercado argentino.
              </p>
            </div>
          </div>


          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className=" bg-bordo rounded-3xl h-[38rem] overflow-hidden lg:min-h-[38rem]">
            <p className="text-white lg:text-[1.1rem] font-semibold py-2 text-center">Premio Al Mejor Modelo De Negocios Integral Zurich 2022</p>

          <div className="relative h-[18rem] lg:h-[20rem] bg-bordo  overflow-hidden md:h-[19rem]">
                <img
                  src={service2}
                  className="w-full h-[16rem] object-cover"/>
              </div>
              <div className=" xl:px-8">
                <p   className="body-2  font-code text-18 lg:text-[20px] leading-6 px-8 text-white">
                Contamos con amplitud de oferta para acercar a nuestros clientes una variedad de productos de Compañías de Seguros que operan con nosotros.
              Nos destacamos por nuestra independencia e imparcialidad, porque seleccionamos para nuestros clientes las opciones que consideramos más adecuadas a cada necesidad de cobertura.
              </p >
              </div>
             
            </div>

         
            <div className=" bg-brown rounded-3xl h-[32.7rem] overflow-hidden lg:min-h-[38rem]">
                    
       
              <div className="py-2 px-8 m-8 xl:px-8">
              <div className="absolute inset-0  z-0 left-auto right-0">
               <img src={Raices} alt="Background" className="w-full  h-full " />
                </div>
                <h4 className="h4 text-white text-4xl font-semibold mb-4">Nuestras Premisas Comerciales</h4>
                <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start font-code py-3"
                  >
                    <img width={14} height={14} src={check2} />
                    <p className="ml-4 text-md font-normal text-white">{item}</p>
                  </li>
                ))}
              </ul>
              </div>
              <div className="relative h-[10rem]  overflow-hidden md:h-[18rem]">
                <img
                  src={service3}
                  className="w-full  object-cover"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Services;
