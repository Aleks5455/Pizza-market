"use client";

import { Dialog } from "../../ui";
import { DialogContent, DialogTitle } from "../../ui/dialog";
import React from "react";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "../../../../@types/prisma";
import { cn } from "../../../lib/utils";
import { ProductForm } from "../productForm";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export const ChooseModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const firstVariation = product.variations[0];


  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle>Modal</DialogTitle>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ProductForm product={product} _onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
