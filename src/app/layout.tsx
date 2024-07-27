import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "OnRepair - Centro de Reparações",
  description:
    "Loja e centro de reparações de dispositivos e equipamentos eletrónicos.",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: "OnRepair - Centro de Reparações",
    description:
      "Loja e centro de reparações de dispositivos e equipamentos eletrónicos.",
    siteName: "OnRepair",
  },
  keywords: [
    // Brand name
    "OnRepair",
    "on repair",
    // Locations
    "funchal",
    "madeira",
    "sao martinho",
    "são martinho",
    "machico",
    "ribeira brava",
    // Description
    "loja de informática",
    "informática",
    "centro de reparações",
    "loja de reparações",
    "reparações",
    // Services
    "comprar",
    "ecrã",
    "ecrã partido",
    "ecrã rachado",
    "película",
    "película de vidro",
    "pelicula de gel",
    "reparação",
    "subsitução",
    "formatar",
    "reset",
    "desbloquear",
    "instalar windows",
    "instalar linux",
    // Devices
    "smartphone",
    "smartphones",
    "telemóveis",
    "telemóvel",
    "computer",
    "computers",
    "computadores",
    "computador",
    "desktop",
    "gaming",
    "gaming desktop",
    "gaming computer",
    "gaming pc",
    "gaming laptop",
    "computador gaming",
    "computador gamer",
    "pc gaming",
    "portátil gaming",
    "portatil gaming",
    "portáteis",
    "portátil",
    "portatil",
    "computador portátil",
    "computador portatil",
    "laptops",
    "laptop",
    "tablets",
    "tablet",
    "consolas",
    "consola",
    "rato",
    "tinteiros",
    "tinteiro",
    // Expressions
    "liga",
    "desliga",
    "arranjar",
    "reparar",
    "reparação",
    "reparações",
    "concertar",
    // Problems
    "deixou de funcionar",
    "não liga",
    "não carrega",
    "deixou de dar imagem",
    "não dá imagem",
    "não funciona",
    // Others
    "tecnologia",
    "eletrónica",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
