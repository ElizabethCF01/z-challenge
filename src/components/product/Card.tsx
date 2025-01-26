// import logo from "../../assets/mbst-logo.svg";
import { Link } from "react-router";
import { Product } from "../../interfaces/Product";

function ProductCard({
  classes = "",
  product,
}: {
  classes?: string;
  product: Product;
}) {
  return (
    <Link
      to={`/product/${product.id}`}
      className={` font-light p-md border cursor-pointer flex-none aspect-square ${classes}`}
    >
      <div className=" flex align-center justify-center relative  py-xs">
        <img
          src={product.imageUrl}
          alt={product.name}
          className=" object-contain h-255 "
        />
      </div>
      <div className="w-full flex flex-col align-start uppercase">
        <p className="text-dark-gray text-xs">{product.brand}</p>
        <div className="flex justify-between text-sm w-full">
          <span>{product.name}</span>
          <span>{product.basePrice} EUR</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
