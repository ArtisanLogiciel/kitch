import { NextResponse } from "next/server";
export async function GET() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
  };
  try {
    const res = await fetch("https://api.twitch.tv/helix/games/top", options);
    const twitch = await res.json();
    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}

// https://api.twitch.tv/helix/streams?language=fr
// https://api.twitch.tv/helix/games?id=512998
// https://api.twitch.tv/helix/search/categories
// https://api.twitch.tv/helix/games
// https://api.twitch.tv/helix/games/top
