import { createContext, useEffect } from "react";
import { useContext, useState } from "react";
import { ICartContext, CartProduct } from "../interfaces/Cart";

const CartContext = createContext<ICartContext>({
  cartProducts: [],
  setCartProducts: () => {},
  addProductToCart: () => {},
  isAddedToCartProducts: () => false,
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const useContextElement = () => {
  return useContext(CartContext);
};

export default function Context({ children }: { children: React.ReactNode }) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const addProductToCart = (cartProduct: CartProduct) => {
    if (!cartProducts.filter((elm) => elm.id == cartProduct.id).length) {
      const item = {
        ...cartProduct,
        quantity: 1,
      };
      setCartProducts((pre) => [...pre, item]);
    }
  };
  const isAddedToCartProducts = (id: string) =>
    cartProducts.some((elm) => elm.id == id);

  useEffect(() => {
    if (localStorage.getItem("cartList") != null) {
      const items = JSON.parse(localStorage.getItem("cartList") as string);
      if (items?.length) {
        setCartProducts(items);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    setTotalPrice,
  };
  return (
    <CartContext.Provider value={contextElement}>
      {children}
    </CartContext.Provider>
  );
}
