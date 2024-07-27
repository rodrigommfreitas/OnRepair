"use client";

export function GetInTouch() {
  return (
    <div className="mx-auto mt-4 text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      Não encontrou o que procura?{" "}
      <a
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="cursor-pointer text-black transition-colors hover:underline"
      >
        Entre em contacto connosco
      </a>{" "}
      para discutirmos a sua necessidade.
    </div>
  );
}
