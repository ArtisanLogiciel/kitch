"use client";

import React from "react";

import { useParams, useRouter, useSearchParams } from "next/navigation";

import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

// Components
import Channel from "@/Components/Channel";
import Chat from "@/Components/Chat";


export default function Stream() {
  const searchParams = useSearchParams();
  const viewer = Number(searchParams.get("viewer"))
  const timestamp = searchParams.get("time")
  const timestampNb = Number(timestamp)

  const timestampNow = Date.parse(new Date().toString())  // car le timestamp est en STRING (pourtant passé en NUMBER dans le LINK) !!!???

  // On calcule le temps écoulé en secondes depuis le début de la vidéo
  const timeSecondes = (timestampNow - timestampNb) / 1000

  const [activeChat, setActiveChat] = React.useState<boolean>(true);

  return (
    <div className={activeChat ? "grid grid-cols-[80%_20%] w-full h-full " : "grid grid-cols-[100%_0%] w-full h-full "} >
        <Channel viewer={viewer} timeSecondes={timeSecondes} />
        <div className={!activeChat ? "ml-5 " : ""}><Chat activeChat={activeChat} setActiveChat={setActiveChat} /></div>
    </div>
   
  );
}
