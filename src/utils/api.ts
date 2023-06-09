//'use server';

// Types
import { API, API_CATEGORIES, API_GAMES, API_STREAMS} from "@/types/api";

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

export async function getStreams() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/streams`);
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getStreams: ", error);
  }
}

export async function getGames() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/games`);
    const data: API<any[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getGames: ", error);
  }
}
export async function GetVogue() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/vogue`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getVogue: ", error);
  }
}
export async function GetRecentlyGames() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/RecentlyGames`);
    const data: API<API_GAMES[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetRecentlyGames: ", error);
  }
}
export async function LatestGamesStreams() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/LatestGamesStreams`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in LatestGamesStreams: ", error);
  }
}
export async function GetStreamGamesOne() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/StreamGamesOne`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetStreamGamesOne: ", error);
  }
}
export async function GetStreamGamesTwo() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/StreamGamesTwo`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetStreamGamesTwo: ", error);
  }
}
export async function GetStreamGamesThree() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/StreamGamesThree`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetStreamGamesThree: ", error);
  }
}
export async function GetCreative() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/Creative`);
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetCreative: ", error);
  }
}
export async function GetCombat() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/fight`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetCombat: ", error);
  }
}
export async function GetPlatformAndGames() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/PlatformAndGames`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetPlatformAndGames: ", error);
  }
}
export async function GetCarSimulation() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/CarSimulation`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetPlatformAndGames: ", error);
  }
}
export async function GetSport() {
  try {
    const response = await fetch(`${BASE}/${API_TWITCH}/Sport`, { cache: 'no-store' });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetPlatformAndGames: ", error);
  }
}
// GET https://api.twitch.tv/helix/analytics/games
