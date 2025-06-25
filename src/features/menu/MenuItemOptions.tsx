import React from "react";
import ExtrasGroup from "./ExtrasGroup";
import ExtraItem from "./ExtraItem";
import { useExtras } from "./useExtras";
import ExtraGroupSkeleton from "./ExtraGroupSkeleton";

import {
  setDoughThicknes,
  modifySize,
  getSize,
  getDough,
} from "./orderItemSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import ExtraItemQuantity from "./ExtraItemQuantity";

type Props = {
  price: {
    priceSmall: number;
    priceLarge: number;
  };
};

function MenuItemOptions({ price }: Props): React.JSX.Element {
  const { isLoading, data, error } = useExtras();
  const dispatch = useAppDispatch();
  const sizeState = useAppSelector(getSize);
  const doughState = useAppSelector(getDough);

  if (isLoading)
    return (
      <div className="px-4">
        {[...Array(3)].map(() => (
          <ExtraGroupSkeleton />
        ))}
      </div>
    );

  if (error) return <p>Error occured: {error.message}</p>;

  return (
    <div className="px-4">
      <ExtrasGroup groupName="Wybierz rozmiar" required>
        <ExtraItem
          value="S: 32cm"
          price={price.priceSmall}
          onClick={() =>
            dispatch(
              modifySize({ size: "S: 32cm", sizePrice: price.priceSmall }),
            )
          }
          compareValue={sizeState}
        />
        <ExtraItem
          value="L: 45cm"
          price={price.priceLarge}
          onClick={() =>
            dispatch(
              modifySize({ size: "L: 45cm", sizePrice: price.priceLarge }),
            )
          }
          compareValue={sizeState}
        />
      </ExtrasGroup>

      <ExtrasGroup groupName="Wybierz ciasto" required>
        <ExtraItem
          value="Cienkie"
          onClick={() =>
            dispatch(setDoughThicknes({ dough: "Cienkie", doughPrice: 0 }))
          }
          compareValue={doughState}
        />
        <ExtraItem
          value="Grube"
          price={data?.thickDoughPrice}
          onClick={() =>
            dispatch(
              setDoughThicknes({
                dough: "Grube",
                doughPrice: data?.thickDoughPrice,
              }),
            )
          }
          compareValue={doughState}
        />
      </ExtrasGroup>

      <div className="flex flex-col gap-2 border-t-2 py-2">
        <h3 className="font-semibold">Dobierz sosy</h3>
        {data?.sauces?.map((sauce) => (
          <ExtraItemQuantity key={sauce.id} item={sauce} />
        ))}
      </div>
    </div>
  );
}

export default MenuItemOptions;
