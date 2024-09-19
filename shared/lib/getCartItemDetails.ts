import { Ingredient } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: Ingredient[]
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
