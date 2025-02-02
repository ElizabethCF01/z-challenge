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

  const setupUrlParams = () => {
    const params = new URLSearchParams(searchParams);
    if (deferredQuery) {
      params.set("q", deferredQuery);
      setSearchParams(params);
    } else {
      params.delete("q");
      setSearchParams(params);
    }
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        setupUrlParams();
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

  const cardProductClass = (index: number) => {
    let border = "";
    if (index > 0) border += "border-t-none-sm";
    if (index > 1) border += " border-t-none-md";
    if (index > 2) border += " border-t-none-lg";
    if (index > 3) border += " border-t-none-xl";
    if (index > 4) border += " border-t-none-2xl";

    if (index % 2 != 0) border += " border-l-none-md";
    if (index % 3 != 0) border += " border-l-none-lg";
    if (index % 4 != 0) border += " border-l-none-xl";
    if (index % 5 != 0) border += " border-l-none-2xl";

    return border;
  };

  return (
    <section className="py-lg px-lg">
      <div className=" relative ">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a smartphone..."
          className=" w-full border-b  py-xs placeholder-gray font-md focus-b"
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
      <div className=" text-sm flex mt-sm mb-lg">
        {loading ? (
          <p>Loading...</p>
        ) : !products.length ? (
          <p>No products found 😕</p>
        ) : (
          <p className="uppercase">results {products.length}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  mt-lg">
        {!loading &&
          products.map((product, i) => (
            <ProductCard
              key={product.id + i}
              product={product}
              className={cardProductClass(i) + " item-" + i}
            />
          ))}
      </div>
    </section>
  );
}

export default Home;
