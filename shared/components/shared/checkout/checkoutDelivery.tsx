import React from "react";
import { WhiteBlock } from "../whiteBlock";
import { FormTextarea } from "../forms/formTextarea";
import { AdressInput } from "../adressInput";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "../errorText";

type Props = {
  className?: string;
};

export const CheckoutDelivery: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Delivery Adress" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          render={({ field, fieldState }) => (
            <>
              <AdressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </>
          )}
          name="address"
        />

        <FormTextarea name="comment" rows={5} className="text-base" placeholder="Comment to order" />
      </div>
    </WhiteBlock>
  );
};
