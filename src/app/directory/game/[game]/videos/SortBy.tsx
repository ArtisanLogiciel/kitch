"use client"

import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SortBy() {
    const pathname = usePathname();
    const router = useRouter();
    const queryParams = useSearchParams().get("sort");

    const sorts = {
      time: { label: "Publiées récemment", value: "time" },
      trending: { label: "Vidéos du moment", value: "trending" },
      views: { label: "Vues (ordre décroissant)", value: "views" },
    };

  return (
    <div className="flex items-center gap-4 p-4">
      <p className="font-bold">Trier par</p>

      <select
        className="bg-[#ebebeb] p-2 rounded cursor-pointer"
        defaultValue={queryParams === null || queryParams === "" ? "time" : queryParams}
        onChange={(e) => router.push(`${pathname}?sort=${e.target.value}`)}
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
