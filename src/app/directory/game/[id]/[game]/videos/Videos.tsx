// Types
import { Cards } from "@/Components/Cards";
import { API, API_GAME_VIDEOS } from "@/types/api";

type getVideosProps = {
  game_id: string;
  type: VideosType;
  sort: VideosSort;
};

export async function getVideos({ game_id = "", type = "all", sort = "time" }: getVideosProps) {
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
      `https://api.twitch.tv/helix/videos?language=fr&game_id=${game_id}&type=${type}&sort=${sort}`,
      options
    );
    const twitch = await res.json();
    return twitch?.data;
  } catch (error: any) {
    console.log(error.message);
  }
}

type VideosProps = {
  game_id: string;
  type: VideosType;
  sort: VideosSort;
};
type VideosType = "all" | "archive" | "highlight" | "upload";
type VideosSort = "time" | "trending" | "views";

export default async function Videos({ game_id, type, sort }: VideosProps) {
  const videos: API<API_GAME_VIDEOS[]> = await getVideos({ game_id, type, sort });

  return videos ? (
    <div>
      <p>Videos</p>
      {videos.map((video, index) => {
        return <Cards key={index} data={video} tags />;
      })}
    </div>
  ) : null;
}

          // <div key={index}>
          //   <p>id: {video.id}</p>
          //   <p>stream_id: {video.stream_id}</p>
          //   <p>user_id: {video.user_id}</p>
          //   <p>user_login: {video.user_login}</p>
          //   <p>user_name: {video.user_name}</p>
          //   <p>title: {video.title}</p>
          //   <p>description: {video.description}</p>
          //   <p>created_at: {video.created_at}</p>
          //   <p>published_at: {video.published_at}</p>
          //   <p>url: {video.url}</p>
          //   <p>thumbnail_url: {video.thumbnail_url}</p>
          //   <p>viewable: {video.viewable}</p>
          //   <p>view_count: {video.view_count}</p>
          //   <p>language: {video.language}</p>
          //   <p>type: {video.type}</p>
          //   <p>duration: {video.duration}</p>
          //   <p>muted_segments: {video.muted_segments}</p>
          //   ------------------------
          // </div>