import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemPrice } from "./calcCartItemPrice";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  disabled?: boolean;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

type ReturnProps = {
  items: CartStateItem[];
  totalAmount: number;
};

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productVariation.product.name,
    imageUrl: item.productVariation.product.imageUrl,
    price: calcCartItemPrice(item),
    pizzaSize: item.productVariation.size,
    pizzaType: item.productVariation.pizzaType,
    disabled: false,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })) as CartStateItem[];

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
