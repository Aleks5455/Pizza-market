import { NextRequest, NextResponse } from "next/server";
import { PaymentCallbackData } from "../../../../../@types/yookassa";
import { prisma } from "../../../../../prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { CartItemDTO } from "../../../../../shared/services/dto/cart.dto";
import { sendEmail } from "../../../../../shared/lib/sendEmail";
import { OrderSuccessTemplate } from "../../../../../shared/components/shared/email-templates/orderSuccess";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ message: "Order not found" });
    }

    const isSucceeded = body.object.status === "succeeded";

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    const items = JSON.parse(order?.items as string) as CartItemDTO[];

    if (isSucceeded) {
      await sendEmail(order.email, "Your order has been created", OrderSuccessTemplate({ orderId: order.id, items }));
    } else {
      await sendEmail(order.email, "Your order has been cancelled", OrderSuccessTemplate({ orderId: order.id, items }));
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Something went wrong" });
  }
}
