import React from "react";
import { Checkbox } from "../ui/checkbox";

export type ChecboxProps = {
  text: string;
  value: string;
  endContent?: React.ReactNode;
  onChecked?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
};

export const FiltrationCheckbox: React.FC<ChecboxProps> = ({
  text,
  value,
  endContent,
  onChecked,
  checked,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onChecked}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endContent}
    </div>
  );
};
