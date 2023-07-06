"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Hooks
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

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
  route?: string;
};

export function Cards({ index, data, profile_picture, tags, route = `/${data?.user_login}` }: CardsProps) {
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
    data && (
      <div key={index} className="w-[32%] flex mb-[2%] flex-col items-start justify-start">
        <Thumbnail data={data} route={route} />

        <div className="w-full grid pt-[2%] box-border grid-cols-[15%_85%]">
          <ProfileImage data={user} user={user} />
          <Infos data={data} route={route} tags={tags} />
        </div>
      </div>
    )
  );
}

type ThumbnailProps = {
  data: any;
  route: string;
};

function Thumbnail({ data, route }: ThumbnailProps) {
  const router = useRouter();

return (
  <div className="relative w-full cursor-pointer">
    <Image
      src={getImageSized(data?.thumbnail_url, "320", "180")}
      alt={data.title}
      width={320}
      height={180}
      priority
      onClick={() => router.push(route)}
    />

    <div className="h-[3vh] font-[500] flex items-center justify-center bg-[#eb0400] text-[white] rounded pointer-events-none absolute m-[0.7rem] top-0 left-0">
      <p className="m-[3px]">LIVE</p>
    </div>

    <div className="h-[10%] bg-[black] text-[14px] flex items-center justify-center text-[white] rounded pointer-events-none absolute m-[0.7rem] bottom-0 left-0">
      <p className="m-[3px]">
        {data?.viewer_count &&
          (data?.viewer_count <= 1000 ? data?.viewer_count : getNumber_K_Mode(data?.viewer_count))}
        {data?.view_count &&
          (data?.view_count <= 1000 ? data?.view_count : getNumber_K_Mode(data?.view_count))}{" "}
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
);
}

type ProfileImageProps = {
  data: any;
  user: API<API_USERS[]>;
};

function ProfileImage({ data, user }: ProfileImageProps) {
  return user ? (
    <div className="w-full flex items-start justify-start mt-[2%] cursor-pointer">
      <Image
        src={user[0].profile_image_url}
        alt={data.title}
        width={40}
        height={40}
        priority
        className="rounded-full w-[40px] h-[40px]"
      />
    </div>
  ) : null;
}

type InfosProps = {
  data: any;
  route: string;
  tags?: boolean;
};

function Infos({ data, route, tags }: InfosProps) {
  const sortQueryParams = useGetQueryParams("sort");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full flex items-start justify-start mt-[2%] flex-col">
      <h3
        className="w-full text-[14px] font-[600] cursor-pointer hover:text-purple-600"
        onClick={() => router.push(route)}
      >
        {data?.title.length <= 33 ? data?.title : data?.title.substring(0, 33) + "..."}
      </h3>

      <Link
        href={`/${data.user_name ?? data.broadcaster_name}`}
        className="w-full text-[13px] text-[#53535F] hover:text-purple-600"
      >
        {data?.user_name ?? data.broadcaster_name}
      </Link>

      <Link
        href={`/directory/game/${data.game_name}`}
        className="w-full text-[13px] text-[#53535F] hover:text-purple-600"
      >
        {data?.game_name}
      </Link>

      {data.creator_name && (
        <Link
          href={`/${data.creator_name}`}
          className="w-full text-[13px] text-[#53535F] hover:text-purple-600"
        >
          Clip créé par {data.creator_name}
        </Link>
      )}

      {tags && (
        <div className="w-full flex justify-start flex-wrap items-center flex-row font-medium text-[rgba(0,0,0,0.75)]">
          {data?.tags?.map((item: any, index: number) =>
            index < 4 ? (
              <p
                key={index}
                className="bg-[#e3e3e3] text-[12px] mr-[2%] px-3 mb-[1%] rounded-xl cursor-pointer hover:bg-[#dadada]"
                onClick={() =>
                  router.push(
                    `${pathname}?${
                      sortQueryParams === "" ? "" : `sort=${sortQueryParams}&`
                    }tag=${item}`
                  )
                }
              >
                {item}
              </p>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}