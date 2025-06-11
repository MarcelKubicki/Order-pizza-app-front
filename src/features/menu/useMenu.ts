import { getMenu } from "@/services/apiMenu";
import { useQuery } from "@tanstack/react-query";

export function useMenu(): object {
  const { isLoading, data, error } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });
  return { isLoading, data, error };
}
