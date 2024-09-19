import { ProductVariation } from "@prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/productVariants";

export const getAvailableSizes = (type: PizzaType,variations: ProductVariation[]): Variant[] => {
    
  const pizzasFilteredByType = variations.filter(
    (variation) => variation.pizzaType === type
  );

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !pizzasFilteredByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
