import { Product } from "../../interfaces/Product";
import ProductCard from "./Card";

export default function SimilarProducts({ products }: { products: Product[] }) {
  return (
    <div className="w-full overflow-x-auto py-md">
      <div className="flex min-w-max ">
        {products.map((product, idx) => (
          <ProductCard
            product={product}
            key={product.id + idx}
            className={`w-344 flex-none ${idx > 0 && "border-l-none"}`}
          />
        ))}
      </div>
    </div>
  );
}
