import { NextResponse } from "next/server";

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
        const res = await fetch(`https://api.twitch.tv/helix/games?id=512998&id=518144&id=482130375&id=511844&id=747530903&id=55453844`, options)
        const twitch = await res.json()
        return NextResponse.json(twitch.data);
  
    }catch(error: any){
        console.log(error.message)
    }   
  }