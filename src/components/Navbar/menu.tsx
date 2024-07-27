import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { MenuButton } from "./menu-button";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="block lg:hidden">
      <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>
      {isMenuOpen && (
        <div className="absolute left-1/2 z-10 mt-3 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen flex-auto overflow-hidden rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <MenuButton id="services" text="Serviços" />
            <MenuButton id="stores" text="Lojas" />
            <MenuButton id="about" text="Sobre Nós" />
            <MenuButton id="contact" text="Contacto" />
          </div>
        </div>
      )}
    </div>
  );
}
