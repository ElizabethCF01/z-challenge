export default function Specification({
  label,
  value,
  classes = "",
}: {
  label: string;
  value: string;
  classes?: string;
}) {
  return (
    <div className={`w-full flex border-t-small py-lg my-0 ${classes}`}>
      <div className="w-1/2 lg:w-1/3  uppercase">{label}</div>
      <div className="w-1/2 lg:w-2/3 ">{value}</div>
    </div>
  );
}
