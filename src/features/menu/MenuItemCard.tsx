import type React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import type { MenuItem } from "@/types/menu";
import { Drawer } from "@/components/ui/drawer";
// import { useFavourites } from "@/context/FavouritesProvider";

import MenuItemCardPreview from "./MenuItemCardPreview";
import MenuItemDrawer from "./MenuItemDrawer";

type Props = {
  item: MenuItem;
};

type Params = {
  menuItemName: string;
};

function MenuItemCard({ item }: Props): React.JSX.Element {
  const { name } = item;
  const { menuItemName } = useParams<Params>();
  const [open, setOpen] = useState<boolean>(() => menuItemName === name);

  // const { favourites, setFavourites } = useFavourites();
  const navigate = useNavigate();

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <MenuItemCardPreview
        item={item}
        onAddClick={() => navigate(`/menu/${name}`)}
      />

      <MenuItemDrawer item={item} onClose={() => navigate("/menu")} />
    </Drawer>
  );
}

export default MenuItemCard;
