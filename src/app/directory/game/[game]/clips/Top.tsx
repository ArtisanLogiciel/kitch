"use client"

import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from 'react'

export default function Top() {
    const pathname = usePathname();
    const router = useRouter();
    const queryParams = useSearchParams().get("range");

    const tops = {
      day: { label: "24 H", value: "1" },
      week: { label: "7 J", value: "7" },
      month: { label: "30 J", value: "30" },
      all: { label: "TOUT", value: "all" },
    };

  return (
    <div className="flex items-center gap-4 p-4">
      <select
        className="bg-[#ebebeb] p-2 rounded cursor-pointer"
        defaultValue={queryParams === null || queryParams === "" ? "all" : queryParams}
        onChange={(e) => router.push(`${pathname}?range=${e.target.value}`)}
      >
        {Object.keys(tops).map((top, index) => {
          return (
            <option key={index} value={tops[top as keyof typeof tops].value}>
              Top {tops[top as keyof typeof tops].label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
