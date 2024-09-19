import React from "react";
import { Button } from "../ui";
import { cn } from "../../lib/utils";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "./cartDrawer";

type Props = {
  className?: string;
};

export const CartButton: React.FC<Props> = ({ className }) => {
  return (
    <CartDrawer>
      <Button className={cn("group relative", className)}>
        <b>$78</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
      </Button>
    </CartDrawer>
  );
};
