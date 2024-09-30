import {
  Container,
  Filters,
  SortingBar,
  Title,
} from "../../../shared/components/shared";
import { ProductsList } from "../../../shared/components/shared/productsList";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "../../../shared/lib/findPizzas";

export default async function Home({ searchParams}: {searchParams: GetSearchParams}) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>

      <SortingBar
        categories={categories.filter((c) => c.products.length > 0)}
      />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
