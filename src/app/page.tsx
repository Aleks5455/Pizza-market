import { Container, Filters, SortingBar, Title } from "@/components/shared";
import { ProductCard } from "@/components/shared/productCard";
import { ProductsList } from "@/components/shared/productsList";
import { it } from "node:test";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>

      <SortingBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsList
                title={"Pizzas"}
                items={[
                  {
                    id: 1,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 2,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 3,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 4,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 5,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                ]}
                categoryId={1}
              />
              
              <ProductsList
                title={"Combos"}
                items={[
                  {
                    id: 1,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 2,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                  {
                    id: 3,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 10.99 }],
                  },
                ]}
                categoryId={2}
              />
              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
