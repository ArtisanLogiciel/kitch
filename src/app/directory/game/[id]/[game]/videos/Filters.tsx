"use client"

import { useRouter } from "next/navigation";

export default function Filters({ params }: { params: { id: string, game: string }}) {
    const router = useRouter();

    const types = {
      all: { label: "All videos", value: "all" },
      archive: { label: "Past broadcasts", value: "archive" },
      highlight: { label: "Highlights", value: "highlight" },
      upload: { label: "Uploads", value: "upload" },
    }

  return (
    <select
      className="bg-[#ebebeb] p-2 rounded cursor-pointer"
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
  );
}
