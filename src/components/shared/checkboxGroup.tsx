"use client";
import React, { useState } from "react";
import { ChecboxProps, FiltrationCheckbox } from "./filtrationCheckbox";
import { Input, Skeleton } from "../ui";

type Item = ChecboxProps;

type Props = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchPlaceholder?: string;
  className?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValues?: string[];
  selected?: Set<string>;
  loading?: boolean;
  name?: string;
};

export const CheckboxGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchPlaceholder = "Find...",
  loading,
  className,
  onClickCheckbox,
  selected,
  name,
  defaultValues,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 mb-4 rounded-md" />
          ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => onSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FiltrationCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endContent={item.endContent}
            checked={selected?.has(item.value)}
            onChecked={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div
          className={showAll ? "border-t border-t-neutral-100 mt-4" : "mt-1"}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "- Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};
