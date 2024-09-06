"use client";

import { Dialog } from "../../ui";
import { DialogContent } from "../../ui/dialog";
import React from "react";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../chooseProductForm";
import { ProductWithRelations } from "../../../../@types/prisma";
import { ChoosePizzaForm } from "../choosePizzaForm";
import { cn } from "../../../lib/utils";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export const ChooseModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const izPizzaForm = Boolean(product.variations[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {izPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            variations={product.variations}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
