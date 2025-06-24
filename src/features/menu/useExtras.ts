import { useQuery } from "@tanstack/react-query";

import type { Extras } from "@/types/extras";
import { getExtras } from "@/services/apiMenu";

type ReturnObject = {
  isLoading: boolean;
  data: Extras | undefined;
  error: Error | null;
};

export function useExtras(): ReturnObject {
  const { isLoading, data, error } = useQuery<Extras>({
    queryKey: ["extras"],
    queryFn: getExtras,
  });

  return { isLoading, data, error };
}
