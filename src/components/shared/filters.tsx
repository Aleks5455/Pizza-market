import React from "react";
import { Title } from "./title";
import { FiltrationCheckbox } from "./filtrationCheckbox";
import { Input } from "../ui";
import { DoubleSlider } from "./doubleSlider";

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FiltrationCheckbox text="Customizable" value="1" />
        <FiltrationCheckbox text="New Arrivals" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price Range:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <DoubleSlider min={0} max={1500} step={10} value={[0, 1500]} />
      </div>
    </div>
  );
};