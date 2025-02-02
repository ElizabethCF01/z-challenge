import { Color } from "../../interfaces/Product";

export default function ColorPicker({
  colors,
  colorPicked = "",
  setColorPicked,
}: {
  colors: Color[];
  colorPicked?: string;
  setColorPicked: (color: string) => void;
}) {
  return (
    <div className="flex gap-sm">
      {colors.map((color) => (
        <div
          onClick={() => setColorPicked(color.name)}
          key={color.name}
          className={`flex justify-center align-center p-1 border-large cursor-pointer ease ${
            colorPicked === color.name
              ? ""
              : "border-light-gray hover:border-black"
          }`}
        >
          <div
            className="size-lg  "
            style={{ backgroundColor: color.hexCode }}
          ></div>
        </div>
      ))}
    </div>
  );
}
