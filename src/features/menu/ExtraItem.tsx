import type React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { ToggleGroupItem } from "@radix-ui/react-toggle-group";

type Props = {
  value: string;
  price?: number;
  quantityCounter?: boolean;
};

function ExtraItem({
  value,
  price,
  quantityCounter,
}: Props): React.JSX.Element {
  const [quantity, setQuantity] = useState<number>(0);

  if (quantityCounter)
    return (
      <div className="flex items-center justify-between">
        <p>{value}</p>
        <div className="flex items-center gap-3">
          <span className="text-red-800">
            {price} {price && "zł"}
          </span>
          <button
            className="rounded bg-gray-200 p-1 text-black"
            onClick={() => setQuantity((curr) => (curr > 0 ? curr - 1 : curr))}
            disabled={quantity === 0}
          >
            <Minus />
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            className="rounded bg-gray-200 p-1 text-black"
            onClick={() => setQuantity((curr) => (curr < 5 ? curr + 1 : curr))}
          >
            <Plus />
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <p>{value}</p>
      <div className="flex items-center gap-3">
        <span className="text-red-800">
          {price} {price && "zł"}
        </span>
        <ToggleGroupItem
          value={value}
          className="rounded bg-gray-200 p-1 text-black data-[state=on]:bg-black data-[state=on]:text-white"
        >
          <Plus />
        </ToggleGroupItem>
      </div>
    </div>
  );
}

export default ExtraItem;
