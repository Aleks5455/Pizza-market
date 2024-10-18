import React from "react";
import { WhiteBlock } from "../whiteBlock";
import { Input } from "../../ui";
import { FormInput } from "../forms/formInput";

type Props = {
  className?: string;
};

export const CheckoutDataInputs: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Personal Data" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <Input name="firstName" placeholder="Name" className="text-base" />
        <Input name="lastName" placeholder="Last Name" className="text-base" />
        <Input name="email" placeholder="Email" className="text-base" />
        <FormInput name="phone" placeholder="Phone" className="text-base" />
      </div>
    </WhiteBlock>
  );
};
