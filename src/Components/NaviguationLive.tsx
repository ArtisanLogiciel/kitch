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

  const chaine = "Chaînes recommandées";

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setData(data);

        // // Test pour voir les info sur le 1er STREAM
        // if (data) {
        //   const user1 = await getUser(data[0].user_login);
        //   setDataUser(user1)

        //   const channelUser1 = await getChannel(data[0].user_id);
        //   setDataChannel(channelUser1)

        //   const gameUser1 = await getGame(data[0].game_id);
        //   setDataGame(gameUser1)

        //   const followersUser1 = await getFollowers(data[0].user_id);
        //   setDataFollowers(followersUser1)

        //   const teamsUser1 = await getTeams(data[0].user_id);
        //   setDataTeams(teamsUser1)
        // }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  console.log("---1-(Component NavigationLive) On va chercher les STREAMERS : data (=Users/Streamers) = ", data);
  if (data) {
    console.log("---------Streamers 1 :-----------");
    console.log("---------------",data[0]);
    //   console.log("user_login : ",data[0].user_login);    
    // if (dataUser) {
    //   console.log("---------Info sur le USER avec le user_login :-----------", data[0].user_login);
    //   console.log(dataUser[0]);
    // }
    // if (dataChannel) {
    //   console.log("---------Info sur la CHAINE avec le user_id :-----------", data[0].user_id);
    //   console.log(dataChannel[0]);
    // }
    // if (dataGame) {
    //   console.log("---------Info sur le GAME avec le game_id :-----------", data[0].game_id);
    //   console.log(dataGame[0]);
    // }
    // if (dataFollowers) {
    //   console.log("---------Info sur les FOLLOWERS avec le user_id :-----------", data[0].user_id);
    //   console.log(dataFollowers);
    // }
    // if (dataTeams) {
    //   console.log("---------Info sur les TEAMS avec le user_id :-----------", data[0].user_id);
    //   console.log(dataTeams);
    // }
  }



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
              <Link
                href={`/${channelName?.user_login}`}
                className="GridLive"
                key={index}
              >
                <div className="w-[18%] h-full flex items-center justify-center"
                >
                  <Image
                    src={getImageSized(channelName.thumbnail_url, "50", "50")}
                    width={30}
                    height={30}
                    alt="avatar"
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
                        <div>{channelName?.viewer_count}</div>
                      ) : (
                        getNumber_K_Mode(channelName?.viewer_count)
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            )
          )
        )}
      </div>
    </div>
  );
}
