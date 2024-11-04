import { PizzaSize, PizzaType } from "../../../constants/pizza";
import { CartStateItem } from "../../../lib/getCartDetails";
import { getCartItemDetails } from "../../../lib/getCartItemDetails";
import { CheckoutItem } from "../checkoutItem";
import { CheckoutItemSkeleton } from "../checkoutItemSkeleton";
import { WhiteBlock } from "../whiteBlock";

type Props = {
  items: CartStateItem[];
  loading?: boolean;
  className?: string;
  removeCartItem: (id: number) => void;
  onClickCountButton: (id: number, quantity: number, type: "plus" | "minus") => void;
};

export const CheckoutCart: React.FC<Props> = ({ className, loading, items, onClickCountButton, removeCartItem }) => {
  return (
    <WhiteBlock title="1. Cart" className={className}>
      <div className="flex flex-col gap-5">
        {loading
          ? [...Array(3)].map((_, index) => <CheckoutItemSkeleton key={index} />)
          : items.map((item) => (
              <CheckoutItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                details={getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                disabled={item.disabled}
                onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                onClickRemove={() => removeCartItem(item.id)}
              />
            ))}
      </div>
    </WhiteBlock>
  );
};
