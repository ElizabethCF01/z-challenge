import { Product } from "./Product";

export interface CartProduct extends Product {
  quantity: number;
  storage: string;
  color: string;
  price: number;
}
export interface ICartContext {
  cartProducts: CartProduct[];
  setCartProducts: (cartProducts: CartProduct[]) => void;
  addProductToCart: (cartProduct: CartProduct) => void;
  isAddedToCartProducts: (id: string) => boolean;
  totalPrice: number;
  setTotalPrice: (totalPrice: number) => void;
}
