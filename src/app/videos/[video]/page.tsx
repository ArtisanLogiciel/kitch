"use client"

import { useParams } from 'next/navigation';
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function Video() {
  const params = useParams();
  const { video } = params;

  return (
    video && (
      <div className="ContenuPrincipale">
        <div>
          <ReactPlayer
            url={`https://www.twitch.tv/videos/${video}`}
            className="react-player"
            controls
          />
        </div>
      </div>
    )
  );
}
