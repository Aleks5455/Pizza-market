"use client";

import { CheckoutSidebar, Container, Title } from "../../../../shared/components/shared";
import { useCart } from "../../../../shared/hooks";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutCart } from "../../../../shared/components/shared/checkout/checkoutCart";
import { CheckoutDataInputs } from "../../../../shared/components/shared/checkout/checkoutDataInputs";
import { CheckoutDelivery } from "../../../../shared/components/shared/checkout/checkoutDelivery";
import {
  checkoutFormSchema,
  CheckoutFormType,
} from "../../../../shared/components/shared/checkout/checkout-form-schema";

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  const form = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = (data: CheckoutFormType) => {
    
  }
  const onClickCountButton = (id: number, quantity: number, type: "plus" | "minus") => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold text-[36px] mb-8" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit()}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart items={items} onClickCountButton={onClickCountButton} removeCartItem={removeCartItem} />

              <CheckoutDataInputs />

              <CheckoutDelivery />
            </div>

            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
