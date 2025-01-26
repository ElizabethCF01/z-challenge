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
      <div className="flex justify-between align-center">
        <Link to="/">
          <Button variant="secondary" classes="bg-white  uppercase w-344">
            continue shopping
          </Button>
        </Link>
        <div className="flex align-center gap-md">
          <p className="text-md uppercase my-0 mt-xl ">
            Total: {totalPrice} EUR
          </p>
          <Button classes="uppercase w-344">Pay</Button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
