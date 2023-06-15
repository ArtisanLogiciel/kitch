"use client"

import { useRouter } from "next/navigation";

// Types
import { GameParamsProps } from "@/types/props";

export default function Filters({ params }: GameParamsProps) {
  const router = useRouter();
  
  const types = {
    all: { label: "Toutes les vidéos", value: "all" },
    archive: { label: "Diffusions précédentes", value: "archive" },
    highlight: { label: "Temps forts", value: "highlight" },
    upload: { label: "Vidéos mises en ligne", value: "upload" },
  };

  return (
    <select
      className="bg-[#ebebeb] p-2 rounded cursor-pointer"
      defaultValue={"all"}
      onChange={(e) => router.push(`/directory/game/${params.game}/videos/${e.target.value}`)}
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
