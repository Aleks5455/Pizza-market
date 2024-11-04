type Props = {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
};

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => (
  <div>
    <h1>Заказ #{orderId}</h1>
    <p>
      Pay for order with total amount: $ {totalAmount}. Visit <a href={paymentUrl}>this link</a> to pay.
    </p>
  </div>
);
