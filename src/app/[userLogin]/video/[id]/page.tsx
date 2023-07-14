"use client";

import Channel from "@/Components/Channel";
import { URL } from "@/commons/commons";
import { API, API_GAME_VIDEOS } from "@/types/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function Video() {
  const params = useParams();
  const { userLogin, id } = params;

  const [video, setVideo] = useState<API<API_GAME_VIDEOS[]>>(null);
  console.log("PPP", video);

  type GetVideosProps = {
  language: string;
  id: string;
  }

useEffect(() => {
  async function getVideos({ language, id }: GetVideosProps) {
    try {
      const response = await fetch(
        `${URL.BASE}/${URL.API_GAME}/video/${language}/${id}`,
        {
          cache: "no-store",
        }
      );
      const data: API<API_GAME_VIDEOS[]> = await response.json();

      return data;
    } catch (error) {
      console.log("Error in getVideos: ", error);
    }
  }

  getVideos({ language: "fr", id }).then((data) => 
    setVideo(data)
  );

}, [id]);

  return (
    <>
      {userLogin ? (
        <>
          {/* {video && <Channel viewer={video[0].view_count} timeSecondes={video[0].duration} />} */}
          {/* <Chat userLogin={userLogin} /> */}
        </>
      ) : (
        <div className="ContenuPrincipale">
          <div>
            <ReactPlayer
              url={`https://www.twitch.tv/videos/${id}`}
              className="react-player"
              controls
            />
          </div>
        </div>
      )}
    </>
  );
}