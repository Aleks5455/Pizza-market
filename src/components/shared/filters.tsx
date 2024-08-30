"use client";

import React, { useEffect, useState } from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { DoubleSlider } from "./doubleSlider";
import { CheckboxGroup } from "./checkboxGroup";
import { useFilterIngredients } from "../../../hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

type PriceProps = {
  priceFrom?: number;
  priceTo?: number;
};

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  const { ingredients, loading, onAddId, selectedIngredietns } =
    useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );

  const [prices, setPrice] = useState<PriceProps>({});

  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredietns),
    };

    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`);
  }, [prices, pizzaTypes, sizes, selectedIngredietns, router]);

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <CheckboxGroup
        title="Dough type"
        name="pizzaTypes"
        className="mb-5"
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
      />

      <CheckboxGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
        onClickCheckbox={toggleSizes}
        selected={sizes}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price Range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="100"
            min={0}
            max={100}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>

        <DoubleSlider
          min={0}
          max={100}
          step={1}
          value={[prices.priceFrom || 0, prices.priceTo || 100]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredietns}
      />
    </div>
  );
};
