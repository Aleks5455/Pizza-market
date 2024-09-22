import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0
  );
  return (ingredientsPrice + item.productVariation.price) * item.quantity;
};
