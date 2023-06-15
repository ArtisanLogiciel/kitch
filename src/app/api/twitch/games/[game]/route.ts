import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { game: string } }) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`https://api.twitch.tv/helix/games?name=${params.game}`, options);
    const twitch = await res.json();
    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}