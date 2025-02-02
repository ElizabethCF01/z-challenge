import { Link } from "react-router";
import { CartProduct } from "../../interfaces/Cart";

export default function CardProductCart({
  item,
  handleRemoveFromCart,
}: {
  item: CartProduct;
  handleRemoveFromCart: (id: string) => void;
}) {
  const { id, imageUrl, name, storage, color, price } = item;
  return (
    <div className="mb-md">
      <div className="flex gap-md">
        <Link to={`/product/${id}`} className=" flex flex-col align-start">
          <img src={imageUrl} alt={name} className="object-contain w-200 " />
        </Link>
        <div className=" text-sm ml-sm font-light align-start flex flex-col justify-between py-lg">
          <div className="flex flex-col ">
            <div className="flex justify-between uppercase  w-full">
              <span>{name}</span>
            </div>
            <span className="uppercase">
              {storage} | {color}
            </span>
            <span className="mt-sm">{price} EUR</span>
          </div>
          <button
            onClick={() => handleRemoveFromCart(id)}
            className="text-danger p-1 mt-lg"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
