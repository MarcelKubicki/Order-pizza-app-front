import type React from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  value: string;
  price?: number;
  onClick: () => void;
  compareValue: string;
};

function ExtraItem({
  value,
  price,
  onClick,
  compareValue,
}: Props): React.JSX.Element {
  const isSelected = value === compareValue;

  return (
    <div className="flex items-center justify-between">
      <p>{value}</p>

      <div className="flex items-center gap-3">
        <span className={isSelected ? "text-red-800" : "text-gray-500"}>
          {price} {price && "zł"}
        </span>

        <Button
          variant="outline"
          size="sm"
          className={`shadow-lg ${isSelected && "bg-black text-white"}`}
          onClick={onClick}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}

export default ExtraItem;
