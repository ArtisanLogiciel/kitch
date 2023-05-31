'use server';

export async function GetUsers(donnes: any) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer ${process.env.DB_RESULT_TOKEN}`,
          },
    };
    try{
        const res = await fetch(`https://api.twitch.tv/helix/search/channels?query=${donnes}`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }   
}
export async function fetchStreams(donnes : string){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer ${process.env.DB_RESULT_TOKEN}`,
          },
    };
    try{
        const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${donnes}`, options);
        const dataStream = await response.json();
        return dataStream?.data
    }catch(error: any){
        console.log(error.message)
    }
}
// Renvoie une promise
export async function GetTopGames() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer ${process.env.DB_RESULT_TOKEN}`,
          },
    };
    try{
        const res = await fetch(`https://api.twitch.tv/helix/games/top`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }   
}

