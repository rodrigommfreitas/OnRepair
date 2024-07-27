"use client";

import Image from "next/image";
import { Menu } from "./menu";
import { NavbarButton } from "./navbar-button";

export function Navbar() {
  return (
    <header className="fixed z-10 flex h-14 w-full items-center bg-opacity-30 px-4 lg:px-6 lg:backdrop-blur-md lg:backdrop-filter">
      <div className="lg:hidden">
        <Menu />
      </div>
      <a
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("hero")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="hidden cursor-pointer items-center justify-center lg:flex"
      >
        <Image
          src="/logo_big_black.png"
          width="200"
          height="200"
          alt="OnRepair"
          className="mt-2 h-12 w-full overflow-hidden object-center lg:order-last"
        />
        <span className="sr-only">OnRepair</span>
      </a>
      <nav className="ml-auto hidden gap-4 sm:gap-6 lg:flex">
        <NavbarButton id="services" text="Serviços" />
        <NavbarButton id="stores" text="Lojas" />
        <NavbarButton id="about" text="Sobre Nós" />
        <NavbarButton id="contact" text="Contacto" />
      </nav>
    </header>
  );
}
