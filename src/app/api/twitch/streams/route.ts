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
<<<<<<< HEAD
    const res = await fetch(
      "https://api.twitch.tv/helix/streams?language=fr",
      options
    );
=======
    const res = await fetch("https://api.twitch.tv/helix/streams?language=fr", options);
>>>>>>> df09780d0d8b090ee3e474694e443d3da0ff9af8
    const twitch = await res.json();
    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}
