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
  userLogin: string;
};

export default function Chat({ userLogin }: ChatProps) {
  const params = useParams();
  
  const [dataChat, setDataChat] = React.useState(null);
  // const [dataChat, setDataChat] = React.useState<API<API_USERS[]>>(null);
  const [error, setError] = React.useState<any>(null);



    


  if (dataChat) {
    console.log("---------Info sur le CHAT avec le user_login passé en PROPS :-----------", userLogin);
    console.log(dataChat);
  }

  return (
    // <div className='bg-[#efeff1] fixed w-[19%] h-[100%] z-[900] top-[9vh] left-[auto] flex flex-col'>
    <div className='border-2 border-solid border-[#00d9ff] fixed w-[19%] h-[100%] flex flex-col self-end'>
      <div className='flex justify-center items-center font-bold'>
        <BsArrowBarRight className='mr-2 justify-self-start	' />
        <div className=''>CHAT DU STREAM</div>
        <MdOutlinePeopleAlt className='ml-2 justify-self-end' />
        <iframe id="ChatTwittos"
          src={`https://www.twitch.tv/embed/${params.idvideos}/chat?parent=localhost`}
          height={'100%'}
          width={'100%'}>
        </iframe>  

      </div>

      {/* <iframe src="" frameborder="0"></iframe> */}

     
        <p>Chat</p>
        <p>Chat</p>
        <p>Chat</p>
        <p>Chat</p>
    </div>
  )
}




{/* <iframe id="ChatTwittos"
src={https://www.twitch.tv/embed/${params.idvideos}/chat?parent=localhost}
height={'100%'}
width={'100%'}>
</iframe>  */}