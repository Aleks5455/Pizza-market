"use client";

import React, { useState } from "react";
import { ProductImage } from "./productImage";
import { Title } from "./title";
import { ProductVariants } from "./productVariants";
import { Button } from "../ui";
import { cn } from "../../lib/utils";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "../../constants/pizza";
import { Ingredient, ProductVariation } from "@prisma/client";
import { Ingredients } from "./ingredients";
import { useSet } from "react-use";

type Props = {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  variations: ProductVariation[];
  className?: string;
  onClickAddCart?: () => void;
};

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  className,
  name,
  ingredients,
  variations,
  onClickAddCart,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} sm, ${mapPizzaType[type]} pizza`;

  const pizzaPrice = variations.find(
    (variation) => variation.pizzaType === type && variation.size === size
  )!.price;

  const ingredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  const totalPrice = pizzaPrice + ingredientsPrice;

  const availableSizes = variations.filter((variation) => variation.pizzaType === type);

  const handleClick = () => {
    onClickAddCart?.();
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400 mb-5">{textDetails}</p>

        <div className="flex flex-col gap-3 mt-3">
          <ProductVariants
            items={pizzaSizes}
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
          className="h-[55px] px-10 mt-10 text-base rounded-2xl w-full"
          onClick={handleClick}
        >
          Add to cart for ${totalPrice}
        </Button>
      </div>
    </div>
  );
};
