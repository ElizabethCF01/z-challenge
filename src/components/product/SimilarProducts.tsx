import { useEffect, useRef } from "react";
import { Product } from "../../interfaces/Product";
import ProductCard from "./Card";

export default function SimilarProducts({ products }: { products: Product[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollTo({
            left: container.scrollLeft + e.deltaY * 4,
            behavior: "smooth",
          });
        }
      };
      container.addEventListener("wheel", onWheel);
      return () => container.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto py-md">
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
