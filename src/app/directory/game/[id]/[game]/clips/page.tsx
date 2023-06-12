import Link from "next/link"; 

// Types
import { API, API_GAMES_CLIPS } from "@/types/api";
import { Cards } from "@/Components/Cards";

export async function getClips(game: string) {
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
      `https://api.twitch.tv/helix/clips?language=fr&game_id=${game}`,
      options
    );
    const twitch = await res.json();
    return twitch?.data;
  } catch (error: any) {
    console.log(error.message);
  }
}

export default async function Clips({ params }: { params: { id: string; game: string } }) {
  const videos: API<API_GAMES_CLIPS[]> = await getClips(params.id ?? "");

  return (
    videos && (
      <div>
        <p>Clips</p>

        <Link
          href={{
            pathname: `/directory/game/${params.id}/${params.game}/clips`,
            query: { range: "hello" },
          }}
        >
          query params HERE
        </Link>

        {videos.map((video, index) => {
          return <Cards key={index} data={video}  />;
        })}
      </div>
    )
  );
}

            // <div key={index}>
            //   <p>id: {video.id}</p>
            //   <p>url: {video.url}</p>
            //   <p>embed_url: {video.embed_url}</p>
            //   <p>broadcaster_id: {video.broadcaster_id}</p>
            //   <p>broadcaster_name: {video.broadcaster_name}</p>
            //   <p>creator_id: {video.creator_id}</p>
            //   <p>creator_name: {video.creator_name}</p>
            //   <p>video_id: {video.video_id}</p>
            //   <p>game_id: {video.game_id}</p>
            //   <p>language: {video.language}</p>
            //   <p>title: {video.title}</p>
            //   <p>view_count: {video.view_count}</p>
            //   <p>created_at: {video.created_at}</p>
            //   <p>thumbnail_url: {video.thumbnail_url}</p>
            //   <p>duration: {video.duration}</p>
            //   <p>vod_offset: {video.vod_offset}</p>
            //   ---------------------------
            // </div>