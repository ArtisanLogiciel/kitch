"use client";

import React from "react";

// Utils
import { getChatMessages } from "@/utils/api";

import { BsArrowBarRight } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";

import { useParams } from "next/navigation";
import { API_USERS, API, API_CHAT } from "@/types/api";
import { data } from "autoprefixer";

type ChatProps = {
  userLogin: string
}

export default function Chat({ userLogin }: ChatProps) {

  const params = useParams();

  const [error, setError] = React.useState<any>(null);

  return (
    // <div className='bg-[#efeff1] fixed w-[19%] h-[100%] z-[900] top-[9vh] left-[auto] flex flex-col'>
    <div className='border-2 border-solid border-[#00d9ff] fixed w-[19%] h-[100%] flex flex-col self-end pb-[10%] '>
      <BsArrowBarRight size={25} className=' absolute z-1 top-4'/>
      <iframe id="ChatTwittos"
        src={`https://www.twitch.tv/embed/${params.userLogin}/chat?parent=localhost`}
        height={'100%'}
        width={'100%'}
        className="border-2 border-[#d9ff00]"
      >
      </iframe>
    </div>
  )
}
