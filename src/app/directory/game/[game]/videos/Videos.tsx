"use client"

import { useEffect, useState } from "react";

// Components
import { Cards } from "@/Components/Cards";

// Commons
import { URL } from "@/commons/commons";

// Hooks
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

// Types
import { API, API_GAMES, API_GAME_VIDEOS } from "@/types/api";

const { BASE, API_GAME, API_TWITCH } = URL;

type VideosType = "all" | "archive" | "highlight" | "upload";
type VideosSort = "time" | "trending" | "views";

type GetGameNameProps = {
  name: string;
};

async function getGameName({ name }: GetGameNameProps) {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/games/${name}`, {
      cache: "no-store",
    });
    const data: API<API_GAMES[]> = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getGameName: ", error);
  }
}

export type GetVideosProps = {
  language: string;
  game_id: string;
  type: string;
  sort: string;
};

async function getVideos({ language, game_id, type, sort }: GetVideosProps) {
  try {
    const response = await fetch(
      `${BASE}/${API_GAME}/videos/${language}/${game_id}/${type}/${sort}`,
      {
        cache: "no-store",
      }
    );
    const data: API<API_GAME_VIDEOS[]> = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getVideos: ", error);
  }
}

type VideosProps = {
  game: string;
  type: VideosType;
};

export default function Videos({ game, type }: VideosProps) {
  const sortQueryParams = useGetQueryParams("sort") || "time";

  const [games, setGames] = useState<API<API_GAMES[]>>(null);
  const [videos, setVideos] = useState<API<API_GAME_VIDEOS[]>>(null);
  console.log("SO", videos)

  useEffect(() => {
    async function getGames() {
      const response: API<API_GAMES[]> = await getGameName({ name: game });
      setGames(response);
    }

    getGames();
  }, [game, type]);

  useEffect(() => {
    async function getTheVideos() {
      const response: API<API_GAME_VIDEOS[]> = games && await getVideos({
        language: "fr",
        game_id: games[0].id,
        type,
        sort: sortQueryParams,
      });

      setVideos(response);
    }

    getTheVideos();
  }, [game, games, type, sortQueryParams]);
  
  if (videos?.length === 0) return <div className="text-center">Pas de videos disponible</div>

  return videos ? (
    <div className="flex flex-wrap gap-4 w-full">
      {videos.map((video, index) => {
        return (
          <Cards
            key={index}
            data={video}
            profile_picture={video.user_id}
            tags
            route={`/${video.user_name}/video/${video.id}`}
          />
        );
      })}
    </div>
  ) : null;
}