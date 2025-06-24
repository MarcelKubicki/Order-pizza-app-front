import React, { useState } from "react";
import ExtrasGroup from "./ExtrasGroup";
import ExtraItem from "./ExtraItem";
import { useExtras } from "./useExtras";
import ExtraGroupSkeleton from "./ExtraGroupSkeleton";

type Props = {
  price: {
    priceSmall: number;
    priceLarge: number;
  };
};

function MenuItemOptions({ price }: Props): React.JSX.Element {
  const [size, setSize] = useState<string>("");
  const [thicknes, setThicknes] = useState<string>("");
  const { isLoading, data, error } = useExtras();

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
      <ExtrasGroup
        groupName="Wybierz rozmiar"
        optionValue={size}
        setOptionValue={setSize}
      >
        <ExtraItem value="S: 32cm" price={price.priceSmall} />
        <ExtraItem value="L: 45cm" price={price.priceLarge} />
      </ExtrasGroup>

      <ExtrasGroup
        groupName="Wybierz ciasto"
        optionValue={thicknes}
        setOptionValue={setThicknes}
      >
        <ExtraItem value="Cienkie" />
        <ExtraItem value="Grube" price={data?.thickDoughPrice} />
      </ExtrasGroup>

      <div className="flex flex-col gap-2 border-t-2 py-2">
        <h3 className="font-semibold">Dobierz sosy</h3>
        {data?.sauces?.map((sauce) => (
          <ExtraItem quantityCounter value={sauce.name} price={sauce.price} />
        ))}
      </div>
    </div>
  );
}

export default MenuItemOptions;
