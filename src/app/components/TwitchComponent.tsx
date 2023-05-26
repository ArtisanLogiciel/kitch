"use client";
import { useEffect, useState } from 'react';

const TwitchComponent = () => {
  const [streamData, setStreamData] = useState<any>(null);

  useEffect(() => {
    const fetchStreamData = async () => {
      try {
        const response = await fetch('https://api.twitch.tv/helix/streams', {
          headers: {
            'Client-Id': 'b509riiqf29a0ruvywg3n7y6zgna8k',
            'Authorization': 'Bearer 75esfskoe5hz2pztq0udejle0yev0s'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setStreamData(data);
        } else {
          console.error('Failed to fetch stream data:', response.status, response.statusText);
          console.error(await response.json());
        }
      } catch (error) {
        console.error('Error while fetching stream data:', error);
      }
    };

    fetchStreamData();
  }, []);

  return (
    <div>
      {streamData ? (
        <div>
          <h1>Live Streams</h1>
          <ul>
            {streamData.data.map((stream: any) => (
              <li key={stream.id}>{stream.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TwitchComponent;
