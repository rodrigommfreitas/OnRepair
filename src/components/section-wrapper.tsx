import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}> &
  React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex w-full justify-center py-12 md:py-24 lg:py-32",
        className,
      )}
      {...props}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}
