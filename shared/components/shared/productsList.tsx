"use client"
import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { cn } from "../../lib/utils";
import { ProductCard } from "./productCard";
import { useIntersection } from "react-use";
import { useCategoryStore } from "../../store/category";
import { ProductWithRelations } from "../../../@types/prisma";

type Props = {
  title: string;
  items: ProductWithRelations[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export const ProductsList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, title, intersection?.isIntersecting]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.variations[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
