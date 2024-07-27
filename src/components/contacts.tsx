"use server";
import { SectionWrapper } from "./section-wrapper";
import { Suspense } from "react";
import { EmailList } from "./email-list";
import { SocialMediaList } from "./social-media-list";
import { PhoneNumberList } from "./phone-number-list";

export async function Contacts() {
  return (
    <SectionWrapper id="contact" className="bg-muted">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Contacte-nos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Entre em contacto connosco para qualquer dúvida ou suporte.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Telefone</h3>
            <Suspense fallback={<div>Loading...</div>}>
              <PhoneNumberList />
            </Suspense>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Redes Sociais</h3>
            <Suspense fallback={<div>Loading...</div>}>
              <SocialMediaList />
            </Suspense>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-xl font-bold">Email</h3>
            <Suspense fallback={<div>Loading...</div>}>
              <EmailList />
            </Suspense>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
