import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section id="footer" crosses className="!px-0 !py-10 bg-gris">
            <hr className="border-t-[1.5px] border-black mb-6" />

      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption font-code text-black lg:block">
          © {new Date().getFullYear()}. Todos los derechos reservados.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-color"
            >
              <img src={item.iconUrl} width={23} height={23} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
