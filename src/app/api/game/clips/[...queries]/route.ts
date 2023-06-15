import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { queries: string[] } }) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
  };

  const game_id = params.queries[0];
  const started_at = params.queries[1] || "all";

  try {
    const res = await fetch(
      `https://api.twitch.tv/helix/clips?game_id=${game_id}${
        started_at === "all" ? "" : `&started_at=${started_at}`
      }`,
      options
    );
    const twitch = await res.json();
    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}