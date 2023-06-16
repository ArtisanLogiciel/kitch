"use client";

import { useParams } from "next/navigation";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function Clip() {
  const params = useParams();
  const { userLogin, id } = params;

  return (
    userLogin && id && (
      <div className="ContenuPrincipale">
        <div>
          <ReactPlayer
            url={`https://www.twitch.tv/${userLogin}/clip/${id}`}
            className="react-player"
            controls
          />
        </div>
      </div>
    )
  );
}