"use client";

import { cn } from "../../lib/utils";

type Variants = {
  name: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  items: readonly Variants[];
  className?: string;
  selectedValue?: Variants["value"];
  onClick?: (value: Variants["value"]) => void;
};

export const ProductVariants: React.FC<Props> = ({
  items,
  className,
  selectedValue,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex flex-1 items-center justify-center cursor-pointer h-[30px] rounded-xl px-5 transition-all duration-500 text-sm",
            {
                "bg-white shadow": item.value === selectedValue,
                "text-gray-500 opacity-50 pointer-events-none": item.disabled
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
