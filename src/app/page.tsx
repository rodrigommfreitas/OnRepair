import { Navbar } from "@/components/Navbar/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/Hero/hero";
import { Services } from "@/components/Services/services";
import { Stores } from "@/components/stores";
import { About } from "@/components/about";
import { Contacts } from "@/components/contacts";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="mt-14 flex-1">
        <Hero />
        <Services />
        <Stores />
        <About />

        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
