import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { Plus } from "lucide-react";
import { useState } from "react";

function MenuItemOptions() {
  const [size, setSize] = useState("");
  const [thicknes, setThicknes] = useState("");

  return (
    <div className="px-4">
      <ToggleGroup
        type="single"
        value={size}
        onValueChange={(value) => {
          if (value) setSize(value);
        }}
        className="border-t-2 flex flex-col gap-2 py-2"
      >
        <h3 className="font-semibold">Wybierz rozmiar</h3>
        <div className="flex justify-between items-center">
          <p>S: 32 cm</p>
          <div className="flex items-center gap-3">
            <span className="text-red-800">24 zł</span>
            <ToggleGroupItem
              value="S"
              aria-label="Toggle small size"
              className="bg-gray-200 text-black data-[state=on]:bg-black data-[state=on]:text-white rounded p-1"
            >
              <Plus />
            </ToggleGroupItem>
          </div>
        </div>

        <div className="flex justify-between">
          <p>L: 45 cm</p>
          <div className="flex items-center gap-3">
            <span className="text-red-800">32 zł</span>
            <ToggleGroupItem
              value="L"
              aria-label="Toggle large size"
              className="bg-gray-200 text-black data-[state=on]:bg-black data-[state=on]:text-white rounded p-1"
            >
              <Plus />
            </ToggleGroupItem>
          </div>
        </div>
      </ToggleGroup>

      <ToggleGroup
        type="single"
        value={thicknes}
        onValueChange={(value) => {
          if (value) setThicknes(value);
        }}
        className="border-t-2 flex flex-col gap-2 py-2"
      >
        <h3 className="font-semibold">Wybierz ciasto</h3>
        <div className="flex justify-between items-center">
          <p>Cienkie</p>
          <div className="flex items-center gap-3">
            <ToggleGroupItem
              value="thin"
              aria-label="Toggle small size"
              className="bg-gray-200 text-black data-[state=on]:bg-black data-[state=on]:text-white rounded p-1"
            >
              <Plus />
            </ToggleGroupItem>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p>Grube</p>
          <div className="flex items-center gap-3">
            <span className="text-red-800">4 zł</span>
            <ToggleGroupItem
              value="thick"
              aria-label="Toggle large size"
              className="bg-gray-200 text-black data-[state=on]:bg-black data-[state=on]:text-white rounded p-1"
            >
              <Plus />
            </ToggleGroupItem>
          </div>
        </div>
      </ToggleGroup>
    </div>
  );
}

export default MenuItemOptions;
