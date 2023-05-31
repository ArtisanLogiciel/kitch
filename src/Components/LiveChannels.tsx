"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

// Components

// Types
import { API, API_STREAMS } from "@/types/api";

// Utils
import { getStreams } from "@/utils/api";
import { getImageSized } from "@/utils/getImageSized";
import { getNumber_K_Mode } from "@/utils/getNumber_K_Mode";

export async function LiveChannels() {
  const router = useRouter();

  const [liveChannels, setLiveChannels] = React.useState<API<API_STREAMS[]>>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStreams();
        setLiveChannels(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return liveChannels ? (
    <div>
      <h2 className="text-lg font-medium m-2">
        <Link href="" id="TitreChainesLive">
          Chaînes lives{" "}
        </Link>
        qui pourraient vous plaire
      </h2>
      <div className="Disposition">
        {liveChannels.map((element, index) => {
          return (
            index < 8 && (
              <div
                className="SectionVideo"
                key={index}
                onClick={() => router.push(`/${element.user_name}`)}
              >
                <div style={{ position: "relative", width: "100%" }}>
                  <Image
                    src={getImageSized(element?.thumbnail_url, "126", "94")}
                    style={{ width: "100%", height: "100%" }}
                    alt="logo twitch"
                    width={24}
                    height={28}
                  />
                  <div className="DivLive">
                    <p style={{ margin: "3px" }}>LIVE</p>
                  </div>
                  <div className="DivSpectateurs">
                    {" "}
                    <p style={{ margin: "3px" }}>
                      {element?.viewer_count <= 1000
                        ? element?.viewer_count
                        : getNumber_K_Mode(element?.viewer_count)}{" "}
                      <span>spectateurs</span>
                    </p>
                  </div>
                </div>
                <div className="DetailsVdeoSection">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      marginTop: "2%",
                    }}
                  >
                    <Image
                      src={getImageSized(element?.thumbnail_url, "126", "94")}
                      alt="logo twitch"
                      width={24}
                      height={28}
                      style={{ borderRadius: "50%", width: "40px", height: "40px" }}
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      marginTop: "2%",
                    }}
                  >
                    <h3 style={{ width: "100%", fontSize: "14px", fontWeight: "600" }}>
                      {element?.title.length <= 50
                        ? element?.title
                        : element?.title.substring(0, 50) + "..."}
                    </h3>
                    <p style={{ width: "100%", fontSize: "13px", color: "#53535F" }}>
                      {element?.user_name}
                    </p>
                    <p style={{ width: "100%", fontSize: "13px", color: "#53535F" }}>
                      {element?.game_name}
                    </p>
                    <div className="w-full flex justify-start flex-wrap items-center flex-row ">
                      {element?.tags.map((tag, index) =>
                        index < 8 ? (
                          <div className="StyleTags2 mr-2" key={index}>
                            <p style={{ color: "#53535F", fontSize: "12px", padding: "5%" }}>
                              {tag}
                            </p>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  ) : null;
}
