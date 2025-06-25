import type React from "react";
import { Heart } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/types/menu";

type Props = {
  item: MenuItem;
  onAddClick: () => void;
};

function MenuItemCardPreview({ item, onAddClick }: Props): React.JSX.Element {
  const { name, img, ingredients, priceSmall, priceLarge } = item;

  return (
    <Card className="flex flex-row gap-0 rounded-none py-4">
      <div className="flex-1">
        <img className="flex-1" src={img} alt={name} />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2">
        <CardHeader className="gap-0 pl-0">
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription>
            {ingredients.reduce((acc, curr) => acc + `${curr}, `, "")}
          </CardDescription>
        </CardHeader>

        <div>
          <CardContent className="mb-1 pl-0">
            <p className="text-sm">
              <strong>S:</strong> {priceSmall}zł <strong>L:</strong>{" "}
              {priceLarge}zł
            </p>
          </CardContent>

          <CardFooter className="gap-2 pl-0">
            <Button
              variant="secondary"
              size="icon"
              // onClick={() => setFavourites((current) => [...current, id])}
              // className={`${favourites.includes(id) ? "bg-red-700" : ""}`}
            >
              <Heart />
            </Button>

            <DrawerTrigger asChild>
              <Button className="flex-1" onClick={onAddClick}>
                + Dodaj
              </Button>
            </DrawerTrigger>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export default MenuItemCardPreview;
