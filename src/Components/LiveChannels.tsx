"use client";


import Link from "next/link";
import * as React from "react";
// Components
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Cards } from "./Cards";
// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";


export async function LiveChannels() {
  //const router = useRouter();
  const [ButtonCHLive, setButtonCHLive] = React.useState<any>(true)
  const [liveChannels, setLiveChannels] = React.useState<API<API_STREAMS[]>>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setLiveChannels(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-[600] m-2">
        <Link
          href="/"
          className="text-[#5c16c5] text-[18px] font-[550] hover:text-[#9147ff] hover:underline"
        >
          Chaînes lives{" "}
        </Link>
        qui pourraient vous plaire
      </h2>
      <div className="w-full flex flex-row flex-wrap items-center justify-between mb-[2%]">
        {!liveChannels ? (
          <div>chargement...</div>
        ) : (
          liveChannels?.map((element, index) => <Cards key={index} data={element} />)
        )}
        {ButtonCHLive ? (
          <div className=" w-full flex items-center justify-evenly">
            <div className="w-[40%]">
              <div className="h-[0.5px] w-full bg-[black]"></div>
            </div>
            <div className="w-[15%] flex items-center justify-center hover:text-[black] hover:bg-[#efeff1] hover:rounded ">
              <button
                className=" text-[14px] text-[#5c16c5] font-[550]"
                onClick={() => setButtonCHLive(false)}
              >
                Afficher plus
              </button>
              <KeyboardArrowDownIcon sx={{ color: "#5c16c5" }} id="test" />
            </div>
            <div className="w-[40%]">
              <div className="h-[0.5px] w-full bg-[black]"></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );}
