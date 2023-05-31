import { NextResponse } from "next/server";

export async function POST() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.DB_CLIENT,
      client_secret: process.env.DB_KEY_SECRET,
      grant_type: "client_credentials",
    }),
  };
  const res = await fetch("https://id.twitch.tv/oauth2/token", options);

  const twitch = await res.json();
  return NextResponse.json(twitch);

}
