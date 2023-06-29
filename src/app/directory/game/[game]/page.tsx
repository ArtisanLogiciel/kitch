"use client"

import { useEffect, useMemo, useState } from "react";

// Components
import SearchTags from "./SearchTags";
import Filters from "./SortBy";
import { Cards } from "@/Components/Cards";

// Commons
import { URL } from "@/commons/commons";

// Hooks
import { useGetQueryParams } from "@/hooks/useGetQueryParams";

// Types
import { API, API_GAMES, API_GAME_STREAMS } from "@/types/api";

const { BASE, API_TWITCH, API_GAME } = URL;

type GetGameNameProps = {
  name: string;
};

async function getGameName({ name }: GetGameNameProps) {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/games/${name}`, { cache: "no-store" });
    const data: API<API_GAMES[]> = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getGameName: ", error);
  }
}

export type GetStreamsProps = {
  language: string;
  game_id: string;
  type: string;
};

async function getStreams({ language, game_id, type }: GetStreamsProps) {
  try {
    const response = await fetch(`${BASE}/${API_GAME}/liveChannels/${language}/${game_id}/${type}`, {
      cache: "no-store",
    });
    const data: API<API_GAME_STREAMS[]> = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getStreams: ", error);
  }
}

type GameProps = {
  params: {
    game: string;
  };
};

export default function Game({ params }: GameProps) {
  const tagQueryParams = useGetQueryParams("tag");
  const sortQueryParams = useGetQueryParams("sort");

  const [games, setGames] = useState<API<API_GAMES[]>>(null);
  const [streams, setStreams] = useState<API<API_GAME_STREAMS[]>>(null);

  useEffect(() => {
    async function getGames() {
      const response: API<API_GAMES[]> = await getGameName({ name: params.game });
      setGames(response);
    }

    getGames();
  }, [params.game]);

  useEffect(() => {
    async function getVideos() {
      const response: API<API_GAME_STREAMS[]> =
        games &&
        (await getStreams({
          language: "fr",
          game_id: games[0].id,
          type: "live",
        }));

      setStreams(response);
    }

    getVideos();
  }, [params.game, games, tagQueryParams, sortQueryParams]);

  const sortedStreams = streams?.sort((a, b) => {
    switch (sortQueryParams) {
      case "VIEWER_COUNT":
        return b.viewer_count - a.viewer_count;

      case "VIEWER_COUNT_ASC":
        return a.viewer_count - b.viewer_count;

      case "RECENT":
        return new Date(b.started_at).getTime() - new Date(a.started_at).getTime();

      default:
        return a.viewer_count + b.viewer_count;
    }
  });

  const filteredStreams = useMemo(() => {
    return tagQueryParams === ""
      ? sortedStreams
      : sortedStreams?.filter((stream) => {
          return stream.tags.some((tag) =>
            tag.toLowerCase().includes(tagQueryParams.toLowerCase())
          );
        });
  }, [tagQueryParams, sortedStreams]);

  return (
    filteredStreams && (
      <>
        <div className="flex items-center justify-between">
          <SearchTags />
          <Filters />
        </div>

        <div className="flex flex-wrap gap-4 w-full">
          {filteredStreams.map((stream, index) => {
            return <Cards key={index} data={stream} profile_picture={stream.user_id} tags />;
          })}
        </div>
      </>
    )
  );
}