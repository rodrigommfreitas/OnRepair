"use server";
import { SectionWrapper } from "../section-wrapper";
import { GetInTouch } from "./get-in-touch";
import { ServiceList } from "./service-list";

export async function Services() {
  return (
    <SectionWrapper id="services">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Os Nossos Serviços
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos uma ampla gama de serviços de reparo e manutenção para os
            seus dispositivos tecnológicos. Abaixo estão alguns dos serviços que
            oferecemos.
          </p>
        </div>
      </div>
      <ServiceList />
      <GetInTouch />
    </SectionWrapper>
  );
}
