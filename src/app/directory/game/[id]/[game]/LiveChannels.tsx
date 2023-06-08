// Types
import { API, API_GAME_STREAMS } from "@/types/api";

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

export default async function LiveChannels({ id }: {id: string}) {
  const streams: API<API_GAME_STREAMS[]> = await getLiveChannels(id ?? "");
  console.log("streams", streams);

  return (
    streams && (
      <div className="w-full">
        <p>LiveChannels</p>
        {streams.map((stream, index) => (
          <div key={index}>
            <p>id: {stream.id}</p>
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
            ------------------------
          </div>
        ))}
      </div>
    )
  );
}
