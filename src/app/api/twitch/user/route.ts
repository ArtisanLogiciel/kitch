import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  const params = request.nextUrl.searchParams;

  const userLogin = params.get('userlogin')

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.DB_CLIENT || "",
      Authorization: `Bearer ${process.env.DB_RESULT_TOKEN}`,
    },
    cache: 'no-store' as RequestCache,
  };

  try {
    const res = await fetch(`https://api.twitch.tv/helix/users?language=fr&login=${userLogin}`, options);

    const twitch = await res.json();

    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}
