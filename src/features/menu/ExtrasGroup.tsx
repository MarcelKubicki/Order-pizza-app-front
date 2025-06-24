import { ToggleGroup } from "@radix-ui/react-toggle-group";
import type { ReactNode } from "react";

type Props = {
  groupName: string;
  optionValue: string;
  setOptionValue: (value: string) => void;
  children: ReactNode;
};

function ExtrasGroup({
  groupName,
  optionValue,
  setOptionValue,
  children,
}: Props): React.JSX.Element {
  return (
    <ToggleGroup
      type="single"
      value={optionValue}
      onValueChange={(value) => {
        if (value) setOptionValue(value);
      }}
      className="flex flex-col gap-2 border-t-2 py-2"
    >
      <h3 className="font-semibold">{groupName}</h3>
      {children}
    </ToggleGroup>
  );
}

export default ExtrasGroup;
