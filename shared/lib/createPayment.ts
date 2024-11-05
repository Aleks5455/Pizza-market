import axios from "axios";
import { PaymentData } from "../../@types/yookassa";

type Props = {
  description: string;
  orderId: number;
  amount: number;
};
export async function createPayment(details: Props) {
  const { data } = await axios.post<PaymentData>(
    "https://api.yookassa.ru/v3/payments",
    {
      amount: {
        value: details.amount,
        currency: "RUB",
      },
      capture: true,
      description: details.description,
      metadatadata: {
        odred_id: details.orderId,
      },
      confirmation: {
        type: "redirect",
        return_url: "http://localhost:3000/?paid",
      },
    },
    {
      auth: {
        username: process.env.YOOKASSA_STORE_ID as string,
        password: process.env.YOOKASSA_API_KEY as string,
      },
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": Math.random().toString(36),
      },
    }
  );

  return data;
}
