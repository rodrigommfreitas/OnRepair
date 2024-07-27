interface MenuButtonProps {
  id: string;
  text: string;
}

export function NavbarButton({ id, text }: MenuButtonProps) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline"
    >
      {text}
    </a>
  );
}
