"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

// Components

// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";

export default function NavigationLive() {
  const router = useRouter();
  const [data, setData] = React.useState<API<API_STREAMS[]>>(null);
  const [error, setError] = React.useState<any>(null);

  const chaine = "Chaînes recommandées";

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div> Error : {error.message}</div>;
  }

  return (
    <div className='bg-[#efeff1] fixed w-[19%] h-[100%] z-[900] top-[9vh] left-[auto] flex flex-col'>
      <div className=' border border-solid border-transparent w-full h-[8%] flex flex-row items-center justify-center'>
        <h2 className='text-[0.9em] font-[400]'>{chaine.toLocaleUpperCase()}</h2>
        <svg
          width="3.5%"
          height="3.5%"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
          className="ScIconSVG-sc-1q25cff-1 dSicFr"
        >
          <g>
            <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
          </g>
        </svg>
      </div>

      <div className='border border-solid border-transparent w-full h-[90%] flex flex-col flex-nowrap'>
        {!data ? (
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"80%"}
            animation="wave"
            style={{ backgroundColor: "#efeff1" }}
          />
        ) : (
          data.map((channelName: any, index: number) =>
            index > 9 ? null : (
              <div className="w-full h-[8%] border border-solid border-transparent flex flex-row items-center justify-center hover:cursor-pointer"
                key={index}
                onClick={() => router.push(`/${channelName?.user_login}`)}
              >
                <div className="w-[18%] h-full flex items-center justify-center"
                >
                  <Image
                    src={getImageSized(channelName.thumbnail_url, "50", "50")}
                    width={30}
                    height={30}
                    alt={channelName?.user_login}
                    className="rounded-full w-[30px] h-[30px]"
                  />
                </div>
                <div className="w-[82%] h-[100%] justify-evenly  flex items-center flex-row flex-nowrap">
                  <div className="w-[75%] h-[100%] flex justify-start items-start flex-col">
                    <p>{channelName?.user_name}</p>
                    <p className="text-[13px] font-[300]">
                      {channelName?.game_name.length > 17
                        ? channelName?.game_name.substring(0, 18) + "..."
                        : channelName?.game_name}
                    </p>
                  </div>
                  <div className=" w-[25%] h-[100%] flex justify-evenly items-center flex-row flex-nowrap">
                    <div className="bg-[#eb0400] w-[8px] h-[8px] rounded-full"></div>
                    <p className="text-[13px] font-[300]">
                      {channelName?.viewer_count < 1000 ? (
                        <>{channelName?.viewer_count}</>
                      ) : (
                        getNumber_K_Mode(channelName?.viewer_count)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
