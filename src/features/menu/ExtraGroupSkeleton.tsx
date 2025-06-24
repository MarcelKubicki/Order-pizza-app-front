import type React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ExtraGroupSkeleton(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-3 border-t-2 py-2">
      <Skeleton className="h-5 w-2/3" />

      <div className="flex gap-3">
        <Skeleton className="h-6 flex-1" />
        <Skeleton className="h-6 w-6" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-6 flex-1" />
        <Skeleton className="h-6 w-6" />
      </div>
    </div>
  );
}

export default ExtraGroupSkeleton;
