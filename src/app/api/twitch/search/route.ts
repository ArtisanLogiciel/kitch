import { NextResponse } from "next/server";

export async function GET(){
    // A suprimmer plus tard
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer ${process.env.DB_RESULT_TOKEN}`,
          },
    };
    try{
        const res = await fetch(`https://api.twitch.tv/helix/search/channels?query=zacknani`, options)
        const twitch = await res.json()
        return NextResponse.json(twitch)

    }catch(error: any){
        console.log(error.message)
    }
       
}