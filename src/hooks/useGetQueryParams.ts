import { useSearchParams } from "next/navigation";

export function useGetQueryParams(query: string) {
  const queryParams = useSearchParams().get(query);
  return queryParams ?? "";
}