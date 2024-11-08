import { CartItemDTO } from "../../../services/dto/cart.dto";

type Props = {
  orderId: number;
  items: CartItemDTO[];
};

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Thank you for your order!</h1>
    <p>Your order: ${orderId}. Products list:</p>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productVariation.product.name} - ${item.productVariation.price} X {item.quantity}
        </li>
      ))}
    </ul>
  </div>
);
