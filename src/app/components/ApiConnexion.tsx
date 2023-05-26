"use client";
import React, { ReactNode, useEffect } from "react";

// const TWITCH_OAUTH_URL = "https://id.twitch.tv/oauth2/authorize";
// const CLIENT_ID = "r8qdu1nlfcd0jqgdq2yhyp31pdkiu0";
// const REDIRECT_URI = "http://localhost:3000/";
// const RESPONSE_TYPE = "token";
const TWITCH_OAUTH_URL = process.env.TWITCH_OAUTH_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const RESPONSE_TYPE = process.env.RESPONSE_TYPE;

type TwitchParams = {
  client_id?: string;
  redirect_uri?: string;
  response_type?: string;
};

function encodeQueryString(params: Record<string, string | number | boolean>) {
  let items = [];
  for (let key in params) {
    let value = encodeURIComponent(params[key]);
    items.push(`${key}=${value}`);
  }
  return items.join("&");
}

function twitchAuthentication() {
  const params: TwitchParams = {
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: RESPONSE_TYPE,
  };

  window.location.href = `${TWITCH_OAUTH_URL}?${encodeQueryString(params)}`;
}

function getUrlQueryStringParams() {
  const items = window.location.hash.slice(1).split("&");
  const params: Record<string, string | number | boolean> = {};

  for (let i in items) {
    let key = decodeURIComponent(items[i].split("=")[0]);
    let value = encodeURIComponent(items[i].split("=")[1]);

    params[key] = value;
  }
  return params;
}

function twitchIsAuthenticated() {
  const params = getUrlQueryStringParams();

  return params.access_token !== undefined;
}

function fetchGetJsonRequest(url: string, params = {}, headers = {}) {
  if (params) {
    url = `${url}?${encodeQueryString(params)}`;
  }

  return fetch(url, {
    headers: headers,
  });
}

function twitchGetLastFollowers() {
  const params = getUrlQueryStringParams();

  return fetchGetJsonRequest(
    "https://api.twitch.tv/helix/users/follows",
    {
      to_id: "92454370",
    },
    {
      "client-id": CLIENT_ID,
      Authorization: `Bearer ${params.access_token}`,
    }
  )
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => {
      throw new Error(error);
    });
}

export default function ApiComponent() {
  const [data, setData] = React.useState<any>(null);
  useEffect(() => {
    console.log("twitchIsAuthenticated = ", twitchIsAuthenticated());
    if (!twitchIsAuthenticated()) {
      twitchAuthentication();
    }
    twitchGetLastFollowers().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      {data?.map((item: any) => (
        <div key={item.id}>{item}</div>
      ))}
    </div>
  );
}
