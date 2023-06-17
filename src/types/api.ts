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

export type API_GAMES = {
  id: string;
  name: string;
  box_art_url: string;
  igdb_id: string;
}

export type API_USERS = {
  broadcaster_type: string,
  created_at: string,
  description: string,
  display_name: string,
  id: string,
  login: string,
  offline_image_url: string,
  profile_image_url: string,
  type: string,
  view_count: number
};

export type API_CHANNELS = {
  broadcaster_id: string
  broadcaster_language: string,
  broadcaster_login: string,
  broadcaster_name: string,
  delay: number,
  game_id: string,
  game_name: string,
  tags: string[],
  title: string
};

export type API_USERFOLLOWERS = {
  total: number,
};

export type API_ALL_TAGS = {
  [key: string]: string
};

export type API_TEAMS = {
  background_image_url: string,
  banner: string,
  broadcaster_id: string,
  broadcaster_login: string,
  broadcaster_name: string,
  created_at: string,
  id: string,
  info: string,
  team_display_name: string,
  team_name: string,
  thumbnail_url: string,
  updated_at: string,
};


export type API_CHAT = {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  is_anonymous: boolean;
  user_id: string;
  user_name: string;
  channel_id: string;
  channel_name: string;
  message: {
    message_id: string;
    user_id: string;
    user_name: string;
    user_badges: {
      [badgeName: string]: string;
    };
    user_color: string;
    user_notice_params?: string[];
    system_notice?: string;
    message_content: string;
    message_type: string;
    message_emotes: {
      [emoteId: string]: string[];
    };
    message_bits?: number;
    message_bits_context?: string;
    message_bits_total?: number;
    message_is_automod?: boolean;
  };
};

export type API_GAMES_CLIPS = {
  broadcaster_id: string;
  broadcaster_name: string;
  created_at: string;
  creator_id: string;
  creator_name: string;
  game_id: string;
  id: string;
  language: string;
  thumbnail_url: string;
  title: string;
  url: string;
  embed_url: string;
  video_id: string;
  view_count: number;
};

export type API_GAME_STREAMS = {
  id: string;
  user_id: string;
  user_name: string;
  user_login: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  tags: string[];
  is_mature: boolean;
};

export type API_GAME_VIDEOS = {
  id: string;
  stream_id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  url: string;
  thumbnail_url: string;
  viewable: string;
  view_count: number;
  language: string;
  type: string;
  duration: string;
  muted_segments: Object[];
};