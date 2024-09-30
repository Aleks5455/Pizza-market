"use client";

import { Dialog } from "../../ui";
import { DialogContent, DialogTitle } from "../../ui/dialog";
import React from "react";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../chooseProductForm";
import { ProductWithRelations } from "../../../../@types/prisma";
import { ChoosePizzaForm } from "../choosePizzaForm";
import { cn } from "../../../lib/utils";
import { useCartStore } from "../../../store/cart";
import toast from "react-hot-toast";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export const ChooseModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
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
      router.back();
    } catch (error) {
      console.log(error);
      toast.error(product.name + " could not be added to cart");
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle>Modal</DialogTitle>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            variations={product.variations}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstVariation.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
