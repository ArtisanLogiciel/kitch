const getToken = (url2) => {
    const options = {
        url: url2,
        json: true,
        body: {
            client_id: process.env.ID_CLIENT,
            client_secret: process.env.KEY_SECRET,
            grant_type: 'client_credentials',
        }
    };
    request.post(options, (err, res, body) => {
        if(err){
            return console.log(err)
        }
        console.log(`Status : ${res.statusCode}`)
        if(res.ok){
            return res.body.access_token
        } 
        console.log(res.body.access_token)
    })
}

const GetStream =  (url2) => {

    const streamOptions = {
        url : url2,
        method: 'GET',
        hedaers: {
            'Client-Id': process.env.ID_CLIENT,
            'Authorization': ` Bearer 86ltbd575tltppn8la8b3l0sosmsw2`, 
        }

    };
    request.get(streamOptions, (err, res, body) =>{
        if(err){
            return console.log(err)
        }
        console.log(`Status : ${res.statusCode}`)
        console.log(JSON.parse(body))
    })
}

const url = 'https://api.twitch.tv/helix/games'
setTimeout(() => {
    GetStream(url)
},1000)