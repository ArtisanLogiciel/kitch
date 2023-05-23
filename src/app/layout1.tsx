'use client'
import { resolve } from 'path'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clone TWITCH',   // Titre onglet
  description: 'Projet de groupe React/Next JS : Clone de Twitch',
}

const TWITCH_OAUTH_URL = 'https://id.twitch.tv/oauth2/authorize'
const CLIENT_ID = 'r8qdu1nlfcd0jqgdq2yhyp31pdkiu0'
const REDIRECT_URI = 'http://localhost:3000/'
const RESPONSE_TYPE = 'token'
//const SCOPES = 'bits:read channel:read:hype_train channel:read:redemptions channel:read:subscriptions user:read:email'
// ds l'exemple : scopes = '&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls'

// idem
const SCOPES = [
  'bits:read',
  'channel:read:hype_train',
  'channel:read:redemptions',
  'channel:read:subscriptions',
  'user:read:email'
].join(" ")

// Exemple doc Twitch (https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow)
// "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=r8qdu1nlfcd0jqgdq2yhyp31pdkiu0&redirect_uri=http://localhost:3000/&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671"

// => a généré un token qu'on voit ds l'URL que ça renvoi : mjtowdgk46t0lekwsupz9y0y4meh2b
// => http://localhost:3000/#access_token=mjtowdgk46t0lekwsupz9y0y4meh2b&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671&token_type=bearer

function encodeQueryString(params: object) {
  let items = []
  for (let key in params) {
    let value = encodeURIComponent(params[key])
//console.log('params[key] : ',params[key]);
    items.push(`${key}=${value}`)
  }
  return items.join("&")
}

// location.href AVANT => http://localhost:3000/

function twitchAuthentification() {
  const params = {
    client_id : CLIENT_ID,
    redirect_uri : REDIRECT_URI,
    response_type : RESPONSE_TYPE,
    scope : SCOPES      // !!! Pas besoin ???
  }

  console.log(params);
  // Pr ut location il faut que ce soit un CLIENT => 'use client' en haut !!!
  location.href = `${TWITCH_OAUTH_URL}?${encodeQueryString(params)}`

  console.log('vvv', `TWITCH_OAUTH_URL?encodeQueryString(${params})`);   // => 'https://id.twitch.tv/oauth2/authorize?client_id=r8qdu1nlfcd0jqgdq2yhyp31pdkiu0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token'
}

  //twitchAuthentification()    // tourne en Boucle !!!


// location.hash => les param de l'url (après le hash(#))=> #access_token=y36vjkgw3a0ornu14iilqyzx1dgqvz&scope=&token_type=bearer
//console.log(location);
//console.log(location.hash);

function getUrlQueryStringParams() {
  const items = location.hash.slice(1).split("&")   // on enlève le 1er caract (le #) + on met ds un TABLEAU
  const params = {}

  for (let i in items) {
    let key = decodeURIComponent(items[i].split('=')[0])
    let value = encodeURIComponent(items[i].split('=')[1])

    console.log({key});
    console.log({value});

    params[key] = value
  }
  console.log('PARAMS : ',params);
  return params
}

function twitchIsAuthentificated() {
  const params = getUrlQueryStringParams()
  // console.log(params);
  // console.log(params.access_token);

  if (params.access_token !== undefined) return true
  return false
}

// Transformé methode AVANT en FETCH :
////////////////////////////////////////
// function success() {
//   var data = JSON.parse(this.responseText);
//   console.log(data);
// }

// function error(err) {
//   console.log('Error Occurred :', err);
// }

// var xhr = new XMLHttpRequest();
// xhr.onload = success;
// xhr.onerror = error;
// xhr.open('GET', 'https://api.github.com/users/swapnilbangare');
// xhr.send();

// /////////////////////////////////////////////////////
// fetch('https://api.github.com/users/swapnilbangare')
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log("Something went wrong!", err);
//     });
////////////////////////////////////////


// ==> qd on va sur http://localhost:3000/ => ns redirige directement sur URL avec un TOKEN (qui change à chaque fois) => http://localhost:3000/#access_token=cbyid7fbzrzxlj1z0bzjsu9cxpxbna&scope=&token_type=bearer

// On suit la doc ici : https://dev.twitch.tv/docs/api/get-started/ => Make your first call
//
// On aurait pu faire du ASYNC AWAIT au lieu des PROMESSES

