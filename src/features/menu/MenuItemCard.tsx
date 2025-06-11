import type React from "react";
import { ChevronLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MenuItem } from "@/types/menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import MenuItemOptions from "./MenuItemOptions";

interface Props {
  item: MenuItem;
}

const MenuItemCard: React.FC<Props> = ({ item }) => {
  const { name, img, ingredients, priceSmall, priceLarge } = item;
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Card className="flex flex-row py-4 gap-0 rounded-none">
        <div className="flex-1">
          <img className="flex-1" src={img} alt={name} />
        </div>
        <div className="flex-1 flex flex-col justify-between gap-2">
          <CardHeader className="pl-0 gap-0">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription>
              {ingredients.reduce((acc, curr) => acc + `${curr}, `, "")}
            </CardDescription>
          </CardHeader>
          <div>
            <CardContent className="pl-0 mb-1">
              <p className="text-sm">
                <strong>S:</strong> {priceSmall}zł <strong>L:</strong>{" "}
                {priceLarge}zł
              </p>
            </CardContent>
            <CardFooter className="pl-0 gap-2">
              <Button variant="secondary" size="icon">
                <Heart />
              </Button>
              <DrawerTrigger asChild>
                <Button className="flex-1">+ Dodaj</Button>
              </DrawerTrigger>
            </CardFooter>
          </div>
        </div>
      </Card>

      <DrawerContent className="flex flex-col mt-0">
        <DrawerClose asChild className="ml-4">
          <Button size="icon">
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
          <MenuItemOptions />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuItemCard;
