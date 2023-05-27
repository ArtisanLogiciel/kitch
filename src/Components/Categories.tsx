"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// Components
import { ImageSized } from "./UsefulComponents";

// Types
import { API, API_CATEGORIES } from "@/types/api";

// Utils
import { getCategories } from "@/utils/api";

export async function Categories() {
  const router = useRouter();

  const [categories, setCategories] = React.useState<API<API_CATEGORIES[]>>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return categories ? (
    <div className="flex flex-col gap-4 w-full border-solid border-red-500 border-2 mb-10">
      <h2 className="text-2xl font-bold">
        <span className="text-blue-500 cursor-pointer" onClick={() => router.push(`/directory`)}>
          Catégories
        </span>{" "}
        que vous pourriez aimer
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((categorie, index) => {
          return (
            index < 8 && (
              <div key={index} className="flex flex-col items-start gap-2 w-1/5">
                <Image
                  src={ImageSized(categorie.box_art_url, "204", "273")}
                  alt={categorie.name}
                  width={204}
                  height={273}
                />
                id: {categorie.id}
                <br />
                igdb_id: {categorie.igdb_id}
                <p className="text-center">{categorie.name}</p>
              </div>
            )
          );
        })}
      </div>
    </div>
  ) : null;
}