//* AVANT on faisait comme ça (sans le FETCH)
//function makeGetJsonRequest(url, params=null, headers=null) {
  function makeGetJsonRequest(url: string, params: object ={}, headers:object ={}) { // : object ={}
    if (params) {
      url = `${url}?${encodeQueryString(params)}`
      console.log({url});
    }
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          try {
            const responseJson = JSON.parse(xhr.responseText)
            resolve(responseJson)
          } catch (error) {
            reject(error)
          }
        }
      }
      xhr.onerror = reject

      xhr.open("GET", url, true)

      if (headers) {
        for (let header in headers) {
          xhr.setRequestHeader(header, headers[header])
          console.log({header});
          console.log(headers[header]);
        }
      }
      console.log(xhr);    // XMLHttpRequest {readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
      xhr.send()
    })
  }

// Avec FETCH
function fetchGetJsonRequest(url: string, params: object = {}, headers: object = {}) {
  // console.log("PARAMS ds FETCH : ", params);
  // console.log("HEADERS ds FETCH : ", headers);
  // console.log("TOKEN = ", params.access_token);

  if (params) {
    url = `${url}?${encodeQueryString(params)}`
    console.log({ url });
  }

  console.log(headers);

  return fetch(url, {
    headers: headers
  })
    // .then(response => {
    //   console.log(response);
    //   return response.json()
    // })
    // .then(json => {
    //   console.log(json) } ) 
    // .catch(error => console.log("°°°ERREUR°°°", error))   
}

function twitchGetLastFollowers() {

  const params = getUrlQueryStringParams()

  //  SANS LE FETCH
  //   return makeGetJsonRequest("https://api.twitch.tv/helix/users/follows", {
  //     "to_id": "92454370",   // par ex pour le user FLOZZ
  //   }, {
  //     'client-id': CLIENT_ID,
  //     'Authorization': `Bearer ${params.access_token}`
  //   })
  //   .then(result => {
  //     console.log(result);
  //     result.data
  //   })
  //   .catch(error => console.log("ERROR = ",error))

  // AVEC FETCH
  return fetchGetJsonRequest("https://api.twitch.tv/helix/users/follows", {
    "to_id": "92454370",   // par ex pour le user FLOZZ
  }, {
    'client-id': CLIENT_ID,
    'Authorization': `Bearer ${params.access_token}`
  })
   .then(response => {
      console.log(response);
      return response.json()
    })
    .then(json => {
      console.log(json)
      console.log(json.data)
      return json.data
    } ) 
    .catch(error => console.log("°°°ERREUR°°°", error))   
}

/*
let TWITCH_LAST_FOLLOWERS = null

function twitchGetNewFollowers() {
  return twitchGetLastFollowers()
    .then(followers => {
      console.log(followers);
      let newFollowers = []

      if (TWITCH_LAST_FOLLOWERS === null) {
        TWITCH_LAST_FOLLOWERS = followers[0].from_name
        return []
      } else if (followers[0].from_name != TWITCH_LAST_FOLLOWERS) {
        for (let i in followers) {
          if (followers[i].from_name == TWITCH_LAST_FOLLOWERS) {
            break
          }
          newFollowers.push(followers[i])
        }
        TWITCH_LAST_FOLLOWERS = followers[0].from_name
      }
      return newFollowers
    })
}
function displayNewFollower(name) {
  const e_notifFollower = document.getElementById("notif-follower")
  const e_notifFollowerName = document.getElementById("notif-follower-name")

  return Promise.resolve()
    .then(() => {
      console.log("New follower : ", name);
      e_notifFollowerName.innerText = name
      e_notifFollower.classList.add("visible")
    })
    .then(new Promise((resolve, reject) => {
      setTimeout(() => {
        e_notifFollower.classList.remove("visible")
      }, 5 * 1000)
    }))
}
// Avec le TIMEOUT on cherche ttes les 15 sec les new followers
function followersLoop() {
  twitchGetNewFollowers()
    .then(newFollowers => {
      let promise = Promise.resolve()
      for (let i in newFollowers) {
        promise = promise.then(displayNewFollower.bind(null, newFollowers[i].from_name))
      }
      return promise
    })
    .catch(error => console.error(error))
    .then(() => {
      setTimeout(followersLoop, 15 * 1000)
    })
}
*/

function main() {
  console.log('twitchIsAuthentificated = ',twitchIsAuthentificated());
  if (!twitchIsAuthentificated()) {   // pr pas tourner en boucle
    twitchAuthentification()
  }
  
  twitchGetLastFollowers()


  //followersLoop()
  // twitchGetNewFollowers()
  //    .then(followers => console.log(followers))



  
}

window.onload = main()
//console.log(getUrlQueryStringParams());







export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />

        <div id='notif-follower'>
          <div id='notif-follower-text'>
            <p></p>
            {/* <span id='notif-follower-name'>TRUC</span> vient de suivre la chaine ! */}
          </div>

        </div>

        {children}
      </body>
    </html>
  )
}
