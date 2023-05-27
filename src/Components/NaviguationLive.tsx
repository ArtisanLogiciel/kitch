"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

// Components
import { ImageSized, Nombres } from "./UsefulsComponents";

// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";

export default function NavigationLive() {
  const router = useRouter();

  const [data, setData] = React.useState<API<API_STREAMS[]>>(null);
  const [error, setError] = React.useState<any>(null);

  const chaine = "Chaînes recommandées";

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div> Error : {error.message}</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#efeff1",
        width: "19%",
        height: "100%",
        position: "fixed",
        zIndex: "900",
        top: "9vh",
        left: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          border: "1px solid transparent",
          width: "100%",
          height: "8%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontSize: "0.9em", fontWeight: "400" }}>{chaine.toLocaleUpperCase()}</h2>
        <svg
          width="3.5vw"
          height="3.5vh"
          version="1.1"
          viewBox="0 0 20 20"
          x="0px"
          y="0px"
          className="ScIconSVG-sc-1q25cff-1 dSicFr"
        >
          <g>
            <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
          </g>
        </svg>
      </div>

      <div
        style={{
          border: "1px solid transparent",
          width: "100%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        {!data ? (
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"80%"}
            animation="wave"
            style={{ backgroundColor: "#efeff1" }}
          />
        ) : (
          data.map((channelName: any, index: number) =>
            index > 9 ? null : (
              <div
                className="GridLive"
                key={index}
                onClick={() => router.push(`/${channelName?.user_name}`)}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={ImageSized(channelName.thumbnail_url, "50", "50")}
                    width={30}
                    height={30}
                    alt="avatar"
                    style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                  }}
                >
                  <div
                    style={{
                      width: "75%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <p>{channelName?.user_name}</p>
                    <p style={{ fontSize: "13px", fontWeight: "lighter" }}>
                      {channelName?.game_name.length > 17
                        ? channelName?.game_name.substring(0, 18) + "..."
                        : channelName?.game_name}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "25%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#eb0400",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <p style={{ fontSize: "13px", fontWeight: "lighter" }}>
                      {channelName?.viewer_count < 1000 ? (
                        <div>channelName?.viewer_count</div>
                      ) : (
                        Nombres(channelName?.viewer_count)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
