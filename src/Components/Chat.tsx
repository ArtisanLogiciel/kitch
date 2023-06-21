"use client";

import React from "react";

// Utils

// Icons
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

import { useParams } from "next/navigation";

type ChatProps = {
  activeChat: boolean,
  setActiveChat: React.Dispatch<React.SetStateAction<boolean>>
};

export default function Chat({ activeChat, setActiveChat }: ChatProps) {

  const params = useParams();

  const [error, setError] = React.useState<any>(null);

  return (
    // <div className='bg-[#efeff1] fixed w-[19%] h-[100%] z-[900] top-[9vh] left-[auto] flex flex-col'>
    <div className='border-2 border-solid border-[#ff00bf] fixed h-[100%] flex flex-col self-end pb-[10%] '>
      {activeChat ?
        <BsArrowBarRight
          size={25}
          className=' absolute z-1 top-4 cursor-pointer'
          onClick={() => setActiveChat(!activeChat)}
        />
        :
        < BsArrowBarLeft
          size={25}
          color="white"
          className=' absolute z-1 top-4 right-[13px] cursor-pointer '
          onClick={() => setActiveChat(!activeChat)}
        />
      }
      {/* //</div> */}
      <iframe id="ChatTwittos"
        src={`https://www.twitch.tv/embed/${params.userLogin}/chat?parent=localhost`}
        height={'100%'}
        width={'100%'}
        className="border-2 border-[#d9ff00]"
      >
      </iframe>
    </div>




    // <div>
    // {!activeChat ?
    //   <BsArrowBarLeft
    //     size={25}
    //     className=' absolute z-1 top-4'
    //     onClick={() => setActiveChat(!activeChat)}
    //   />
    //   : null
    // }

    // <div className={activeChat ? 'border-2 border-solid border-[#00d9ff] fixed w-[19%] h-[100%] flex flex-col self-end pb-[10%]' : "hidden"} >
    //   <BsArrowBarRight
    //     size={25}
    //     className=' absolute z-1 top-4'
    //     onClick={() => setActiveChat(!activeChat)}
    //   />


    //   <iframe id="ChatTwittos"
    //     src={`https://www.twitch.tv/embed/${params.userLogin}/chat?parent=localhost`}
    //     height={'100%'}
    //     width={'100%'}
    //     className="border-2 border-[#d9ff00]"
    //   >
    //   </iframe>
    // </div>
    // </div>








  )
}
