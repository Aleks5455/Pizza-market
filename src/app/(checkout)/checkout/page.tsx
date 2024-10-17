import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import {
  CheckoutDetails,
  Container,
  Title,
  WhiteBlock,
} from "../../../../shared/components/shared";
import { Button, Input, Textarea } from "../../../../shared/components/ui";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold text-[36px] mb-8" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">12</WhiteBlock>

          <WhiteBlock title="2. Personal Data">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                placeholder="Name"
                className="text-base"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                className="text-base"
              />
              <Input name="email" placeholder="Email" className="text-base" />
              <Input name="phone" placeholder="Phone" className="text-base" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Delivery Adress">
            <div className="flex flex-col gap-5">
              <Input name="adress" placeholder="Adress" className="text-base" />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Comment to order"
              />
            </div>
          </WhiteBlock>
        </div>
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total:</span>
              <span className="text-4xl font-extrabold">$20</span>
            </div>

            <CheckoutDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-1 text-gray-400" />
                  Product price
                </div>
              }
              value="15"
            />

            <CheckoutDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-1 text-gray-400" />
                  Tax
                </div>
              }
              value="2"
            />

            <CheckoutDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-1 text-gray-400" />
                  Delivery Price
                </div>
              }
              value="3"
            />

            <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
              Continue to Payment
              <ArrowRight className="w-5 ml-2"/>
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
