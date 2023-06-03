"use client";

import { useParams } from "next/navigation";

import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

// Components


const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function Stream() {
  const params = useParams();

  return (
    
      <div>
        <div>
          <ReactPlayer
            url={`https://www.twitch.tv/${params.idvideos}`}
            className="react-player"
            controls
          />
          Chemin videos/ IdVIdeos
        </div>
      </div>

  );
}
