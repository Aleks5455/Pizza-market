"use client";

import React from "react";
import { ProductImage } from "./productImage";
import { Title } from "./title";
import { ProductVariants } from "./productVariants";
import { Button } from "../ui";
import { cn } from "../../lib/utils";
import { PizzaSize, PizzaType, pizzaTypes } from "../../constants/pizza";
import { Ingredient, ProductVariation } from "@prisma/client";
import { Ingredients } from "./ingredients";
import { usePizzaOptions } from "../../hooks/use-pizza-options";
import { getPizzaDetails } from "../../lib/getPizzaDetails";

type Props = {
  imageUrl: string;
  name: string;
  loading?: boolean;
  ingredients: Ingredient[];
  variations: ProductVariation[];
  className?: string;
  onSubmit: (itemId: number, ingredients: number[]) => void;
};

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  className,
  name,
  loading,
  ingredients,
  variations,
  onSubmit,
}) => {
  const {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    toggleIngredients,
    availablePizzaSizes,
    currentItemId,
  } = usePizzaOptions(variations);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    variations,
    ingredients,
    selectedIngredients
  );

  const handleClick = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400 mb-5">{textDetails}</p>

        <div className="flex flex-col gap-3 mt-3">
          <ProductVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <ProductVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-3">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <Ingredients
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => toggleIngredients(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          className="h-[55px] px-10 mt-10 text-base rounded-2xl w-full"
          onClick={handleClick}
        >
          Add to cart for ${totalPrice}
        </Button>
      </div>
    </div>
  );
};
