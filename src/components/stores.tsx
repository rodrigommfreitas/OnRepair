"use server";

import { SectionWrapper } from "./section-wrapper";
import { Suspense } from "react";
import { StoreList } from "./store-list";

export async function Stores() {
  return (
    <SectionWrapper id="stores" className="bg-muted">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            As Nossas Lojas
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Visite uma das nossas lojas e encontre o melhor serviço de reparação
            da ilha da Madeira.
          </p>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <StoreList />
      </Suspense>
    </SectionWrapper>
  );
}
