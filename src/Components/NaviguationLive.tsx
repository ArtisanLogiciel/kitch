"use client";

import Image from "next/image";
import Link from 'next/link';

//import { useRouter } from "next/navigation";
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

// Components

// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";

 import { BsArrowBarLeft } from 'react-icons/bs'


export default function NavigationLive() {
  //const router = useRouter();

  const [data, setData] = React.useState<API<API_STREAMS[]>>(null);

  // Test pour voir les info
  // const [dataUser, setDataUser] = React.useState<API<API_STREAMS[]>>(null);
  // const [dataChannel, setDataChannel] = React.useState<API<API_STREAMS[]>>(null);
  // const [dataGame, setDataGame] = React.useState<API<API_STREAMS[]>>(null);
  // const [dataFollowers, setDataFollowers] = React.useState<API<API_STREAMS[]>>(null);
  // const [dataTeams, setDataTeams] = React.useState<API<API_STREAMS[]>>(null);


  const [error, setError] = React.useState<any>(null);

  //const chaine = "Chaînes recommandées";

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

  // console.log("---1-(Component NavigationLive) On va chercher les STREAMERS : data (=Users/Streamers) = ", data);
  // if (data) {
  //   console.log("---------Streamers 1 :-----------");
  //   console.log("---------------",data[0]);   
  // }


  if (error) {
    return <div> Error : {error.message}</div>;
  }

  return (
    <div className='bg-[#efeff1] fixed w-[19%] h-[100%] z-[900] left-[auto] flex flex-col'>
      <div className=' border border-solid border-transparent w-full h-[8%] flex items-center justify-between'>
        {/* justify-content: space-between */}
        <div className="">
        {/* <div className=" justify-self-center self-center"> */}
          <h1 className='font-bold mb-1'>Pour vous</h1>
          <h2 className='text-[0.9em] font-bold'>CHAÎNES RECOMMANDÉES</h2>
        </div>
        <BsArrowBarLeft size={20} className=" justify-self-end"/>       
      </div>

      <div className=' border-2 border-green-600 w-full h-[90%] flex flex-col'>
        {!data ? (
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"80%"}
            animation="wave"
            style={{ backgroundColor: "#efeff1" }}
          />
        ) : (
          data.map((channelName: API_STREAMS, index: number) =>
            index > 9 ? null : (
              <Link
                href={`/${channelName?.user_login}`}
                //className="GridLive"
                key={index}
              //onClick={() => router.push(`/${channelName?.user_name}`)}
              >
                {/* <div className="w-[18%] h-full flex items-center justify-center"> */}
                <div className="flex mb-2">
                  <Image
                    src={getImageSized(channelName.thumbnail_url, "50", "50")}
                    width={30}
                    height={30}
                    alt={channelName?.user_login}
                    className="rounded-full w-[30px] h-[30px] ml-2"
                  />
                  {/* </div> */}

                  {/* <div className="w-[82%] h-[100%] justify-evenly  flex items-center flex-row flex-nowrap"> */}
                  <div className="w-[75%] h-[100%] flex justify-start items-start flex-col ml-2">
                    <p className="font-bold">{channelName?.user_name}</p>
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



                {/* <div className="w-[18%] h-full flex items-center justify-center">
                  <Image
                    src={getImageSized(channelName.thumbnail_url, "50", "50")}
                    width={30}
                    height={30}
                    alt={channelName?.user_login}
                    className="rounded-full w-[30px] h-[30px] flex"
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
                    <p className="text-[13px] font-[300] justify-between">
                      {channelName?.viewer_count < 1000 ? (
                        <>{channelName?.viewer_count}</>
                      ) : (
                        getNumber_K_Mode(channelName?.viewer_count)
                      )}
                    </p>
                  </div>
                </div> */}
              </Link>
            )
          )
        )}
      </div>
    </div>
  );
}
