"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

type Props = {
  className?: string;
};

const categoriesList = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Combos" },
  { id: 3, name: "Starters" },
  { id: 4, name: "Cocktails" },
  { id: 5, name: "Coffee" },
  { id: 6, name: "Drinks" },
  { id: 7, name: "Desserts" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex bg-gray-50 p-1 gap-1 rounded-2xl", className)}
    >
      {categoriesList.map(({name, id}, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center h-11 px-5 font-bold rounded-2xl",
            activeCategoryId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
