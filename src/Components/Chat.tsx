"use client";

import React from "react";

// Utils
import { getChatMessages } from "@/utils/api";
import { getIRCConnexion } from "@/utils/getIRCConnexion";

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
  const [dataChat, setDataChat] = React.useState<API<API_CHAT[]>>();
  const [chat, setChat] = React.useState<string[]>([]);
    const fetchData = async () => {
      const data = await getChatMessages(userLogin);
      setDataChat(data);
      setChat((curr) => {
        if (curr) {
          const newChat = [...curr];
          // newChat.pop();
          newChat.push(String(dataChat));
          return newChat;
        }
        return curr;
      });
    };

    React.useEffect(() => {
      getIRCConnexion();
      setInterval(() => {
        fetchData();
      }, 3000);
    }, []);

    if (dataChat) {
      console.log(
        "---------Info sur le CHAT avec le user_login passé en PROPS :-----------",
        userLogin
      );
      console.log(dataChat);
    }

    return (
      // <div className='bg-[#efeff1] fixed w-[19%] h-[100%] z-[900] top-[9vh] left-[auto] flex flex-col'>
      <div className="border-2 border-solid border-[#00d9ff] fixed w-[19%] h-[100%] flex flex-col self-end">
        <div className="flex justify-center items-center font-bold">
          <BsArrowBarRight className="mr-2 justify-self-start	" />
          <div className="">CHAT DU STREAM</div>
          <MdOutlinePeopleAlt className="ml-2 justify-self-end" />
          <iframe
            id="ChatTwittos"
            src={`https://www.twitch.tv/embed/${params.idvideos}/chat?parent=localhost`}
            height={"100%"}
            width={"100%"}
          ></iframe>
        </div>

        {/* <iframe src="" frameborder="0"></iframe> */}

        <span className="flex-col">
          {chat?.map((msg, key)=>(
            <p key={key}>{msg}</p>
          ))}

          </span>
      </div>
    );
  }

  {
    /* <iframe id="ChatTwittos"
  src={https://www.twitch.tv/embed/${params.idvideos}/chat?parent=localhost}
  height={'100%'}
  width={'100%'}>
  </iframe>  */
  }
