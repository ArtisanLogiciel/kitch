"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Utils
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";
import { getUsers } from "@/utils/api";

// Types
import { API, API_USERS } from "@/types/api";

export type CardsProps = {
  index?: number;
  data: any;
  profile_picture: string;
  tags?: boolean;
};

export function Cards({ data, profile_picture, tags, index }: CardsProps) {
  const router = useRouter();

  const [user, setUser] = useState<API<API_USERS[]>>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getUsers(profile_picture);
        res && setUser(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [data, profile_picture]);

  return (
    data &&
    user && (
      <div
        key={index}
        className="hover:cursor-pointer w-[32%] flex mb-[2%] flex-col items-start justify-start"
        onClick={() => router.push(`/${data?.user_login}`)}
      >
        <div className="relative w-full">
          <Image
            src={getImageSized(data?.thumbnail_url, "320", "180")}
            alt={data.title}
            width={320}
            height={180}
            priority
          />

          <div className="h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0">
            <p className="m-[3px]">LIVE</p>
          </div>

          <div className="h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0">
            <p className="m-[3px]">
              {data?.viewer_count &&
                (data?.viewer_count <= 1000
                  ? data?.viewer_count
                  : getNumber_K_Mode(data?.viewer_count))}
              {data?.view_count &&
                (data?.view_count <= 1000
                  ? data?.view_count
                  : getNumber_K_Mode(data?.view_count))}{" "}
              {data?.viewer_count !== undefined
                ? data?.viewer_count === 1
                  ? "spectateur"
                  : "spectateurs"
                : data?.view_count !== undefined
                ? data?.view_count === 1
                  ? "vue"
                  : "vues"
                : ""}
            </p>
          </div>
        </div>

        <div className="w-full grid pt-[2%] box-border grid-cols-[15%_85%]">
          <div className="w-full flex items-start justify-start mt-[2%]">
            <Image
              src={user[0].profile_image_url}
              alt={data.title}
              width={40}
              height={40}
              priority
              className="rounded-full w-[40px] h-[40px]"
            />
          </div>

          <div className="w-full flex items-start justify-start mt-[2%] flex-col">
            <h3 className="w-full text-[14px] font-[600]">
              {data?.title.length <= 33 ? data?.title : data?.title.substring(0, 33) + "..."}
            </h3>
            <p className="w-full text-[13px] text-[#53535F]">
              {data?.user_name ?? data.broadcaster_name}
            </p>
            <p className="w-full text-[13px] text-[#53535F]">{data?.game_name}</p>
            {data.creator_name && (
              <p className="w-full text-[13px] text-[#53535F]">Clip créé par {data.creator_name}</p>
            )}

            {tags && (
              <div className="w-full flex justify-start flex-wrap items-center flex-row ">
                {data?.tags?.map((liste: any, index: number) =>
                  index < 4 ? (
                    <div
                      key={index}
                      className="bg-[#efeff1] text-[12px] mr-[2%] p-[1%] mb-[1%] rounded"
                    >
                      {liste}
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}