import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const categoriesList = [
  "Pizzas",
  "Combos",
  "Starters",
  "Cocktails",
  "Coffee",
  "Drinks",
  "Desserts",
];

const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex bg-gray-50 p-1 gap-1 rounded-2xl", className)}
    >
      {categoriesList.map((category, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center h-11 px-5 font-bold rounded-2xl",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
