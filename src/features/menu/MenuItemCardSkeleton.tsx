import type React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function MenuItemCardSkeleton(): React.JSX.Element {
  return (
    <Card className="flex h-35 flex-row gap-4 rounded-none px-6 py-4">
      <Skeleton className="flex-1" />
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div>
          <Skeleton className="mb-2 h-4" />
          <Skeleton className="h-4" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 flex-1" />
        </div>
      </div>
    </Card>
  );
}

export default MenuItemCardSkeleton;
