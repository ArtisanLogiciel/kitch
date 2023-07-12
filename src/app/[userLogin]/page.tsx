"use client";

import React from "react";
// import { IntrinsicAttributes } from "react";
// import { UserLoginProps } from "@/types/userLogin";
// import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

// import { default as _ReactPlayer } from "react-player/lazy";
// import { ReactPlayerProps } from "react-player/types/lib";

// Components
import Channel from "@/Components/Channel";
// import Chat from "@/Components/Chat";

// interface StreamProps {
//   viewer: IntrinsicAttributes | UserLoginProps;
//   timeSecondes: number;
// }
export default function Stream() {
  // const searchParams = useSearchParams();
  // const viewer: number = Number(searchParams.get("viewer"))
  // const timestamp = searchParams.get("time")
  // const timestampNb: number = Number(timestamp)
  // const router = useRouter().query.userLogin as string;
  // const timestampNow = Date.parse(new Date().toString())  // car le timestamp est en STRING (pourtant passé en NUMBER dans le LINK) !!!???

  // On calcule le temps écoulé en secondes depuis le début de la vidéo
  // const timeSecondes = (timestampNow - timestampNb) / 1000
  // const router = useRouter();
  // const userLogin = router.query.userLogin as string;
  // const [activeChat, setActiveChat] = React.useState<boolean>(true);
  // console.log("******activeChat******* : ",activeChat);

  return (
    <div className={/*activeChat ? "grid grid-cols-[80%_20%] w-full h-full " : "grid grid-cols-[100%_0%] w-full h-full "*/""} >
        {/* <Channel userLogin={router} /> */}
        <div className={/*!activeChat ? "ml-5 " : ""*/ ""}>{/*<Chat activeChat={activeChat} setActiveChat={setActiveChat} />*/}</div>
    </div>
   
  );
}
