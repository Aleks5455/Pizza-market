import React from "react";
import { WhiteBlock } from "../whiteBlock";
import { Input, Textarea } from "../../ui";

type Props = {
  className?: string;
};

export const CheckoutDelivery: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Delivery Adress" className={className}>
      <div className="flex flex-col gap-5">
        <Input name="adress" placeholder="Adress" className="text-base" />
        <Textarea rows={5} className="text-base" placeholder="Comment to order" />
      </div>
    </WhiteBlock>
  );
};
