"use client";

import { cn } from "../../lib/utils";
import { useCategoryStore } from "../../store/category";
import { Category } from "@prisma/client";
import React from "react";

type Props = {
  className?: string;
  items: Category[];
};

export const Categories: React.FC<Props> = ({ className, items }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex bg-gray-50 p-1 gap-1 rounded-2xl", className)}
    >
      {items.map(({ name, id }, index) => (
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
