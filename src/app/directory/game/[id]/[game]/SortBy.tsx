"use client"

import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";

export default function SortBy() {
    const pathname = usePathname();
    const router = useRouter();

    const sort = {
      time: { label: "Time", value: "time" },
      trending: { label: "Trending", value: "trending" },
      views: { label: "Views", value: "views" },
    };

  return (
    <div className="flex items-center gap-4 p-4">
      <p>Sort by</p>

      <select
        className="bg-[#ebebeb] p-2 rounded cursor-pointer"
        onChange={(e) => router.push(`${pathname}?sort=${e.target.value}`)}
      >
        {Object.keys(sort).map((key, index) => {
          return (
            <option key={index} value={sort[key as keyof typeof sort].value}>
              {sort[key as keyof typeof sort].label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
