"use client";

import * as React from "react";

import Image from "next/image";
import Link from 'next/link';

import Skeleton from "@mui/material/Skeleton";

// Components

// Types
import { API, API_STREAMS, API_USERS } from "@/types/api";

// Utils
import { getStreams, getUser } from "@/utils/api";
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";

import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'


export default function NavigationLive() {

  const [dataStream, setDataStream] = React.useState<API<API_STREAMS[]>>(null);  

  // On créer cette ref pour pouvoir la modifier dans le useEffect et la récupérer dans le return
  // import * as React from "react";

  const refUserProfileImg = React.useRef<Record<string, string>>({})

  const [error, setError] = React.useState<any>(null);
  const [fullNavLive, setFullNavLive] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setDataStream(data);

        //=> pour chaque STREAM on veut afficher une image (avatar) mais pas celle qu'on a dans l'API STREAM => donc grâce au login on appel l'API USER et on met le login et l'URL dans un obj (le USEREF) qu'on récupère dans le RETURN
        // (Melvynx dit : On n’affiche pas de REF dans le JSX) ???
        if (data) {
          data.map((channelName: API_STREAMS) => {
            async function fetchDataUser() {

              try {
                const dataUser = await getUser(channelName.user_login);

                if (dataUser) {
                  refUserProfileImg.current = {...refUserProfileImg.current, [channelName.user_login]: dataUser[0]?.profile_image_url}              
                }
              } catch (error) {
                setError(error);
              }
            }
            fetchDataUser()
          })
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []); // on ne met pas la dépendance dataStream sinon tourne en boucle !



  // if (dataStream) {
  //   console.log("---------Streamers 1 :-----------");
  //   console.log("---------------", dataStream[0]);
  //   console.log("---------------", dataStream[0].user_login);
  //   console.log("---------------", Date.parse(dataStream[0].started_at));  // c'est un type NUMBER mais quand on le passe au LINK, il devient un type STRING !!!???
  //   // Je voulais mettre une console.log dans le JSX (dans le .map) mais comment ???
  // }


  if (error) {
    return <div> Error : {error.message}</div>;
  }

  return (
    <div className='bg-[#efeff1] fixed w-[19%] h-[100%] z-[900] left-[auto] flex flex-col'>
      {fullNavLive ?
        <div className=' border border-solid border-transparent w-full h-[8%] flex items-center justify-between'>
          <div>
            <h1 className='font-bold mb-1'>Pour vous</h1>
            <h2 className='text-[0.9em] font-bold'>CHAÎNES RECOMMANDÉES</h2>
          </div>
          <BsArrowBarLeft
            size={20}
            className=" justify-self-end cursor-pointer"
            onClick={() => setFullNavLive(!fullNavLive)}
          />
        </div>
        :
        <BsArrowBarRight
          size={20}
          className=" justify-self-end cursor-pointer"
          onClick={() => setFullNavLive(!fullNavLive)}
        />
      }


      <div className=' border-2 border-green-600 w-full h-[90%] flex flex-col'>
        {!dataStream ? (
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"80%"}
            animation="wave"
            style={{ backgroundColor: "#efeff1" }}
          />
        ) : (
          dataStream.map((channelName: API_STREAMS, index: number) => {

            // console.log("888-0", refUserProfileImg);
            // console.log("888-1", refUserProfileImg.current);
            // console.log("888-2", Object.entries(refUserProfileImg.current).length);
            // console.log("888-3", refUserProfileImg.current[channelName.user_login]);
            // console.log("888-4", channelName.thumbnail_url);

            return index > 9 ? null : (
              <Link
                href={{
                  pathname: `/${channelName?.user_login}`,
                  query: {
                    "viewer": `${channelName?.viewer_count}`,
                    "time": Date.parse(`${channelName?.started_at}`),
                  }
                }}
                key={index}            
              >
                {/* <div className="w-[18%] h-full flex items-center justify-center"> */}
                <div className="flex mb-2">
                  {Object.entries(refUserProfileImg.current).length != 0 &&    // Sinon au 1er RENDER SRC = null 
                  <Image
                    //src={getImageSized(channelName.thumbnail_url, "50", "50")}
                    src={refUserProfileImg.current[channelName.user_login]}
                    width={30}
                    height={30}
                    alt={channelName?.user_login}
                    className="rounded-full w-[30px] h-[30px] ml-2"
                  />}
                 
                  {fullNavLive ?
                    //<div className="w-[82%] h-[100%] justify-evenly  flex items-center flex-row flex-nowrap">  
                    <>
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
                    </>
                    :
                    null
                  }
                </div>
              </Link>
            )
          }
          )
        )}
      </div>
    </div>
  );
}
