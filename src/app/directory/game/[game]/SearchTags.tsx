"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

// Commons
import { URL } from "@/commons/commons";

// Hooks
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

// Types
import { API, API_ALL_TAGS } from "@/types/api";

const { BASE, API_TWITCH } = URL;

async function getAllTags() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/tags`, { cache: "no-store" });
    const data: API<API_ALL_TAGS[]> = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getGameName: ", error);
  }
}

export default function SearchTags() {
  const pathname = usePathname();
  const sortQueryParams = useGetQueryParams("sort");
  const tagQueryParams = useGetQueryParams("tag");
  const router = useRouter();

  console.log("sortQueryParams", sortQueryParams);

const inputRef = useRef<HTMLInputElement | null>(null);

  const [tags, setTags] = useState<API<API_ALL_TAGS[]>>(null);
  const [tag, setTag] = useState("");

  const handleTag = useCallback(
    (tag: string) => {
      setTag(tag);
      router.push(
        `${pathname}?${sortQueryParams === "" ? "" : `sort=${sortQueryParams}&`}tag=${tag}`
      );
    },
    [pathname, router, sortQueryParams]
  );

  useEffect(() => {
    async function getTags() {
      const data = await getAllTags();
      setTags(data);
    }

    getTags();
  }, []);

useEffect(() => {
  function handleSearch(ev: globalThis.KeyboardEvent): any {
    if (ev.key === "Enter") {
      handleTag(tag);
    }
  }
  
  const currentInputRef = inputRef.current as HTMLInputElement;

  if (currentInputRef) {
    currentInputRef.addEventListener("keydown", handleSearch);
  }

  return () => {
    if (currentInputRef) {
      currentInputRef.removeEventListener("keydown", handleSearch);
    }
  };
}, [handleTag, tag]);

  return tags ? (
    <div className="relative flex items-center gap-4">
      <input
        type="text"
        placeholder="Rechercher des tags"
        className="bg-[#ebebeb] p-2 rounded"
        onChange={(e) => setTag(e.target.value)}
        ref={inputRef}
      />

      {tags.length > 0 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-full bg-white p-2 border rounded-lg z-10 shadow-lg">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-[#ebebeb]"
                onClick={() => handleTag(tag.tag_id)}
              >
                {/* <p>{tag.localization_names["fr-fr"]}</p> */}
              </div>
            );
          })}
        </div>
      )}

      {tagQueryParams !== "" && (
        <div className="flex flex-wrap items-center gap-1 bg-gray-200 text-gray-600 text-sm font-bold p-2 rounded-2xl">
          <p>{tagQueryParams}</p>
          <button onClick={() => handleTag("")}>x</button>
        </div>
      )}
    </div>
  ) : null;
}
