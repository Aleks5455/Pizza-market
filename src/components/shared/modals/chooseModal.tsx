"use client";

import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { Product } from "@prisma/client";
import React from "react";
import { Title } from "../title";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
  className?: string;
};

export const ChooseModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <Title text={product.name} size="lg" className="mb-5 font-extrabold" />
      </DialogContent>
    </Dialog>
  );
};
