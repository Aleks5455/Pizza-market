import React from "react";
import { Button, Skeleton } from "../ui";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { WhiteBlock } from "./whiteBlock";
import { CheckoutDetails } from "./checkoutDetails";
import { cn } from "../../lib/utils";

type Props = {
  totalAmount: number;
  className?: string;
  loading?: boolean;
};

const TAX = 5;
const DELIVERY_PRICE = 15;

export const CheckoutSidebar: React.FC<Props> = ({ className, totalAmount, loading }) => {
  const taxPrice = totalAmount * (TAX / 100);
  const totalPrice = totalAmount + taxPrice + DELIVERY_PRICE;

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total:</span>
        {loading ? (
          <Skeleton className="w-48 h-11" />
        ) : (
          <span className=" h-11 text-4xl font-extrabold">$ {totalPrice}</span>
        )}
      </div>

      <CheckoutDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-1 text-gray-400" />
            Products price
          </div>
        }
        value={loading ? <Skeleton className="w-16 rounded-[6px] h-6" /> : `$ ${totalAmount}`}
      />

      <CheckoutDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-1 text-gray-400" />
            Tax
          </div>
        }
        value={loading ? <Skeleton className="w-16 rounded-[6px] h-6" /> : `$ ${taxPrice}`}
      />

      <CheckoutDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-1 text-gray-400" />
            Delivery Price
          </div>
        }
        value={loading ? <Skeleton className="w-16 rounded-[6px] h-6" /> : `$ ${DELIVERY_PRICE}`}
      />

      <Button loading={loading} type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
        Continue to Payment
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
