"use client";

import React from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { DoubleSlider } from "./doubleSlider";
import { CheckboxGroup } from "./checkboxGroup";
import { useFilters, useIngredients, useQueryFilters } from "../../hooks";

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  useQueryFilters(filters);

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
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
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
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price Range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="100"
            min={0}
            max={100}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
          />
        </div>

        <DoubleSlider
          min={0}
          max={100}
          step={1}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 100]}
          onValueChange={updatePrices}
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
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
