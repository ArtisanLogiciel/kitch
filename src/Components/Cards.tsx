"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";
import Image from "next/image";

export type CardsProps = {
  data: any;
  tags?: boolean;
};

export function Cards({ data, tags }: CardsProps) {
  const router = useRouter();

  return (
    data && (
      <div
        className="hover:cursor-pointer w-[32%] flex mb-[2%] flex-col items-start justify-start"
        onClick={() => router.push(`/${data?.user_login}`)}
      >
        <div className="relative w-full">
          <Image
            src={getImageSized(data.thumbnail_url, "320", "180")}
            alt={data.title}
            width={320}
            height={180}
            className="w-full h-full"
          />

          <div className="h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0">
            <p className="m-[3px]">LIVE</p>
          </div>

          <div className="h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0">
            <p className="m-[3px]">
              {data?.viewer_count <= 1000
                ? data?.viewer_count
                : getNumber_K_Mode(data?.viewer_count)}{" "}
              spectateurs
            </p>
          </div>
        </div>

        <div className="w-full grid pt-[2%] box-border grid-cols-[15%_85%]">
          <div className="w-full flex items-start justify-start mt-[2%]">
            <Image
              src={getImageSized(data?.thumbnail_url, "40", "40")}
              alt={data.title}
              width={40}
              height={40}
              className="rounded-full w-[40px] h-[40px]"
            />
          </div>

          <div className="w-full flex items-start justify-start mt-[2%] flex-col">
            <h3 className="w-full text-[14px] font-[600] whitespace-nowrap">
              {data?.title.length <= 33 ? data?.title : data?.title.substring(0, 33) + "..."}
            </h3>
            <p className="w-full text-[13px] text-[#53535F]">{data?.user_name}</p>
            <p className="w-full text-[13px] text-[#53535F]">{data?.game_name}</p>

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