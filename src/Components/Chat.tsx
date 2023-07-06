"use client";

import React from "react";

// Icons
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

import { useParams } from "next/navigation";

type ChatProps = {
  activeChat: boolean,
  setActiveChat: React.Dispatch<React.SetStateAction<boolean>>
};

export default function Chat({ activeChat, setActiveChat }: ChatProps) {

  const params = useParams();

  return (
    <div className=' fixed h-[100%] flex flex-col pb-[6%] '>
      {activeChat ?
        <BsArrowBarRight
          size={25}
          className=' absolute z-1 top-4 cursor-pointer'
          onClick={() => setActiveChat(!activeChat)}
        />
        :
        <BsArrowBarLeft
          size={25}
          color="lightblue"
          className=' absolute z-1 top-4 right-[28px] cursor-pointer '
          onClick={() => setActiveChat(!activeChat)}
        />
      }
      <iframe id="ChatTwittos"
        src={`https://www.twitch.tv/embed/${params.userLogin}/chat?parent=localhost`}
        height={'100%'}
        width={'100%'}
      >
      </iframe>
    </div>
  )
}
