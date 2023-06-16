import Image from "next/image";

// Components
import Tablist from "./TabList";
import { FavBtn } from "./FavBtn";

// Types
import { API, API_GAMES } from "@/types/api";

// Utils
import { getImageSized } from "@/utils/getImageSized";
import { getApiData } from "@/utils/getApiData";

type LayoutGameProps = {
  params: { id: string; game: string };
  children: React.ReactNode;
};

export default async function LayoutGame({ params, children }: LayoutGameProps) {
  const games: API<API_GAMES[]> = await getApiData({
    type: "games",
    queries: [{ name: "name", data: params.game }],
  });

  return (
    games && (
      <div className="w-full flex flex-col">
        <div className="flex flex-wrap gap-4">
          <Image
            src={getImageSized(games[0].box_art_url, "150", "200")}
            alt={games[0].name}
            width={150}
            height={200}
            className="float-left shadow-lg"
          />

          <div className="flex flex-col items-center justify-center gap-8 h-full">
            <h1 className="font-bold text-4xl">{params.game}</h1>
            <FavBtn />
          </div>
        </div>

        <Tablist game={params.game} />

        {children}
      </div>
    )
  );
}
