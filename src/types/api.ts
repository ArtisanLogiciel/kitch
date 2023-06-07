export type API<T> = undefined | null | T;

export type API_CATEGORIES = {
  box_art_url: string;
  id: string;
  igdb_id: string;
  name: string;
};

export type API_STREAMS = {
  game_id: string;
  game_name: string;
  id: string;
  is_mature: boolean;
  language: string;
  started_at: string;
  tag_ids: string[];
  tags: string[];
  thumbnail_url: string;
  title: string;
  type: string;
  user_id: string;
  user_login: string;
  user_name: string;
  viewer_count: number;
};

export type API_USERS = {
  broadcaster_type : string,
  created_at : string,  
  description : string,
  display_name : string,
  id : string,
  login : string,
  offline_image_url : string,
  profile_image_url : string,
  type : string,
  view_count : number
};

 export type API_CHANNELS = {
  broadcaster_id : string
  broadcaster_language : string,
  broadcaster_login : string,
  broadcaster_name : string,
  delay : number,
  game_id : string,
  game_name : string,
  tags : string[],
  title : string
 };

 export type API_USERFOLLOWERS = {
  total : number,
 };
export type API_GAMES = {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string;
}