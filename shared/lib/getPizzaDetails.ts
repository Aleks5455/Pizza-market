import { Ingredient, ProductVariation } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcPizzaPrice } from "./calcPizzaPrice";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  variations: ProductVariation[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcPizzaPrice(
    type,
    size,
    variations,
    ingredients,
    selectedIngredients
  );

  const textDetails = `${size} sm, ${mapPizzaType[type]} pizza`;

  return { totalPrice, textDetails };
};
