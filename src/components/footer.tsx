export function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t bg-muted px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 OnRepair. Todos os direitos reservados.
      </p>

      <p className="text-xs sm:ml-auto">
        Desenvolvido por{" "}
        <a
          className="cursor-pointer font-semibold underline-offset-4 hover:underline"
          href="https://www.rodrigommfreitas.com/"
          target="_blank"
        >
          www.rodrigommfreitas.com
        </a>
      </p>
    </footer>
  );
}
