import MenuItemCard from "@/features/menu/MenuItemCard";
import MenuItemCardSkeleton from "@/features/menu/MenuItemCardSkeleton";
import { useMenu } from "@/features/menu/useMenu";
import { H1 } from "@/components/ui/typography";
import type { MenuItem } from "@/types/menu";
import type React from "react";

function Menu(): React.JSX.Element {
  const { isLoading, data, error } = useMenu();

  if (error) return <p>Error occured: {error.message}</p>;

  return (
    <div className="grid">
      <H1 className="mx-auto my-3">MENU</H1>
      {isLoading
        ? [...Array(4)].map((value, index) => (
            <MenuItemCardSkeleton key={index} />
          ))
        : data?.map((item: MenuItem) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
    </div>
  );
}

export default Menu;
