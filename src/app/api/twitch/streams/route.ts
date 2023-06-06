import { NextResponse } from "next/server";

export async function GET() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
    cache: 'no-store' as RequestCache,
  };

console.log("-----fetch(https://api.twitch.tv/helix/streams?language=fr avec options : ", options);

  try {
    const res = await fetch("https://api.twitch.tv/helix/streams?language=fr", options);

//console.log("---RES : ", res);    

    const twitch = await res.json();

//console.log("---twitch : RES.json() : ", twitch); 

    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}
