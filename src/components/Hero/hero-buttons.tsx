"use client";
import { MessageCircleMore } from "lucide-react";

interface HeroButtonsProps {
  URL: string;
}

export function HeroButtons({ URL }: HeroButtonsProps) {
  return (
    <div className="flex flex-row gap-2 min-[400px]:flex-row">
      <button
        className="inline-flex h-10 w-2/3 items-center justify-center rounded-md bg-primary px-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-fit sm:px-8"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("stores")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Encontrar Lojas
      </button>
      <a
        href={URL}
        target="_blank"
        className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-fit sm:px-8"
      >
        Contacto WhatsApp
        <MessageCircleMore size={20} />
      </a>
    </div>
  );
}
