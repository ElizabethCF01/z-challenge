export default function Specification({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`w-full flex border-t-small py-lg my-0 ${className}`}>
      <div className="w-1/2 lg:w-1/3  uppercase">{label}</div>
      <div className="w-1/2 lg:w-2/3 ">{value}</div>
    </div>
  );
}
