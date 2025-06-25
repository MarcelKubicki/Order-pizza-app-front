import { ToggleGroup } from "@radix-ui/react-toggle-group";
import type { ReactNode } from "react";

type Props = {
  groupName: string;
  children: ReactNode;
  required?: boolean;
};

function ExtrasGroup({
  groupName,
  children,
  required,
}: Props): React.JSX.Element {
  return (
    <ToggleGroup type="single" className="flex flex-col gap-2 border-t-2 py-2">
      <h3 className="font-semibold">
        {groupName}{" "}
        {required && (
          <span className="rounded-2xl bg-red-600 px-2 py-1 text-xs text-white">
            Wymagane
          </span>
        )}
      </h3>
      {children}
    </ToggleGroup>
  );
}

export default ExtrasGroup;
