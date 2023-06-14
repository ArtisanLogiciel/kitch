// Components
import { Cards } from "@/Components/Cards";

// Types
import { API, API_STREAMS } from "@/types/api";

export async function getLiveChannels(game: string) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
    cache: "no-store" as RequestCache,
  };
  try {
    const res = await fetch(
      `https://api.twitch.tv/helix/streams?language=fr&game_id=${game}&type=live`,
      options
    );
    const twitch = await res.json();
    return twitch?.data;
  } catch (error: any) {
    console.log(error.message);
  }
}

type NewType = {
  id: string;
};

export default async function LiveChannels({ id }: NewType) {
  const streams: API<API_STREAMS[]> = await getLiveChannels(id ?? "");
  console.log("streams LiveChannels", streams ? streams[0] : "no streams");

  return (
    streams && (
      <div className="flex flex-wrap gap-4 w-full">
        {streams.map((stream, index) => {
          return <Cards key={index} data={stream} tags />;
        })}
      </div>
    )
  );
}

            {
              /* <p>id: {stream.id}</p>
            <p>user_id: {stream.game_id}</p>
            <p>user_name: {stream.user_name}</p>
            <p>title: {stream.title}</p>
            <p>viewer_count: {stream.viewer_count}</p>
            <p>started_at: {stream.started_at}</p>
            <p>language: {stream.language}</p>
            <p>thumbnail_url: {stream.thumbnail_url}</p>
            <p>tag_ids: {stream.tag_ids}</p>
            <p>tags: {stream.tags}</p>
            <p>is_mature: {stream.is_mature}</p>
            ------------------------ */
            }