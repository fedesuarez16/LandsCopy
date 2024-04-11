import Section from "./Section";
import { brainwaveSymbol, check, imagethree } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";

const Pricing = () => {
  return (
    <Section className="bg-custom ">
      <div className="container mt-12 lg:flex">
        <div className="lg:w-[38rem] lg:pl-14 lg:mr-8 mt-4 md:mt-0">
          <div>
            <img src={imagethree} alt="" />
          </div>
        </div>

        <div className="max-w-[29rem]">
          <h2 className="h2 text-bg mb-4 mt-12 md:mb-8">
            Somos un Broker con Fuerza Natural
          </h2>

          <ul className="max-w-[29rem] text-black mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-6" key={item.id}>
                {item.text && (
                  <p className="body-2 font-code mb-12 text-black">
                    Nos destacamos por nuestra <strong  className="font-semibold">Independencia e Imparcialidad. </strong>  Trabajamos con las Compañías Líderes del Mercado, garantizando Respuesta y Solvencia Financiera. Contamos con una amplitud de oferta para acercar a nuestros clientes productos de Compañías de Seguros que operan con nosotros.
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
