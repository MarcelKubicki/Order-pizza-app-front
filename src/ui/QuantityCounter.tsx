import type React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";

type Props = {
  quantity: number;
  onMinusAction: () => void;
  onPlusAction: () => void;
  withDelete?: boolean;
  disablePlus?: boolean;
};

function QuantityCounter({
  quantity,
  withDelete,
  onPlusAction,
  onMinusAction,
  disablePlus = false,
}: Props): React.JSX.Element {
  const defaultMinusButton = (
    <Button
      variant="outline"
      size="sm"
      className="shadow-lg"
      onClick={onMinusAction}
      disabled={quantity === 0}
    >
      <Minus />
    </Button>
  );

  const deleteMinusButton =
    quantity === 1 ? (
      <DrawerClose asChild>
        <Button
          variant="destructive"
          size="sm"
          className="shadow-lg"
          onClick={onMinusAction}
        >
          <Trash2 />
        </Button>
      </DrawerClose>
    ) : (
      <Button
        variant="outline"
        size="sm"
        className="shadow-lg"
        onClick={onMinusAction}
      >
        <Minus />
      </Button>
    );

  return (
    <div className="grid grid-cols-3">
      {withDelete ? deleteMinusButton : defaultMinusButton}

      <span className="flex items-center justify-center font-semibold">
        {quantity}
      </span>

      <Button
        variant="outline"
        size="sm"
        className="shadow-lg"
        onClick={onPlusAction}
        disabled={disablePlus}
      >
        <Plus />
      </Button>
    </div>
  );
}

export default QuantityCounter;
