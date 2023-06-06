'use server';
// Types
import { API, API_CATEGORIES, API_STREAMS, API_USERS, API_CHANNELS, API_USERFOLLOWERS } from "@/types/api";

// Commons
import { URL } from "@/commons/commons";

const { BASE, API_TWITCH } = URL;

export async function getCategories() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/categories`);
    const data: API<API_CATEGORIES[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getCategories: ", error);
  }
}


// Info sur les Streams => https://dev.twitch.tv/docs/api/reference/#get-streams (Gets a list of all streams)
export async function getStreams() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/streams`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getStreams: ", error);
  }
}

// Info sur un USER => https://dev.twitch.tv/docs/api/reference/#get-users (Gets information about one or more users)
export async function getUser(userLogin: string) {

  console.log("-----URL getUser = ", `${BASE}/${API_TWITCH}/user?username=${userLogin}`);

  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/user?userlogin=${userLogin}`, { cache: 'no-store' });
    const data: API<API_USERS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getUser: ", error);
  }
}

// Info sur une CHAINE => https://dev.twitch.tv/docs/api/reference/#get-channel-information (Gets information about one or more channels.)
export async function getChannel(broadcaster_id: string) {

  console.log("-----URL getChannel = ", `${BASE}/${API_TWITCH}/channel?broadcaster_id=${broadcaster_id}`);

  // =>  http://localhost:3000/api/twitch/channel?broadcaster_id=407388596

  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/channel?broadcaster_id=${broadcaster_id}`, { cache: 'no-store' });
    const data: API<API_CHANNELS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getChannel: ", error);
  }
}


// AH : pas besoin pour moi
// Info sur un GAME  => https://dev.twitch.tv/docs/api/reference/#get-games (Gets information about specified categories or games.)
// export async function getGame(game_id: string) {

//   console.log("-----URL getGame = ", `${BASE}/${API_TWITCH}/game?game_id=${game_id}`);

//   try {
//     const response = await fetch(`${BASE}/${API_TWITCH}/game?game_id=${game_id}`, { cache: 'no-store' });
//     const data: API<API_STREAMS[]> = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error in getGame: ", error);
//   }
// }

// Info sur les CHANNEL_FOLLOWER  => https://dev.twitch.tv/docs/api/reference/#get-channel-followers (Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.)
export async function getFollowers(broadcaster_id: string) {

  console.log("-----URL getFollowers = ", `${BASE}/${API_TWITCH}/followers?broadcaster_id=${broadcaster_id}`);

  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/followers?broadcaster_id=${broadcaster_id}`, { cache: 'no-store' });
    const data:  API<API_USERFOLLOWERS> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getFollowers: ", error);
  }
}

// Info sur les EQUIPES  => https://dev.twitch.tv/docs/api/reference/#get-channel-teams (Gets the list of Twitch teams that the broadcaster is a member of.)
export async function getTeams(broadcaster_id: string) {

  console.log("-----URL getTeams = ", `${BASE}/${API_TWITCH}/team?broadcaster_id=${broadcaster_id}`);

  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/team?broadcaster_id=${broadcaster_id}`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getTeams: ", error);
  }
}