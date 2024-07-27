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
    "instalar",
    // Devices
    "pc",
    "smartphone",
    "smartphones",
    "telemóveis",
    "telemóvel",
    "computer",
    "computadores",
    "computador",
    "desktop",
    "gaming",
    "portáteis",
    "portátil",
    "portatil",
    "laptop",
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
