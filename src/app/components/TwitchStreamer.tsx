"use client";
import { type } from "os";
import { useEffect, useState } from "react";

type TwitchStreamerProps = {
  streamerName: string;
};
const TwitchStreamer = ({ streamerName }: TwitchStreamerProps) => {
  const [streamerData, setStreamerData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.twitch.tv/helix/users?login=${streamerName}`,
          {
            headers: {
              'Client-ID': `${process.env.RESPONSE_TYPE}`, // Remplacez par votre propre Client ID Twitch
              'Authorization': `Bearer ${process.env.CLIENT_ID}`, // Remplacez par votre propre access token Twitch
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.data.length > 0) {
            const userId = data.data[0].id;
            const streamResponse = await fetch(
              `https://api.twitch.tv/helix/streams?user_id=${userId}`,
              {
                headers: {
                  'Client-ID': `${process.env.RESPONSE_TYPE}`,
                  'Authorization': `Bearer ${process.env.CLIENT_ID}`,
                },
              }
            );

            if (streamResponse.ok) {
              const streamData = await streamResponse.json();
              setStreamerData(streamData.data[0]);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching Twitch data:", error);
      }
    };

    fetchData();
  }, [streamerName]);

  if (!streamerData) {
    return <div>Loading...</div>;
  }

  if (!streamerData) {
    return <div>Streamer not found.</div>;
  }

  const { user_name, title, viewer_count } = streamerData;

  return (
    <div>
      <h2>{user_name}</h2>
      <p>{title}</p>
      <p>Viewers: {viewer_count}</p>
    </div>
  );
};

export default TwitchStreamer;
