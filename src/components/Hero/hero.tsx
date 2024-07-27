"use server";
import { SectionWrapper } from "../section-wrapper";
import Image from "next/image";
import { getWhatsappContactURL } from "@/lib/actions/getWhatsappContactURL";
import { HeroButtons } from "./hero-buttons";

export async function Hero() {
  const whatsappContactURL = await getWhatsappContactURL();

  return (
    <SectionWrapper id="hero">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Restaurando tecnologia. Conectando vidas.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Oferecemos diagnósticos gratuitos para todos os tipos de
              dispositivos, garantido transparência e confiança no nosso
              trabalho. Reparamos todos os tipos de dispositivos, desde
              telemóveis, computadores, tablets, consolas e entre outros.
            </p>
          </div>
          <HeroButtons URL={whatsappContactURL!} />
        </div>
        <Image
          src="/hero.jpg"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl shadow-black/40 sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </SectionWrapper>
  );
}
