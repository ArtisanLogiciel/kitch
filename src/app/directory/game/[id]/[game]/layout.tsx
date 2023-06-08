import Image from "next/image";

// Types
import { API, API_GAMES } from "@/types/api";

// Utils
import { getImageSized } from "@/utils/getImageSized";
import Tablist from "./TabList";
import { FavBtn } from "./FavBtn";

export async function getGames(game: string) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
  };
  try {
    const res = await fetch(`https://api.twitch.tv/helix/games?name=${game}`, options);
    const twitch = await res.json();
    return twitch?.data;
  } catch (error: any) {
    console.log(error.message);
  }
}

export default async function LayoutGame({ params, children }: { params: { id: string; game: string }, children: React.ReactNode }) {
  const games: API<API_GAMES[]> = await getGames(params.game);

  return (
    games && (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-4">
          <Image
            src={getImageSized(games[0].box_art_url, "150", "200")}
            alt={games[0].name}
            width={150}
            height={200}
            className="float-left shadow-lg"
          />

          <div className="flex flex-col items-center justify-between h-full">
            <h1 className="font-bold text-4xl">{params.game}</h1>

            <FavBtn />

            <Tablist id={params.id} game={params.game} />
          </div>
        </div>

        {children}
      </div>
    )
  );
}
