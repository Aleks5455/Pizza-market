import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  onClose?: () => void;
};

export const LoginForm: React.FC<Props> = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return <div>loginForm</div>;
};
