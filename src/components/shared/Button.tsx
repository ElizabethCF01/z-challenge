export default function Button({
  children,
  disabled = false,
  classes = "",
  variant = "priamry",
  onClick = () => {},
}: {
  children: React.ReactNode;
  disabled?: boolean;
  classes?: string;
  variant?: "priamry" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn  mt-xl px-lg py-lg ease font-light text-14 w-full ${
        variant == "priamry" ? "bg-dark text-white" : "border text-black"
      } ${classes}`}
    >
      {children}
    </button>
  );
}
