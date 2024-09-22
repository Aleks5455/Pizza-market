import { Ingredient } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { CartStateItem } from "./getCartDetails";

export const getCartItemDetails = (
  ingredients: CartStateItem["ingredients"],
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
): string => {
  const detail = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    detail.push(`${typeName} ${pizzaSize} sm`);
  }

  if (ingredients) {
    detail.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return detail.join(", ");
};
