import { NextResponse } from "next/server";

export default async function Post() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.RESPONSE_TYPE,
      grant_type: "client_credentials",
    }),
  };
  const res = await fetch("https://id.twitch.tv/oauth2/token", options);

  const twitch = await res.json();
  return NextResponse.json(twitch);
}
