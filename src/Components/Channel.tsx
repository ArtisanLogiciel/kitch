"use client";

import React from 'react'

import Image from "next/image";
import Link from 'next/link';

// Components
import { ImageSized } from "./UsefulComponents";

// Types
import { API, API_USERS, API_CHANNELS, API_USERFOLLOWERS } from "@/types/api";

// Utils
import { getUser, getChannel, getFollowers, getTeams } from "@/utils/api";

import { default as _ReactPlayer } from "react-player/lazy";
// Pk pas : import ReactPlayer from 'react-player/lazy'
import { ReactPlayerProps } from "react-player/types/lib";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function Channel({ userLogin }: any) {
    //const [data, setData] = React.useState<API<API_STREAMS[]>>(null);
    const [dataUser, setDataUser] = React.useState<API<API_USERS[]>>(null);
    const [dataChannel, setDataChannel] = React.useState<API<API_CHANNELS[]>>(null);
    // const [dataGame, setDataGame] = React.useState<API<API_STREAMS[]>>(null);
    const [dataFollowers, setDataFollowers] = React.useState<API_USERFOLLOWERS>();      // pas null ? ou {} ???
    // const [dataTeams, setDataTeams] = React.useState<API<API_STREAMS[]>>(null);
    const [error, setError] = React.useState<any>(null);

console.log("---Comp CHANNEL avec PROP : ", userLogin);


    React.useEffect(() => {
        async function fetchData() {
            try {
                const dataUser = await getUser(userLogin);
                setDataUser(dataUser);

//console.log("////////////DATAUSER OK/////////");

                if (dataUser) {              

                  const channelUser1 = await getChannel(dataUser[0].id);
                  setDataChannel(channelUser1)

                //   const gameUser1 = await getGame(data[0].game_id);
                //   setDataGame(gameUser1)

                  const followersUser1 = await getFollowers(dataUser[0].id);
                  setDataFollowers(followersUser1)
console.log("/// FOLLOWERS (followersUser1) : ",followersUser1);
// console.log("///NB FOLLOWERS (followersUser1.total) : ",followersUser1.total);
// console.log("///NB FOLLOWERS (dataFollowers.total): ",dataFollowers.total);
                //   const teamsUser1 = await getTeams(data[0].user_id);
                //   setDataTeams(teamsUser1)
                }
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    console.log("---3-(Comp CHANNEL) On va chercher les info d'un CHAINE : ----------");


    if (dataUser) {
        console.log("---------Info sur le USER avec le user_login passé en PROPS :-----------", userLogin);
        console.log(dataUser[0]);

        if (dataChannel) {
            console.log("---------Info sur la CHAINE avec le id de USER :-----------", dataUser[0].id);
            console.log(dataChannel[0]);
        }
        if (dataFollowers) {
            console.log("---------Info sur les FOLLOWERS avec le user_id :-----------", dataUser[0].id);
            console.log(dataFollowers);
        }
    }
   
    // if (dataGame) {
    //     console.log("---------Info sur le GAME avec le game_id :-----------", data[0].game_id);
    //     console.log(dataGame[0]);
    // }
   
    // if (dataTeams) {
    //     console.log("---------Info sur les TEAMS avec le user_id :-----------", data[0].user_id);
    //     console.log(dataTeams);
    // }




// if (dataUser) {
//     // Pk erreur ??? => La propriété 'offline_image_url' n'existe pas sur le type 'API_USER[] => prtant si !!!
//     console.log(dataUser.offline_image_url);     // souvent vide
//     console.log(dataUser.profile_image_url);     // idem navGauche
// }

return (
    <div className="ContenuPrincipale">
        {(dataUser && dataChannel)
            ?
            <div>
                <ReactPlayer
                    url={`https://www.twitch.tv/${userLogin}`}
                    className="react-player"
                    controls
                />

                <Image
                    src={dataUser[0].profile_image_url}
                    //src={ImageSized(data?.offline_image_url, "50", "50")}
                    width={30}
                    height={30}
                    alt="avatar"
                    style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                />
                <div>
                    <p>{dataUser[0].display_name} </p>
                    <p>{dataChannel[0].title}</p>
                    {/* <Link href='https://www.twitch.tv/directory/game/League%20of%20Legends'>{dataChannel[0].game_name}</Link>      */}
                    <Link href={`/categories/${dataChannel[0].title}`}>{dataChannel[0].game_name}</Link>
                    <p>{dataChannel[0].tags[0]}</p>
                    {dataChannel[0].tags[0]
                        ?
                        <p>{dataChannel[0].tags[1]}</p>
                        :
                        null
                    }
                    <button className="text-[#9147ff]">Réagir</button>
                    <button className="text-[#ffffff] bg-[#9147ff]">Suivre</button>
                    <button className="BTNSub">{"S'abonner"}</button>
                    

                    <p>(getStream : .viewer_count, ms comment ???) (nb followers du stream, se met à jour
                        constamment)</p>
                    <p>08:07:55 (temps de la vidéo, se met à jour constamment)</p>
                    <p>Bouton : Partage + Plus doptions</p>
                </div>
                <div className=''>
                    <p>Concernant {dataUser[0].display_name}</p>
                    {dataFollowers
                        ?
                        <p>{dataFollowers.total} followers</p>
                        :
                        null
                    }
                    <p>{dataUser[0].description}</p>
                </div>

             








                {/* <div>
                    <p>{data[0].display_name} (display_name)</p>
                    <p>DIV2 SUMMER - LIL vs JL - W2D2 - BO1</p>
                    <p>League of Legends</p>       https://www.twitch.tv/directory/game/League%20of%20Legends 
                    <p>Boutons : Esport + Français</p>
                    <p>Boutons : Réagir + Suivre + Sabonner</p>
                    <p>12426 (nb followers, se met à jour constamment)</p>
                    <p>08:07:55 (temps de la vidéo, se met à jour constamment)</p>
                    <p>Bouton : Partage + Plus doptions</p>
                </div>
                <div>
                    <p>Concernant {data[0].display_name}</p>
                    <p>xxx followers</p>
                    <p>{data[0].description}</p>
                </div>*/}
            </div>


            :
            <div>User login invalide</div>
        }

        {/* Nb totel Followers :  Get Channel Followers */}

    </div>)
}
