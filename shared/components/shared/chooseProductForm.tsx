import { cn } from "../../lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import Image from "next/image";

type Props = {
  imageUrl: string;
  name: string;
  loading?: boolean;
  price: number;
  className?: string;
  onSubmit?: () => void;
};

export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  className,
  name,
  loading,
  price,
  onSubmit,
}) => {
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
        <Button
          loading={loading}
          onClick={onSubmit}
          className="h-[55px] px-10 mt-10 text-base rounded-2xl w-full"
        >
          Add to cart for ${price}
        </Button>
      </div>
    </div>
  );
};
