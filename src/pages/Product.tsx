import { useEffect, useMemo, useState } from "react";
import { ProductDetails } from "../interfaces/Product";
import { getProductById } from "../api/products";
import { useNavigate, useParams } from "react-router";
import ColorPicker from "../components/shared/ColorPicker";
import StoragePicker from "../components/shared/StoragePicker";
import Button from "../components/shared/Button";
import backIcon from "../assets/arrow-left-icon.svg";
import SimilarProducts from "../components/product/SimilarProducts";
import { useContextElement } from "../context/Context";
import Specifications from "../components/product/Specifications";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductDetails | null>(null);

  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");

  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await getProductById(id);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    setColor("");
    setStorage("");
    fetchProduct();
  }, [id]);

  const imageUrl = useMemo(() => {
    if (!product) return "";
    if (color)
      return product.colorOptions.find((c) => c.name === color)?.imageUrl;
    return product.colorOptions[0].imageUrl;
  }, [product, color]);

  const price = useMemo(() => {
    if (!product) return "";
    if (storage)
      return product.storageOptions.find((s) => s.capacity === storage)?.price;
    return `From ${product.basePrice}`;
  }, [product, storage]);

  const handleAddToCart = () => {
    if (!product) return;
    const price = product.storageOptions.find(
      (s) => s.capacity === storage
    )?.price;
    addProductToCart({
      ...product,
      color,
      storage,
      quantity: 1,
      price: price ?? product.basePrice,
      imageUrl: imageUrl ?? product.colorOptions[0].imageUrl,
    });
  };

  return (
    <section className="py-lg px-xl">
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <>
          <button
            onClick={() => navigate(-1)}
            className="flex align-center gap-xs cursor-pointer uppercase text-sm text-light"
          >
            <img src={backIcon} alt="back" className="" />
            <p className="text-14 ">Back</p>
          </button>
          <div className=" grid md:grid-cols-2 p-lg gap-md mb-xl">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full max-h-screen"
            />
            <div className="flex flex-col py-lg px-lg mr-lg   lg:align-end justify-start ">
              <div className="flex flex-col align-start mr-lg justify-start">
                <h1 className="text-lg uppercase font-light mb-sm">
                  {product.name}
                </h1>
                <p className="text-14 mt-0">{price} EUR</p>

                <p className="uppercase text-14 mt-lg">
                  Storage ¿how much space do oyu need?
                </p>
                <StoragePicker
                  storages={product.storageOptions}
                  setStoragePicked={setStorage}
                  storagePcked={storage}
                />
                <p className="uppercase text-14 mt-lg">
                  color. pick your favourite.
                </p>
                <ColorPicker
                  colors={product.colorOptions}
                  setColorPicked={setColor}
                  colorPicked={color}
                />
                <p className="text-sm mt-xs">{color}</p>

                <Button onClick={handleAddToCart} disabled={!color || !storage}>
                  {isAddedToCartProducts(product.id)
                    ? "Already added to cart!"
                    : "Add to cart"}
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full mt-lg mb-xl">
            <h2 className="text-20 uppercase font-light">Specifications</h2>
            <Specifications product={product} />
          </div>
          <div className="w-full mt-xl py-lg">
            <h3 className="text-20 uppercase font-light">Similar Products</h3>
            <SimilarProducts products={product.similarProducts} />
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </section>
  );
}

export default Product;
