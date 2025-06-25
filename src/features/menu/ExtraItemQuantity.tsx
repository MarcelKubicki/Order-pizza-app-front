import type React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import QuantityCounter from "@/ui/QuantityCounter";
import type { Sauce } from "@/types/extras";
import {
  addSauce,
  getSauceQuantity,
  getTotalSauceQuantity,
  removeSauce,
} from "./orderItemSlice";

type Props = {
  item: Sauce;
};

function ExtraItemQuantity({ item }: Props): React.JSX.Element {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(getSauceQuantity(item.id));
  const totalSauceQuantity = useAppSelector(getTotalSauceQuantity);

  function onPlusAction() {
    if (totalSauceQuantity < 5) dispatch(addSauce(item));
  }

  function onMinusAction() {
    dispatch(removeSauce(item));
  }

  return (
    <div className="flex items-center justify-between">
      <p>{item.name}</p>
      <div className="flex items-center gap-3">
        <span className={quantity > 0 ? "text-red-800" : "text-gray-500"}>
          {quantity > 0 ? item.price * quantity : item.price}{" "}
          {item.price && "zł"}
        </span>
        <QuantityCounter
          quantity={quantity}
          onPlusAction={onPlusAction}
          onMinusAction={onMinusAction}
          disablePlus={!(totalSauceQuantity < 5)}
        />
      </div>
    </div>
  );
}

export default ExtraItemQuantity;
