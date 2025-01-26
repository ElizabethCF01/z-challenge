import { Link } from "react-router";
import { CartProduct } from "../../interfaces/Cart";

export default function CardProductCart({
  item,
  handleRemoveFromCart,
}: {
  item: CartProduct;
  handleRemoveFromCart: (id: string) => void;
}) {
  return (
    <div className="mb-md">
      <div className="flex gap-md">
        <Link to={`/product/${item.id}`} className=" flex flex-col align-start">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="object-contain w-200 "
          />
        </Link>
        <div className=" text-sm ml-sm font-light align-start flex flex-col justify-between py-lg">
          <div className="flex flex-col ">
            <div className="flex justify-between uppercase  w-full">
              <span>{item.name}</span>
            </div>
            <span className="uppercase">
              {item.storage} | {item.color}
            </span>
            <span className="mt-sm">{item.price} EUR</span>
          </div>
          <button
            onClick={() => handleRemoveFromCart(item.id)}
            className="text-danger p-1 mt-lg"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
