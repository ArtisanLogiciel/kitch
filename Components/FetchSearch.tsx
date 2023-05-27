'use server';
// A utiliser dans les servers components

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
        return twitch.data

    }catch(error: any){
        console.log(error.message)
    }   
}

