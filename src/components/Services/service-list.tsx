"use client";
import {
  BatteryLowIcon,
  HardDriveIcon,
  KeyRoundIcon,
  MonitorCogIcon,
  SmartphoneIcon,
  WrenchIcon,
} from "lucide-react";
import { Service } from "./service";

export function ServiceList() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
      <Service
        title="Substituição de ecrãs e películas"
        description="Substituímos ecrãs danificiados de telemóveis, tablets e computadores. Também aplicamos películas de proteção para todas as marcas e modelos de telemóveis e tablets de forma a prevenir danos futuros."
        icon={SmartphoneIcon}
      />
      <Service
        title="Substituição de baterias usadas"
        description="Substituímos baterias gastas de telemóveis, tablets e computadores. Aumente a autonomia do seu dispositivo."
        icon={BatteryLowIcon}
      />
      <Service
        title="Formatação, instalação e manutenção de sistemas operativos"
        description="Formate o seu dispositivo e instale o sistema operativo de sua preferência. Mantenha-se atualizado e protegido."
        icon={MonitorCogIcon}
      />
      <Service
        title="Reparação de hardware"
        description="Reparamos todo o tipo de avarias de hardware em telemóveis, tablets, computadores, consolas, entre outros."
        icon={WrenchIcon}
      />
      <Service
        title="Recuperação de dados"
        description="Recuperamos dados perdidos de discos rígidos, cartões de memória e telemóveis."
        icon={HardDriveIcon}
      />
      <Service
        title="Desbloqueio de telemóveis"
        description="Desbloqueamos telemóveis de todas as marcas e modelos Android."
        icon={KeyRoundIcon}
      />
    </div>
  );
}
