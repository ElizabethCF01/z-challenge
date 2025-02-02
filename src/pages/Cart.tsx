import { Link } from "react-router";
import CardProductCart from "../components/product/CardProductCart";
import Button from "../components/shared/Button";
import { useContextElement } from "../context/Context";

function Cart() {
  const { cartProducts, totalPrice, setCartProducts } = useContextElement();

  const handleRemoveFromCart = (id: string) => {
    const updatedCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(updatedCart);
  };

  return (
    <section className="pt-lg px-xl">
      <div className="h-screen overflow-x-auto">
        <div className="flex align-center gap-xs uppercase text-sm text-light">
          <p className="text-md ">Cart ({cartProducts.length})</p>
        </div>
        <div className="mt-lg ">
          {cartProducts.map((item, idx) => (
            <CardProductCart
              key={item.id + idx}
              item={item}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between align-center">
        {cartProducts.length > 0 && (
          <p className="text-md w-full flex justify-between md:hidden uppercase my-0 mt-xl ">
            <span>Total:</span> <span>{totalPrice} EUR</span>
          </p>
        )}
        <Link to="/" className="mt-md w-full md:w-auto">
          <Button
            variant="secondary"
            className="bg-white uppercase w-full md:w-260"
          >
            continue shopping
          </Button>
        </Link>

        {cartProducts.length > 0 && (
          <div className="flex  justify-end align-center w-full gap-md mt-md">
            <p className="text-md  hidden md:block uppercase my-0  ">
              Total: {totalPrice} EUR
            </p>
            <Button className="uppercase   md:w-260">Pay</Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
