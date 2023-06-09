import { NextResponse } from "next/server";

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
        const response = await fetch(`https://api.twitch.tv/helix/streams?game_id=512998&game_id=518144&game_id=482130375&game_id=511844&game_id=747530903&game_id=55453844`, options);
        const dataStream = await response.json();
        return NextResponse.json(dataStream.data);
    }catch(error: any){
        console.log(error.message)
    }
  }