import { type JSX } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Pizza, Search, Heart } from "lucide-react";

function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 z-100 flex w-full items-center justify-between bg-gray-200 px-6 py-3 shadow-md">
      <div className="flex items-start space-x-3">
        <Pizza className="h-9 w-9" />
        <div className="flex flex-col gap-0">
          <span className="text-sm">Pizzeria</span>
          <span className="text-lg/2 font-bold">CHATKA</span>
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button
              variant="secondary"
              size="icon"
              className="cursor-pointer"
              aria-label="Search"
            >
              <Search />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="secondary"
              size="icon"
              className="cursor-pointer"
              aria-label="Favorites"
            >
              <Heart />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;
