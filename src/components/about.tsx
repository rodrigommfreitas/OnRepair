"use server";
import { SectionWrapper } from "./section-wrapper";

export async function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Experiência e Profissionalismo
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Com mais de 10 anos de experiência no mercado, a nossa equipa de
            técnicos altamente qualificados está pronta para cuidar dos seus
            dispositivos com o máximo de cuidado e profissionalismo.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
