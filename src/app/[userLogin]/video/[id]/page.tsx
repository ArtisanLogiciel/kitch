"use client";

import Channel from "@/Components/Channel";
import Chat from "@/Components/Chat";
import { useParams } from "next/navigation";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function Video() {
  const params = useParams();
  const { userLogin, id } = params;

  return (
    <>
      {userLogin ? (
        <>
          <Channel userLogin={userLogin} />
          <Chat userLogin={userLogin} />
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