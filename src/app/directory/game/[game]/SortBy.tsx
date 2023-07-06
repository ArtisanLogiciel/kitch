"use client";

import { usePathname, useRouter } from "next/navigation";

// Hooks
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

export default function SortBy() {
  const pathname = usePathname();
  const router = useRouter();
  const sortQueryParams = useGetQueryParams("sort");
  const tagQueryParams = useGetQueryParams("tag");

  const sorts = {
    relevance: { label: "Recommandées pour vous", value: "RELEVANCE" },
    viewer_count: { label: "Spectateurs (décroissant)", value: "VIEWER_COUNT" },
    viewer_count_asc: { label: "Spectateurs (croissant)", value: "VIEWER_COUNT_ASC" },
    recent: { label: "Débutées récemment", value: "RECENT" },
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <p className="font-bold">Trier par</p>

      <select
        className="bg-white text-gray-600 p-1 rounded border border-black cursor-pointer"
        defaultValue={
          sortQueryParams === null || sortQueryParams === ""
            ? sorts.relevance.value
            : sortQueryParams
        }
        onChange={(e) =>
          router.push(
            `${pathname}?sort=${e.target.value}${
              tagQueryParams === "" ? "" : `&tag=${tagQueryParams}`
            }`
          )
        }
      >
        {Object.keys(sorts).map((sort, index) => {
          return (
            <option key={index} value={sorts[sort as keyof typeof sorts].value}>
              {sorts[sort as keyof typeof sorts].label}
            </option>
          );
        })}
      </select>
    </div>
  );
}