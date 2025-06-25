import type React from "react";
import { ChevronLeft, Heart } from "lucide-react";

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/types/menu";
import MenuItemOptions from "./MenuItemOptions";
import QuantityCounter from "@/ui/QuantityCounter";
import {
  clearOrderItem,
  decreaseQuantity,
  getQuantity,
  getTotalPrice,
  increaseQuantity,
  isRequiredSelected,
} from "./orderItemSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

type Props = {
  item: MenuItem;
  onClose: () => void;
};

function MenuItemDrawer({ item, onClose }: Props): React.JSX.Element {
  const { name, img, ingredients, priceSmall, priceLarge } = item;

  const quantity = useAppSelector(getQuantity);

  const isRequired = useAppSelector(isRequiredSelected);
  const totalPrice = useAppSelector(getTotalPrice);
  const dispatch = useAppDispatch();

  function cancelOrderItem() {
    onClose();
  }

  return (
    <DrawerContent className="mt-0 flex flex-col">
      <DrawerClose asChild className="ml-4">
        <Button
          size="icon"
          onClick={() => {
            cancelOrderItem();
            dispatch(clearOrderItem());
          }}
        >
          <ChevronLeft />
        </Button>
      </DrawerClose>

      <div className="overflow-y-auto">
        <DrawerHeader>
          <div>
            <img src={img} alt={name} />
          </div>

          <div className="flex justify-between px-4">
            <DrawerTitle className="text-xl">{name}</DrawerTitle>
            <Button variant="secondary" size="icon">
              <Heart />
            </Button>
          </div>

          <DrawerDescription className="px-4 pt-2 text-start">
            {ingredients.reduce((acc, curr) => acc + `${curr}, `, "")}
          </DrawerDescription>
        </DrawerHeader>

        <MenuItemOptions price={{ priceSmall, priceLarge }} />
      </div>
      <DrawerFooter>
        {isRequired ? (
          <div className="flex gap-2">
            <QuantityCounter
              withDelete
              onMinusAction={() => {
                if (quantity === 1) {
                  cancelOrderItem();
                }
                dispatch(decreaseQuantity());
              }}
              onPlusAction={() => dispatch(increaseQuantity())}
              quantity={quantity}
            />
            <Button className="flex-1">
              Dodaj do zamówienia {totalPrice} zł
            </Button>
          </div>
        ) : (
          <p className="text-center font-semibold text-gray-400">
            Wybierz wymagane opcje
          </p>
        )}
      </DrawerFooter>
    </DrawerContent>
  );
}

export default MenuItemDrawer;
