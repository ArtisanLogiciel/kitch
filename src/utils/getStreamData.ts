const STREAM_API_URL = 'https://api.twitch.tv/helix/streams';

// Replace with your own Twitch Client ID and OAuth token
const TWITCH_CLIENT_ID = process.env.DB_CLIENT;
const TWITCH_OAUTH_TOKEN = process.env.DB_RESULT_TOKEN;

export default async function getStreamData(streamId: string) {
  const headers = new Headers({
    'Client-ID': TWITCH_CLIENT_ID || '',
    'Authorization': `Bearer ${TWITCH_OAUTH_TOKEN || ''}`
  });

  const response = await fetch(`${STREAM_API_URL}?user_id=${streamId}`, { headers });
  const data = await response.json();
  const streamData = data.data[0];

  // Extract the data you need from the streamData object
  const streamTitle = streamData.title;
  const streamViewerCount = streamData.viewer_count;

  return { title: streamTitle, viewerCount: streamViewerCount };
}