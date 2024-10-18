import { X } from "lucide-react";

type Props = {
  onClick: () => void;
};

export const ClearButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
    >
      <X className="w-5 h-5" />
    </button>
  );
};
