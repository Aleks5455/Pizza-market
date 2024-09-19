import { Ingredient, ProductVariation } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

export const calcPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  variations: ProductVariation[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    variations.find(
      (variation) => variation.pizzaType === type && variation.size === size
    )?.price || 0;

  const ingredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + ingredientsPrice;
};
