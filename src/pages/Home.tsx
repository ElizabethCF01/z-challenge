import { useDeferredValue, useEffect, useState } from "react";
import ProductCard from "../components/product/Card";
import { Product } from "../interfaces/Product";
import { getProducts } from "../api/products";
import xIcon from "../assets/x-icon.svg";
import { useNavigate, useSearchParams } from "react-router";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const deferredQuery = useDeferredValue(query);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams(searchParams);
        if (deferredQuery) {
          params.set("q", deferredQuery);
          setSearchParams(params);
        } else {
          params.delete("q");
          setSearchParams(params);
        }
        navigate(`?${params.toString()}`);
        const response = await getProducts(deferredQuery);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [deferredQuery, searchParams]);

  const handleClear = () => {
    setQuery("");
  };

  return (
    <section className="py-lg">
      <div className="w-full relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a smartphone..."
          className="w-full border-b px-xs py-xs placeholder-gray font-md focus-b"
        ></input>
        {query.length > 0 && (
          <button
            onClick={handleClear}
            className="absolute"
            style={{ top: "2px", right: "6px" }}
          >
            <img src={xIcon} alt="claer" />
          </button>
        )}
      </div>
      <div className="w-full text-sm flex mt-sm mb-lg">
        {loading ? (
          <p>Loading...</p>
        ) : !products.length ? (
          <p>No products found 😕</p>
        ) : (
          <p>RESULTS {products.length}</p>
        )}
      </div>
      <div className="grid grid-cols-4  mt-lg">
        {!loading &&
          products.map((product, i) => (
            <ProductCard
              key={product.id + i}
              product={product}
              classes={
                (i % 4 === 0 ? "" : "border-l-none") +
                " " +
                (i > 3 ? "border-t-none" : "")
              }
            />
          ))}
      </div>
    </section>
  );
}

export default Home;
