import { useEffect } from "react";
import { useCartStore } from "../store/cart";
import { CreateCartItemValue } from "../services/dto/cart.dto";
import { CartStateItem } from "../lib/getCartDetails";

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  addCartItem: (values: CreateCartItemValue) => void;
  removeCartItem: (id: number) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
