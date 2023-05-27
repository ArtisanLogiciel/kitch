// Types
import { API, API_CATEGORIES, API_STREAMS } from "@/types/api";

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
    const response = await fetch(`${BASE}/${API_TWITCH}/streams`, { next: { revalidate: 10 } });
    const data: API<API_STREAMS[]> = await response.json();
    return data;
  } catch (error) {
    console.log("Error in getStreams: ", error);
  }
}
