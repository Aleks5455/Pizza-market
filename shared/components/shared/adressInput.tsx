import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

type Props = {
  onChange?: (value?: string) => void;
};

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions token="096fb20187a84fd67c0d5ca345c76428eb6aea44" onChange={(data) => onChange?.(data?.value)} />
  );
};
