"use client";

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";

// Types
import { API, API_CATEGORIES } from "@/types/api";

// Utils
import { getCategories } from "@/utils/api";
import { getImageSized } from "@/utils/getImageSized";

export async function Categories() {

  const [categories, setCategories] = useState<API<API_CATEGORIES[]>>(null);

  useEffect(() => {
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
    <div className='mb-[2%] w-full h-[50vh]'>
          <h2 className='text-lg font-medium m-2'>
            <Link href={`/directory`} className='text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline'>Catégories </Link>
                qui pourrait vous plaires
            </h2>                            
      <div className="w-full flex justify-start items-start mr-[1%]">
        {categories.map((categorie, index) => {
          return (
            index < 6 && (
              <div key={index} className="flex items-start justify-start flex-col h-[100%] w-[155px] mr-[1%] relative">
                <Image
                  src={getImageSized(categorie.box_art_url, "204", "273")}
                  alt={categorie.name}
                  width={204}
                  height={273}
                />
                <h2 className='font-semibold text-[15px] w-full mt-[1%]'>{categorie?.name}</h2>
              </div>
            )
          );
        })}
      </div>
    </div>
  ) : null;
}
