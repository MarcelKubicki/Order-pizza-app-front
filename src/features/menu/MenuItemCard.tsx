import type React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import type { MenuItem } from "@/types/menu";
import { Drawer } from "@/components/ui/drawer";

import MenuItemCardPreview from "./MenuItemCardPreview";
import MenuItemDrawer from "./MenuItemDrawer";
import { useDispatch } from "react-redux";
import { addItem } from "./orderItemSlice";

type Props = {
  item: MenuItem;
};

type Params = {
  menuItemName: string;
};

function MenuItemCard({ item }: Props): React.JSX.Element {
  const { id, name } = item;
  const { menuItemName } = useParams<Params>();
  const [open, setOpen] = useState<boolean>(() => menuItemName === name);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <MenuItemCardPreview
        item={item}
        onAddClick={() => {
          navigate(`/menu/${name}`);
          dispatch(addItem({ id, name }));
        }}
      />

      <MenuItemDrawer item={item} onClose={() => navigate("/menu")} />
    </Drawer>
  );
}

export default MenuItemCard;
