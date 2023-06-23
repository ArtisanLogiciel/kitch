"use client";

import { useParams } from "next/navigation";

import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";

// Components
// import { MainAppBar } from "../../Components/MainAppBar";

//import NavigLive from "../../Components/NaviguationLive";

import Channel from "@/Components/Channel";
import Chat from "@/Components/Chat";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function Stream() {
  const params = useParams();

  console.log("********([userLogin]/page.tsx) => params : ", params);

  const userLogin = params.userLogin;

  console.log(
    "---2-([userLogin]/page.tsx) Au clic sur 1 chaine (<Link href={`/${channelName?.user_login}`}) : ",
    userLogin
  );

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
              url={`https://www.twitch.tv/${params.idvideos}`}
              className="react-player"
              controls
            />
            Chemin videos/ IdVIdeos
          </div>
        </div>
      )}
    </>
  );
}
