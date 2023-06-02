'use server';

export async function GetUsers(donnes: any) {
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
        const res = await fetch(`https://api.twitch.tv/helix/search/channels?query=${donnes}`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }   
}
export async function GetRecentlyGames() {
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
        const res = await fetch(`https://api.twitch.tv/helix/games?id=512998&id=518144&id=482130375&id=511844&id=747530903&id=55453844`, options)
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
export async function GetStreamGamesOne() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=509658&language=fr`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }   
}
export async function GetStreamGamesTwo() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=21779&language=fr`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }
}
export async function GetStreamGamesThree() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=33214`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }
}
export async function GetCreative() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=509660&language=fr`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }
}
export async function GetCombat() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=55453844&game_id=461067&game_id=504461&game_id=1657670363&language=fr`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }
}
export async function GetPlatformAndGames() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=138585&game_id=488190&game_id=513143&game_id=1743359147&language=fr`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }
}
export async function GetCarSimulation() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=518014&game_id=1705795372&game_id=19554&game_id=313197&language=fr`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }
}
export async function GetSport() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=772421245&game_id=1705795372&game_id=1740873338&game_id=1745202732&game_id=30921&language=fr`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }
}


export async function GetVogue() {
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
        const res = await fetch(`https://api.twitch.tv/helix/streams`, options)
        const twitch = await res.json()
        return twitch?.data

    }catch(error: any){
        console.log(error.message)
    }   
}
export async function LatestGamesStreams(){
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
        return dataStream?.data
    }catch(error: any){
        console.log(error.message)
    }
}

