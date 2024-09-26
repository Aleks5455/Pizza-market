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
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

  const onAddProduct = () => {
    addCartItem({
      productVariationId: firstVariation.id,
    });
  };
  const onAddPizza = async (productVariationId: number, ingredients: number[]) => {
    try {
      await addCartItem({
        productVariationId,
        ingredients,
      });
      toast.success("Pizza added to cart");
      router.back();
    } catch (error) {
      console.log(error);
      toast.error("Pizza could not be added to cart");
    }
  };

  const onSubmit = (productVariationId?: number, ingredients?: number[]) => {
    if (isPizzaForm) {
      onAddPizza(firstVariation.id, []);
    } else {
      onAddProduct();
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
