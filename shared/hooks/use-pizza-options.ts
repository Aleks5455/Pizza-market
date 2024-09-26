import { useEffect, useState } from "react";
import { Variant } from "../components/shared/productVariants";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvailableSizes } from "../lib/getAvailableSizes";
import { ProductVariation } from "@prisma/client";

type ReturnProps = {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  selectedIngredients: Set<number>;
  toggleIngredients: (value: number) => void;
  availablePizzaSizes: Variant[];
  currentItemId?: number;
};

export const usePizzaOptions = (
  variations: ProductVariation[]
): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<number>([])
  );
  const availablePizzaSizes = getAvailableSizes(type, variations);

  const currentItemId = variations.find((item) => item.pizzaType === type && item.size === size)?.id;

  useEffect(() => {
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);
    const isSizeAvailable = availablePizzaSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );

    if (!isSizeAvailable && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    toggleIngredients,
    availablePizzaSizes,
    currentItemId,
  };
};
