interface MenuButtonProps {
  id: string;
  text: string;
}

export function MenuButton({ id, text }: MenuButtonProps) {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="w-full cursor-pointer rounded-md p-4 text-center text-lg font-medium text-black transition-colors hover:bg-gray-100/50 hover:text-gray-900 active:bg-gray-100"
    >
      {text}
    </div>
  );
}
