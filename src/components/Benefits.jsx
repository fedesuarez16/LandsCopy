import { check } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section className="bg-custom" id="features">
      <div className="container mt-20 text-center text-black relative z-2">
        <Heading title="Resguardo Patrimonial"/>
      
        <div className="lg:gap-10 mb-10 lg:px-32">
          <div className="block mx-auto relative p-0.5 bg-no-repeat bg-[length:100%_100%]">
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
              <h5 className="h5 lg:text-5xl lg:w-[390px] mb-20 text-white bg-verde">Lineas personales</h5>

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
                  <p className="body-2 font-semibold text-black">Movilidad (Bicicletas, monopatín, etc)</p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black">Equipos electrónicos portátiles (Computadoras, Celulares, tablets, otros.)
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black">Asistencia al viajero.</p>
                </div>
                <div className="flex items-center">
                  <img src={check} alt="Tick" className="mr-2" />
                  <p className="body-2 font-semibold text-black"> Accidentes Personales
                    RC y mala praxis profesional </p>
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

              <div className="flex bg-bordo  w-32 py-4 px-6 rounded-md items-center mt-20">
                <p className="font-code text-xs font-bold text-white uppercase tracking-wider">
                  Escribinos
                </p>
              </div>



              <h5 className="h5 lg:text-5xl lg:w-[390px] mb-20  mt-24 text-white bg-brown">Negocios y Empresas</h5>
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

                <div className="flex bg-bordo  w-32 py-4 px-6 rounded-md items-center mt-20">
                <p className="font-code text-xs font-bold text-white uppercase tracking-wider">
                  Escribinos
                </p>
              </div>

              <h5 className="h5 lg:text-5xl lg:w-[540px] mb-20  mt-24 text-white bg-bordo">Entretenimiento y Ocio</h5>

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
                      <p className="body-2 font-semibold text-black"> Deportes (Golf, aventura, deporte de riesgo) </p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black">Responsabilidad Civil Eventos y Ferias</p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black"> Seguros de espectáculos (seguros para participantes u organizadores) </p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black"> Responsabilidad Civil Asociaciones (clubes, asociaciones etc) </p>
                    </div>
                    <div className="flex items-center">
                      <img src={check} alt="Tick" className="mr-2" />
                      <p className="body-2 font-semibold text-black"> Obras de arte   y Objetos de Valor</p>
                    </div>
                  </div>

                  <div className="flex bg-bordo  w-32 py-4 px-6 rounded-md items-center mt-16">
                <p className="font-code text-xs font-bold text-white uppercase tracking-wider">
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
