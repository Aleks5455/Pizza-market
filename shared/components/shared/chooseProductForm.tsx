import { cn } from "../../lib/utils";
import React from "react";
import { ProductImage } from "./productImage";
import { Title } from "./title";
import { ProductVariants } from "./productVariants";
import { Button } from "../ui";
import Image from "next/image";

type Props = {
  imageUrl: string;
  name: string;
  className?: string;
  onClickAdd?: () => void;
};

export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  className,
  name,
  onClickAdd,
}) => {
  const textDetails = "pizza pizza pizza";
  const totalPrice = 12;

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex flex-1 items-center justify-center relative w-full">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400 mb-5">{textDetails}</p>

        <Button className="h-[55px] px-10 mt-10 text-base rounded-2xl w-full">
          Add to cart for ${totalPrice}
        </Button>
      </div>
    </div>
  );
};
