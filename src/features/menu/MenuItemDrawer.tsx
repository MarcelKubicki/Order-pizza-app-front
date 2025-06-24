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

type Props = {
  item: MenuItem;
  onClose: () => void;
};

function MenuItemDrawer({ item, onClose }: Props): React.JSX.Element {
  const { id, name, img, ingredients, priceSmall, priceLarge } = item;

  return (
    <DrawerContent className="mt-0 flex flex-col">
      <DrawerClose asChild className="ml-4">
        <Button size="icon" onClick={onClose}>
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

          <DrawerDescription>
            {ingredients.reduce((acc, curr) => acc + `${curr}, `, "")}
          </DrawerDescription>
        </DrawerHeader>

        <MenuItemOptions price={{ priceSmall, priceLarge }} />
      </div>
      <DrawerFooter>
        <p>Wybierz wymagane opcje</p>
      </DrawerFooter>
    </DrawerContent>
  );
}

export default MenuItemDrawer;
