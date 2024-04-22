import { check } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features" className="bg-custom">
      <div id="lineas" className="container mt-10 lg:mt-0 text-center text-black relative z-2">
        <Heading title="Resguardo Patrimonial"/>
      
        <div   className="lg:gap-10  lg:px-32">
          <div className="block mx-auto relative p-0.5 bg-no-repeat bg-[length:100%_100%]">
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
              <h5  className="h5 lg:text-5xl lg:w-[390px] mb-20 py-2 text-white bg-verde">Lineas personales</h5>

              {/* items */}
              <div className="grid font-code text-start  lg:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold  text-black">Automotores – Moto - Barco</p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black">Hogar</p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black">Movilidad <p className="font-thin"> (Bicicletas, monopatín, etc) </p></p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black">Equipos electrónicos portátiles <p className="font-thin"> (Computadoras, Celulares, tablets, otros.) </p>
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black">Asistencia al viajero.</p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black"> Accidentes Personales
                    RC y Mala Práxis profesional </p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black"> Vida y Salud. </p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black"> Planes de Pensión y Jubilación</p>
                </div>
              </div>

              <div
               onClick={() => {
                const contactoElement = document.getElementById('contacto');
                if (contactoElement) {
                  contactoElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex bg-bordo  w-32 py-4  rounded-md items-center mt-16">
              <p id="negocios" className="font-code text-[15px] mx-auto font-semibold text-white  tracking-wider">
                  Contactate
                </p>
              </div>

             



              <h5  className="h5 lg:text-5xl lg:w-[490px] py-2 mb-20  mt-24 text-white bg-brown">Negocios y Empresas</h5>
                {/* items 2 */}
                <div className="grid text-start font-code lg:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Incendio</p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Flota de Vehículos</p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Transporte de Mercaderías </p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Responsabilidad Civil Comprensiva y Producto </p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Responsabilidad Civil Directores y Operaciones</p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> Todo Riesgo Operativo </p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> Todo Riesgo Construcción Y Montaje</p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> Seguros Tecnicos</p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> Cauciones</p>
                  </div> <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> Integral de Comercio</p>
                  </div> <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> Integral de Consorcio</p>
                  </div> <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> ART</p>
                  </div> <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black"> Accidentes Personales </p>
                  </div> <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Vida Ley Contrato de Trabajo</p>
                  </div> <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Vida Colectivo </p>
                  </div> <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Protección y Continuidad Societaria </p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Planes Financieros Societarios y Corporativos </p>
                  </div>
                  <div className="flex items-center">
                    <img src={check} alt="Tick" className="mr-2" />
                    <p className="body-2 font-semibold text-black">Beneficios Empleados Claves </p>
                  </div>
                </div>

                <div 
                 onClick={() => {
                  const contactoElement = document.getElementById('contacto');
                  if (contactoElement) {
                    contactoElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex bg-bordo  w-32 py-4 px-6 rounded-md items-center mt-16">
                <p id="entretenimiento"  className="font-code text-[15px] font-semibold text-white  tracking-wider">
                  Escribinos
                </p>
              </div>

              <h5 className="h5 lg:text-5xl lg:w-[540px] mb-20 py-2  mt-24 text-white bg-bordo">Entretenimiento y Ocio</h5>

                  {/* items */}
                  <div className="grid text-start font-code lg:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black">Seguros no tradicionales</p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black">Accidentes Personales. </p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black">Deportistas</p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black"> Deportes <p className="font-thin"> (Golf, aventura, deporte de riesgo) </p> </p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black">Responsabilidad Civil Eventos y Ferias</p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black"> Seguros de espectáculos <p className="font-thin">(seguros para participantes u organizadores)</p>  </p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black"> Responsabilidad Civil Asociaciones <p className="font-thin">(clubes, asociaciones etc) </p>  </p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black"> Obras de arte   y Objetos de Valor</p>
                    </div>
                  </div>

                  <div 
                   onClick={() => {
                    const contactoElement = document.getElementById('contacto');
                    if (contactoElement) {
                      contactoElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex bg-bordo  w-32 py-4 px-6 rounded-md items-center mt-16">
                <p className="font-code text-[15px] font-semibold text-white  tracking-wider">
                  Llamanos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
