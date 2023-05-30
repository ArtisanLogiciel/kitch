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

<<<<<<< HEAD
export async function GET(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer ${process.env.DB_RESULT_TOKEN}`,
          },
    };
    try{
        const res = await fetch(`https://api.twitch.tv/helix/games?id=509658&id=743&id=20596&id=21779&id=516575&id=512998`, options)
        const twitch = await res.json()
        return NextResponse.json(twitch.data)

    }catch(error: any){
        console.log(error.message)
    }
       
}
=======
// https://api.twitch.tv/helix/streams?language=fr
// https://api.twitch.tv/helix/games?id=512998
// https://api.twitch.tv/helix/search/categories
// https://api.twitch.tv/helix/games
// https://api.twitch.tv/helix/games/top
>>>>>>> 40256fd9b89748a7f3ba30195bd02ceee7b5854a
