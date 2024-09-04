import { notFound } from "next/navigation";
import { prisma } from "../../../../../../prisma/prisma-client";
import { ChooseModal } from "@/components/shared";

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      variations: true,
    },
  });

  if (!product) {
    return notFound();
  }
  
  return <ChooseModal product={product} />
}
