import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { updateCartTotalAmount } from "../../../../../shared/lib/updateCartTotalAmount";

export async function PATCH(req: NextRequest,{ params }: { params: { id: string } } ) {
    
  try {
    const id = Number(params.id);
    const data = (await req.json()) as { quantity: number };

    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ message: "Token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ message: "Cart item not found" });
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Cart error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest,{ params }: { params: { id: string } } ) {
  try {
    const id = Number(params.id)
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ message: "Token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(params.id),
      }
    });

    if (!cartItem) {
      return NextResponse.json({ message: "Cart item not found" });
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(params.id),
      },
    });
    
    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Cart error" }, { status: 500 });
  }
}