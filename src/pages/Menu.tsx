import { H1 } from "@/components/ui/typography";
import MenuItemCard from "@/features/menu/MenuItemCard";
import { useMenu } from "@/features/menu/useMenu";
import type { MenuItem } from "@/types/menu";

function Menu() {
  const { isLoading, data, error } = useMenu();

  if (isLoading) return null;

  return (
    <div className="grid">
      <H1 className="mx-auto my-3">MENU</H1>
      {data.map((item: MenuItem) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Menu;
