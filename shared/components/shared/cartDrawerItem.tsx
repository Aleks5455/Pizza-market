"use client"
import React from "react";
import { cn } from "../../lib/utils";
import * as CartItem from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cartItemDetails.types";
import { CountButton } from "./countButton";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
  className,
  id,
  imageUrl,
  name,
  price,
  details,
  quantity,
}) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Info name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton value={quantity} onClick={() => {}} />

          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />

            <Trash2Icon
              size={16}
              className="text-gray-400 hover:text-gray-600 cursor-pointer "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
