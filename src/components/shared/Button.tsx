export default function Button({
  children,
  disabled = false,
  className = "",
  variant = "primary",
  onClick = () => {},
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn  px-lg py-lg ease font-light text-14 w-full ${
        variant == "primary" ? "bg-dark text-white" : "border text-black"
      } ${className}`}
    >
      {children}
    </button>
  );
}
