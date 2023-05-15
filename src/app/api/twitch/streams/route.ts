import { NextResponse } from "next/server";


export async function GET(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer odpbr6t68apio584k19pav5obyqu5v`,
          },
    };
    const res = await fetch('https://api.twitch.tv/helix/streams?language=fr', options)

    const twitch = await res.json()
    return NextResponse.json(twitch)
}