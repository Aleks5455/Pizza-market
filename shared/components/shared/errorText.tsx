import { cn } from "../../lib/utils";

type Props = {
  className?: string;
  text: string;
};

export const ErrorText: React.FC<Props> = ({ className, text }) => {
  return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};
