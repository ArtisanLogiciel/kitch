import { NextResponse } from "next/server";

<<<<<<< HEAD

export async function GET(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer ${process.env.DB_RESULT_TOKEN}`,
          },
          cache: 'no-store' as RequestCache,

    };
    try{
        const res = await fetch('https://api.twitch.tv/helix/streams?language=fr', options)
        const twitch = await res.json()
        return NextResponse.json(twitch.data)

    }catch(error: any){
        console.log(error.message)
    }
       
}
=======
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
  try {
    const res = await fetch("https://api.twitch.tv/helix/streams?language=fr", options);
    const twitch = await res.json();
    return NextResponse.json(twitch.data);
  } catch (error: any) {
    console.log(error.message);
  }
}
>>>>>>> 40256fd9b89748a7f3ba30195bd02ceee7b5854a
