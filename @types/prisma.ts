import { Ingredient, Product, ProductVariation } from "@prisma/client";

export type ProductWithRelations = Product & {
  variations: ProductVariation[];
  ingredients: Ingredient[];
};
