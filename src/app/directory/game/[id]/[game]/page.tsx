// Components
import LiveChannels from "./LiveChannels";

// Types
import { API, API_GAMES } from "@/types/api";

async function getGames(game: string) {
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

type GameProps = {
  params: {
    id: string;
    game: string;
  };
};

export default async function Game({ params }: GameProps) {
  const games: API<API_GAMES[]> = await getGames(params.id ?? "");
  const number = 123456
  const stringifiedNumber = number?.toString();
  const splittedNumber = stringifiedNumber.split("");
  console.log("stringifiedNumber", stringifiedNumber);
  console.log("splittedNumber", splittedNumber);
  console.log("length", stringifiedNumber.length);

  return (
    games && (
      <div className="flex flex-col items-center justify-center w-full">
        {/* @ts-expect-error Async Server Component */}
        <LiveChannels id={params.id} />
      </div>
    )
  );
}