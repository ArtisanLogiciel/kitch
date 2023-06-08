"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type LayoutVideoProps = {
  params: { id: string, game: string },
  children: React.ReactNode
}

export default async function LayoutVideo({ params, children }: LayoutVideoProps) {
  const pathname = usePathname();
  const router = useRouter();

  const videoParams = {
    types: {
      all: { label: "All videos", value: "all" },
      archive: { label: "Past broadcasts", value: "archive" },
      highlight: { label: "Highlights", value: "highlight" },
      upload: { label: "Uploads", value: "upload" },
    },
    sort: {
      time: { label: "Time", value: "time" },
      trending: { label: "Trending", value: "trending" },
      views: { label: "Views", value: "views" },
    },
  };
  const { types, sort } = videoParams;

  return (
    <article className="w-full">
      <div className="flex items-center justify-between font-bold">
        <select
          className="bg-[#DEDEE1] p-2 rounded cursor-pointer"
          onChange={(e) =>
            router.push(`/directory/game/${params.id}/${params.game}/videos/${e.target.value}`)
          }
        >
          {Object.keys(types).map((key, index) => {
            return (
              <option key={index} value={types[key as keyof typeof types].value}>
                {types[key as keyof typeof types].label}
              </option>
            );
          })}
        </select>

        <div className="flex items-center gap-4 p-4">
          <p>Sort by</p>

          <select
            className="bg-[#DEDEE1] p-2 rounded cursor-pointer"
            onChange={(e) =>
              router.push(`${pathname}?sort=${e.target.value}`)
            }
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
      </div>

      {children}
    </article>
  );
}