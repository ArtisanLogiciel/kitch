// Components
import { Cards } from "@/Components/Cards";

// Utils
import { getApiData } from "@/utils/getApiData";

// Types
import { API, API_GAMES, API_GAME_VIDEOS } from "@/types/api";

type VideosProps = {
  game: string;
  type: VideosType;
  sort: VideosSort;
};
type VideosType = "all" | "archive" | "highlight" | "upload";
type VideosSort = "time" | "trending" | "views";

export default async function Videos({ game, type, sort }: VideosProps) {
  const games: API<API_GAMES[]> = await getApiData({
    type: "games",
    queries: [{ name: "name", data: game }],
  });
  const game_id = games && games[0]?.id;

  const videos: API<API_GAME_VIDEOS[]> = game_id && await getApiData({
    type: "videos",
    queries: [
      {
        name: "language",
        data: "fr",
      },
      {
        name: "game_id",
        data: game_id,
      },
      {
        name: "type",
        data: type ?? "all",
      },
      {
        name: "sort",
        data: sort ?? "time",
      },
    ],
  });

  if (videos?.length === 0) return <div className="text-center">Pas de videos disponibles</div>

  return videos ? (
    <div className="flex flex-wrap gap-4 w-full">
      {videos.map((video, index) => {
        return <Cards key={index} data={video} profile_picture={video.user_id} tags />;
      })}
    </div>
  ) : null;
}