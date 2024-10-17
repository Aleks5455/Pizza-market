"use client";

import React from "react";
import { useCartStore } from "../../store/cart";
import toast from "react-hot-toast";
import { ProductWithRelations } from "../../../@types/prisma";
import { ChoosePizzaForm } from "./choosePizzaForm";
import { ChooseProductForm } from "./chooseProductForm";

type Props = {
  product: ProductWithRelations;
  _onSubmit?: () => void;
};

export const ProductForm: React.FC<Props> = ({ product, _onSubmit  }) => {
  const firstVariation = product.variations[0];
  const isPizzaForm = Boolean(firstVariation.pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (
    productVariationId?: number,
    ingredients?: number[]
  ) => {
    try {
      const itemId = productVariationId || firstVariation.id;

      await addCartItem({
        productVariationId: itemId,
        ingredients,
      });

      toast.success(product.name + " added to cart");

      _onSubmit?.();
    } catch (error) {
      console.log(error);
      toast.error(product.name + " could not be added to cart");
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        variations={product.variations}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstVariation.price}
      loading={loading}
    />
  );
};
