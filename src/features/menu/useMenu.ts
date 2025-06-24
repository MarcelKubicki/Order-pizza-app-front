import { useQuery } from "@tanstack/react-query";

import type { MenuItem } from "@/types/menu";
import { getMenu } from "@/services/apiMenu";

type ReturnObject = {
  isLoading: boolean;
  data: MenuItem[] | undefined;
  error: Error | null;
};

export function useMenu(): ReturnObject {
  const { isLoading, data, error } = useQuery<MenuItem[]>({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  return { isLoading, data, error };
}
