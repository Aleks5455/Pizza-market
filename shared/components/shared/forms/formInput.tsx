import { Input } from "../../ui";
import { ClearButton } from "../clearButton";
import { ErrorText } from "../errorText";
import { ReqStar } from "../reqStar";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
};

export const FormInput: React.FC<Props> = ({ name, label, required, className, ...props }) => {
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <ReqStar />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props} />

        <ClearButton onClick={() => ""}/>
      </div>

      <ErrorText text=" Field is required" className="mt-2" />
    </div>
  );
};
