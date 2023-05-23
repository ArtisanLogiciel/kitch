
'use client'
import React from 'react'

export default function User() {
    const [data, setData] = React.useState([])

    // Valeurs à passer à l'URL 
    const TWITCH_OAUTH_URL = 'https://id.twitch.tv/oauth2/authorize'
    const CLIENT_ID = 'r8qdu1nlfcd0jqgdq2yhyp31pdkiu0'
    const REDIRECT_URI = 'http://localhost:3000/'
    const RESPONSE_TYPE = 'token'
    // Pas besoin des SCOPES !
    //const SCOPES = 'bits:read channel:read:hype_train channel:read:redemptions channel:read:subscriptions user:read:email'
    // ds l'exemple : scopes = '&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls'


    // Exemple doc Twitch (https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow)
    // "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=r8qdu1nlfcd0jqgdq2yhyp31pdkiu0&redirect_uri=http://localhost:3000/&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671"
    // => a généré un token qu'on voit ds l'URL que ça renvoi : mjtowdgk46t0lekwsupz9y0y4meh2b
    // => http://localhost:3000/#access_token=mjtowdgk46t0lekwsupz9y0y4meh2b&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671&token_type=bearer


    // ==> quand on va sur http://localhost:3000/ => nous redirige directement sur :
    // => https://id.twitch.tv/oauth2/authorize?client_id=r8qdu1nlfcd0jqgdq2yhyp31pdkiu0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token
    // => qui renvoie une URL avec un TOKEN (qui change à chaque fois) => http://localhost:3000/#access_token=cbyid7fbzrzxlj1z0bzjsu9cxpxbna&scope=&token_type=bearer


    // On suit la doc ici : https://dev.twitch.tv/docs/api/get-started/ => Make your first call

    // On va utiliser LOCATION.HREF et .HASH pour récupérer le TOKEN :
    // console.log("location.href = URL en ENTIER : ", location.href);    // => http://localhost:3000/#access_token=5v4nvyzfrnicpv1nmq71srqae7nba2&scope=bits%3Aread+channel%3Aread%3Ahype_train+channel%3Aread%3Aredemptions+channel%3Aread%3Asubscriptions+user%3Aread%3Aemail&token_type=bearer
    // console.log("location.hash = A PARTIR DU # : ", location.hash);    // => #access_token=5v4nvyzfrnicpv1nmq71srqae7nba2&scope=bits%3Aread+channel%3Aread%3Ahype_train+channel%3Aread%3Aredemptions+channel%3Aread%3Asubscriptions+user%3Aread%3Aemail&token_type=bearer


    // FONCTION qui ajoute les param les 1 à la suite des autres avec & :
    // Ex ici => client_id=r8qdu1nlfcd0jqgdq2yhyp31pdkiu0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token
    function encodeQueryString(params: object) {
        let items = []
        for (let key in params) {
            let value = encodeURIComponent(params[key])
            items.push(`${key}=${value}`)
        }
        return items.join("&")
    }

    // FONCTION qui récupère les PARAMETRES de l'URL (les mets ds un TABLEAU)
    // Ex ici => {access_token: 'uzpeub9f85w8ufv9wrsrwdubnxtuie', scope: '', token_type: 'bearer'}
    function getUrlQueryStringParams() {
        const items = location.hash.slice(1).split("&")   // on enlève le 1er caract (le #) + on met ds un TABLEAU
        const params = {}

        for (let i in items) {
            let key = decodeURIComponent(items[i].split('=')[0])
            let value = encodeURIComponent(items[i].split('=')[1])

            // console.log({ key });
            // console.log({ value });

            params[key] = value
        }
        //console.log('PARAMS : ',params);
        return params
    }

    // FONCTION qui appelle l'API à partir d' l'URL + PARAMETRES + HEADERS
    function fetchGetJsonRequest(url: string, params: object = {}, headers: object = {}) {

        if (params) {
            url = `${url}?${encodeQueryString(params)}`
            //console.log({ url }); // => https://api.twitch.tv/helix/users/follows?to_id=92454370
        }

        //console.log(headers); // => {client-id: 'r8qdu1nlfcd0jqgdq2yhyp31pdkiu0', Authorization: 'Bearer zo130slc418nxopzgbcxl1opty6jp7'}

        return fetch(url, {
            headers: headers
        })
    }

    // FONCTION qui récupère les 20 dernires USERS
    function twitchGetLastFollowers() {
        // On récupère les PARAMETRES de l'URL (on les mets ds un TABLEAU) pr ensuite récupérer le TOKEN
        // => {access_token: 'uzpeub9f85w8ufv9wrsrwdubnxtuie', scope: '', token_type: 'bearer'}
        const params = getUrlQueryStringParams()

        // On exécute cette fonction en passant l'URL, des PARAM et un HEADER (pr le FETCH)
        return fetchGetJsonRequest("https://api.twitch.tv/helix/users/follows", {
            "to_id": "92454370",   // par ex pour le user FLOZZ
        }, {
            'client-id': CLIENT_ID,
            'Authorization': `Bearer ${params.access_token}`
        })            
    }

    // On récupère les PARAMETRES de l'URL (on les mets ds un TABLEAU) pr avoir accès au TOKEN  
    const params = getUrlQueryStringParams()  // => {access_token: 'uzpeub9f85w8ufv9wrsrwdubnxtuie', scope: '', token_type: 'bearer'}

    // Si on est pas AUTHENTIFIé (dc pas de TOKEN ds URL)
    if (params.access_token === undefined) {   // pr pas tourner en boucle

        // AUTHENTIFICATION
        const paramsURL = {
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            response_type: RESPONSE_TYPE,
            //scope : SCOPES      // !!! Pas besoin ???
        }

        // On transforme l'URL (location.href) en : https://id.twitch.tv/oauth2/authorize?client_id=r8qdu1nlfcd0jqgdq2yhyp31pdkiu0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token
        // => Ce qui va renvoyer vers => http://localhost:3000/#access_token=y0ikvayhkeeqauogtlanhx0jxbs6b3&scope=&token_type=bearer
        // Pr ut location il faut que ce soit un CLIENT => 'use client' en haut !!!
        location.href = `${TWITCH_OAUTH_URL}?${encodeQueryString(paramsURL)}`
    }

    React.useEffect(() => {
        // On récupère les followers (20 derniers)
        twitchGetLastFollowers()
        .then(response => {
            //console.log(response);
            return response.json()
        })
        .then(json => {
            console.log(json)
            console.log(json.data)
            setData(json.data)
            return json.data
        })
        .catch(error => console.log("°°°ERREUR°°°", error))
    },[])       // je mets pas la dépendance twitchGetLastFollowers sinon tourne en Boucle !


    console.log("DATA : ", data);
    console.log("data 0 : ",data[0]);

    const lastFollower = data[0].from_name

    return (
        <div>
            {/* Dernier Follower de FLOZZ : {data[0]?.from_name} => ERREUR ! */}
            Dernier Follower de FLOZZ : {lastFollower}
        </div>
    )
}


