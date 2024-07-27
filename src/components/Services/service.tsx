"use client";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ElementType, useRef, useState } from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: ElementType;
}

export function Service({ title, description, icon: Icon }: ServiceProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col rounded-lg bg-card p-4 shadow-lg md:block md:p-8">
      <div
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Collapse" : "Expand"}
        className="flex items-center justify-between hover:cursor-pointer hover:underline md:mb-4 md:hover:cursor-default md:hover:no-underline"
      >
        <div className="flex items-center">
          <Icon color="blue" size={32} className="mr-4 flex-shrink-0" />
          <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
        </div>
        <button className="block md:hidden">
          {isOpen ? (
            <ChevronUpIcon size={24} className="text-primary" />
          ) : (
            <ChevronDownIcon size={24} className="text-primary" />
          )}
        </button>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "mt-4 animate-accordion-down" : "animate-accordion-up"
        }`}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <p className="text-muted-foreground md:hidden">{description}</p>
      </div>
      <p className="hidden text-muted-foreground md:block">{description}</p>
    </div>
  );
}
