// Components
import { Cards } from "@/Components/Cards";

// Utils
import { getApiData } from "@/utils/getApiData";

// Types
import { API, API_GAMES, API_GAME_STREAMS } from "@/types/api";

type GameProps = {
  params: {
    game: string;
  };
};

export default async function Game({ params }: GameProps) {
  const games: API<API_GAMES[]> = await getApiData({
    type: "games",
    queries: [{ name: "name", data: params.game }],
  });
  const game_id = games && games[0]?.id;

  const streams: API<API_GAME_STREAMS[]> =
    game_id &&
    (await getApiData({
      type: "streams",
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
          data: "live",
        }
      ],
    }));

  return (
    streams && (
        <div className="flex flex-wrap gap-4 w-full">
          {streams.map((stream, index) => {
            return <Cards key={index} data={stream} profile_picture={stream.user_id} tags />;
          })}
      </div>
    )
  );
}