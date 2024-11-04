"use client";

import { CheckoutSidebar, Container, Title } from "../../../../shared/components/shared";
import { useCart } from "../../../../shared/hooks";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutCart } from "../../../../shared/components/shared/checkout/checkoutCart";
import { CheckoutDataInputs } from "../../../../shared/components/shared/checkout/checkoutDataInputs";
import { CheckoutDelivery } from "../../../../shared/components/shared/checkout/checkoutDelivery";
import {
  checkoutFormSchema,
  CheckoutFormType,
} from "../../../../shared/components/shared/checkout/checkout-form-schema";
import toast from "react-hot-toast";
import { createOrder } from "@/app/action";
import { useState } from "react";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = useState(false);
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } = useCart();

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

  const onSubmit: SubmitHandler<CheckoutFormType> = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);

      toast.error("Order created! 📝 Redirect... ", {
        icon: "✅",
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      setSubmitting(false);
      toast.error("Error while creating order", {
        icon: "❌",
      });
    }
  };
  const onClickCountButton = (id: number, quantity: number, type: "plus" | "minus") => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold text-[36px] mb-8" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                loading={loading}
              />

              <CheckoutDataInputs className={loading ? "opacity-40 pointer-events-none" : ""} />

              <CheckoutDelivery className={loading ? "opacity-40 pointer-events-none" : ""} />
            </div>

            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
