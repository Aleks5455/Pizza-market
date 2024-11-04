import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name should be at least 3 characters long" })
    .max(20, { message: "First name should be at most 20 characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Last name should be at least 3 characters long" })
    .max(20, { message: "Last name should be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  address: z.string().min(10, { message: "Invalid address" }),
  comment: z.string().optional(),
});

export type CheckoutFormType = z.infer<typeof checkoutFormSchema>;
