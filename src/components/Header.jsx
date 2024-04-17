// Importar useEffect de React
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { yourlogo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Nuevo estado para verificar si es un dispositivo móvil

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Cambiar aquí el ancho de pantalla para dispositivos móviles según sea necesario
    };

    handleResize(); // Llamar a handleResize una vez para verificar el estado inicial
    window.addEventListener("resize", handleResize); // Agregar el event listener para el evento resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remover el event listener al desmontar el componente
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-custom lg:backdrop-blur-sm ${
        openNavigation ? "bg-custom" : "bg-custom backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[8rem] lg:w-[12rem] xl:mr-8" href="#hero">
          <img src={yourlogo} width={180} height={35} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-custom lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                onMouseEnter={item.title === "Servicios" ? handleMouseEnter : null}
                onMouseLeave={item.title === "Servicios" ? handleMouseLeave : null}
                className={`block relative font-code text-2xl uppercase text-black transition-colors hover:text-color-1 ${
                  (item.onlyMobile && isMobile) ? "hidden lg:hidden" : "" // Condición para ocultar en dispositivos móviles
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-black"
                    : "lg:text-black"
                } lg:leading-5 lg:hover:text-black xl:px-12`}
              >
                {item.title}
                {item.title === "Servicios" && showSubmenu && (
                  <div className="absolute left-0 mt-2 p-2 bg-custom w-[230px] rounded-lg shadow-lg">
                    <a href="#lineas" className="block py-2 px-4 text-[12px] text-black hover:bg-gray-200">
                      Lineas Personales
                    </a>
                    <a href="#negocios" className="block py-2 font-code px-4 text-[12px] text-black hover:bg-gray-200">
                      Negocios y Empresas
                    </a>
                    <a href="#entretenimiento" className="block py-2 font-code px-4 text-[12px] text-black hover:bg-gray-200">
                      Entretenimiento y Ocio
                    </a>
                  </div>
                )}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          {/* Icono de menú */}
        </Button>
      </div>
    </div>
  );
};

export default Header;
