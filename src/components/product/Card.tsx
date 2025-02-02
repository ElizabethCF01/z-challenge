import { Link } from "react-router";
import { Product } from "../../interfaces/Product";

function ProductCard({
  className = "",
  product,
}: {
  className?: string;
  product: Product;
}) {
  return (
    <Link
      data-testid="product-card"
      to={`/product/${product.id}`}
      className={` font-light p-md border cursor-pointer flex-none aspect-square product-card relative ${className}`}
    >
      <div
        style={{ zIndex: -1, left: 0 }}
        className="absolute  w-full h-full bg-black ease card-bg-dark"
      ></div>
      <div className="flex align-center justify-center relative p-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full product-image"
        />
      </div>
      <div
        style={{ zIndex: 1, left: 0, right: 0, bottom: 0 }}
        className="object-contain  flex w-full flex-col align-start uppercase  absolute  p-md"
      >
        <p className="text-dark-gray text-xs mb-xs product-brand">
          {product.brand}
        </p>
        <div className="flex justify-between product-price ease text-sm w-full ">
          <span>{product.name}</span>
          <span className="mr-xl ">{product.basePrice} EUR</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
