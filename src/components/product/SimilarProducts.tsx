import { Product } from "../../interfaces/Product";
import ProductCard from "./Card";

export default function SimilarProducts({ products }: { products: Product[] }) {
  return (
    <div className="w-full overflow-x-auto py-md">
      <div className="flex gap-sm min-w-max">
        {products.map((product, idx) => (
          <ProductCard
            product={product}
            key={product.id + idx}
            classes="w-344 flex-none"
          />
        ))}
      </div>
    </div>
  );
}
